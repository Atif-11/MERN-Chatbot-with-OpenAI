import { NextFunction, Request, Response } from "express";
import User from "../models/User.js"
import {hash, compare} from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // Get all users from the DB
    try {
        const users = await User.find();
        return res.status(200).json({message: "OK", users });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause: error.message });
    }
};

export const userSignup = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // User Signup
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(401).send("Email already registered");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        // Create Token and store Cookie
        res.clearCookie(COOKIE_NAME,{
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,

        });

        const token = createToken(user._id.toString(), user.email, "7d")
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true, 
        });

        return res.status(201).json({message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause: error.message });
    }
};

export const userLogin = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // User Login
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).send("User does not exist");
        }

        const isPasswordCorrect = await compare(password, (await user).password);
        if(!isPasswordCorrect){
            return res.status(403).send("Email and password do not match");
        }

        res.clearCookie(COOKIE_NAME,{
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,

        });

        const token = createToken(user._id.toString(), user.email, "7d")
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true, 
        });
       
       return res.status(201).json({message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause: error.message });
    }
};

export const verifyUser = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // User Token check
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if(!user){
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        console.log(user._id.toString(), res.locals.jwtData.id);

        if(user._id.toString() !== res.locals.jwtData.id){
            return res.status(401).send("Permissions did not match")
        }
       return res.status(201).json({message: "OK", name: user.name, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause: error.message });
    }
};