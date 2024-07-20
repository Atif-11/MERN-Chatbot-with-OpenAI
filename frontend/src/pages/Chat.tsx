import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";

const chatMessages = [
  {
    role: "user",
    content: "Can you tell me the weather forecast for tomorrow?",
  },
  {
    role: "assistant",
    content:
      "The weather forecast for tomorrow is sunny with a high of 25°C and a low of 15°C.",
  },
  {
    role: "user",
    content: "What is the capital of France?",
  },
  {
    role: "assistant",
    content: "The capital of France is Paris.",
  },
  {
    role: "user",
    content: "Can you help me find a recipe for chocolate cake?",
  },
  {
    role: "assistant",
    content:
      "Sure! Here is a simple recipe for chocolate cake: [link to recipe].",
  },
  {
    role: "user",
    content: "What are the latest headlines in technology?",
  },
  {
    role: "assistant",
    content:
      "The latest headlines in technology include a major breakthrough in AI research, the launch of a new smartphone, and advancements in quantum computing.",
  },
  {
    role: "user",
    content: "How do I reset my password?",
  },
  {
    role: "assistant",
    content:
      "To reset your password, go to the account settings, click on 'Forgot Password', and follow the instructions sent to your email.",
  },
];
const Chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            backgroundColor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split("")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "sork sans" }}>
            You're talking with a MERN ChatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "sork sans", my: 4, p: 3 }}>
            You can ask some questions related to Business, General Knowledge,
            Education, etc. Please avoid sharing personal information.
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: 700,
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[500],
              hover: {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: 600,
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div
          style={{
            width: "100%",
            padding: "20px",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          {" "}
          <input
            type="text"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "10px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton sx={{ ml: "auto", color: "white" }}>
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
