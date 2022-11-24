import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import "src/components/Layout/module.scss";

const Footer = () => {
  return (
    <footer>
      <small>
        © {new Date().getFullYear()} made with{" "}
        <FaHeart style={{ color: "red", display: "inline" }} />
        <br></br>
        by -{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kitribob.wiki/"
        >
          PDxF BoB 11th Project
        </a>
      </small>

      <div className="footer-icon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/BoB11-BolockChain/PDxF"
        >
          {<AiOutlineGithub />}
        </a>
        <a target="_blank" rel="noopener noreferrer" href="notyet">
          {<AiOutlineTwitter />}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
