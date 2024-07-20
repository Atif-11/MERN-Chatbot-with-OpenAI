import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome to MERN-GPT 🚀",
        1000,
        "Your AI-powered assistant 🤖",
        1500,
        "Built with the MERN stack 🖥️",
        2000,
        "Seamless integration of GPT-4o-mini 🧠",
        2500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
