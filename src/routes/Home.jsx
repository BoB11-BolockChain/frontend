import React from "react";
import { FaHeart } from "react-icons/fa";
import Layout from "src/components/Layout/Layout";
import { MenuItem } from "react-pro-sidebar";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import "src/components/Layout/module.scss";

const Home = () => {
  return (
    <Layout>
      <main>
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
        Welcome to PDxF this is the PDxF Main home page plz log in
      </main>
    </Layout>
  );
};

export default Home;
