import React from "react";
import { FaHeart } from "react-icons/fa";
import { MenuItem } from "react-pro-sidebar";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import "src/components/Layout/module.scss";

const Footer = () => {
  return (
    <footer>
      <small>
        © {new Date().getFullYear()} made with{" "}
        <FaHeart style={{ color: "red" }} /> by -{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kitribob.wiki/"
        >
          PDxF BoB 11th Project
        </a>
      </small>
      <div>
        <MenuItem icon={<AiOutlineGithub />}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BoB11-BolockChain/PDxF"
          >
            Our Github
          </a>
        </MenuItem>
        <MenuItem icon={<AiOutlineTwitter />}>
          {" "}
          <a target="_blank" rel="noopener noreferrer" href="notyet">
            Our Twitter
          </a>
        </MenuItem>
      </div>
    </footer>
  );
};

export default Footer;
