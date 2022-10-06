import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaBars } from "react-icons/fa";
import Layout from "src/components/Layout/Layout";
import { MenuItem } from "react-pro-sidebar";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import module from "src/components/Layout/module.scss"; //지우면 안됨

const Main = ({ setLocale }) => {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? "ar" : "en");
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <Layout>
      <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <header>
          <h1>
            <img
              className="PDxF_Logo"
              alt="PDxF Logo"
              src="img/PDxF_icon.png"
            />
          </h1>
          <p>PDxF Project BoB 11th</p>
        </header>
        여기에 아무 내용이나 일단 메인 페이지 ㅎㅇ
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
              <a target="_blank" rel="noopener noreferrer" href="www.naver.com">
                Our Twitter
              </a>
            </MenuItem>
          </div>
        </footer>
      </main>
    </Layout>
  );
};

export default Main;
