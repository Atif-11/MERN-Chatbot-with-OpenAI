import User from "../models/User.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
        return res
            .status(401)
            .json({ message: "User not registered OR Token malfunctioned." });
    }
    // 1. Grab chats of user 
    const chats = user.chats.map(({ role, content }) => ({ role, content }));
    chats.push({ content: message, role: "user" });
    // 2. Send all chats with the new one to OpenAI API
    // 3. Get the latest response
};
//# sourceMappingURL=chat-controllers.js.map