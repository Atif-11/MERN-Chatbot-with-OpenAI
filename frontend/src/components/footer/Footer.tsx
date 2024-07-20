import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 30,
        }}
      >
        <p style={{ fontSize: "42px", textAlign: "center", padding: "20px" }}>
          Hi Guys! Welcome to the
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.linkedin.com/in/sayyed-muhammad-atif-ali-471a5621a/"}
            >
              MERN-GPT
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;