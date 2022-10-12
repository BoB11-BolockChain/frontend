import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Switch from "react-switch";

import { FaGem, FaList, FaGithub } from "react-icons/fa";
import {
  AiFillNotification,
  AiOutlineUser,
  AiFillProfile,
} from "react-icons/ai";
import { ImFire } from "react-icons/im";
import { BsGraphUp } from "react-icons/bs";
import sidebarBg from "./bg2.jpg";
import {
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

const Aside = ({ toggled, handleToggleSidebar }) => {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const sessionId = window.sessionStorage.getItem("sessionId");

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const navigate = useNavigate();
  const onClick = () => {
    window.sessionStorage.removeItem("sessionId");
    navigate("/");
  };

  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      style={{ position: "fixed" }}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            //textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          PDxF Project BoB 11th
        </div>
        <Menu iconShape="circle">
          <SubMenu title="User" icon={<AiOutlineUser />}>
            {!sessionId ? (
              <>
                <MenuItem>
                  Sign In
                  <NavLink to="/signin" />
                </MenuItem>
                <MenuItem>
                  Sign Up
                  <NavLink to="/signup" />
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>ID : {sessionId}</MenuItem>
                <MenuItem onClick={onClick}>Log Out</MenuItem>
              </>
            )}
          </SubMenu>
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaGem />}>
            Main
            <NavLink to="/main" />
          </MenuItem>
          <MenuItem
            icon={<ImFire />}
            suffix={<span className="badge red">New</span>}
          >
            Challenges
            <NavLink to="/challenges" />
          </MenuItem>
          <MenuItem icon={<BsGraphUp />}>
            Score Board
            <NavLink to="/scoreboard" />
          </MenuItem>
          <MenuItem
            suffix={<span className="badge yellow">3</span>}
            icon={<AiFillNotification />}
          >
            Notifications
            <NavLink to="/notifications" />
          </MenuItem>
          <SubMenu title="Profile" icon={<AiFillProfile />}>
            <MenuItem>
              My Profile
              <NavLink to="/profile" />
            </MenuItem>
            <MenuItem>
              Team Profile
              <NavLink to="/teamprofile" />
            </MenuItem>
          </SubMenu>
        </Menu>

        {!sessionId ? (
          <></>
        ) : (
          <>
            <Menu iconShape="circle">
              <SubMenu title="PDxF Management" icon={<FaList />}>
                <SubMenu title="Challenges Management">
                  <MenuItem>
                    Create Challenges
                    <NavLink to="/admin/createchallenges" />
                  </MenuItem>
                  <MenuItem>
                    Edit Challenges
                    <NavLink to="/admin/editchallenges" />
                  </MenuItem>
                  <MenuItem>
                    Delete Challenges
                    <NavLink to="/admin/deletechallenges" />
                  </MenuItem>
                </SubMenu>
                <MenuItem>
                  Homepage Setting
                  <NavLink to="/admin/homepagesetting" />
                </MenuItem>
                <MenuItem>
                  User & Team Setting
                  <NavLink to="/admin/userteamsetting" />
                </MenuItem>
              </SubMenu>
            </Menu>
          </>
        )}

        <Menu iconShape="circle">
          <div>
            <MenuItem
              icon={
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleCollapsedChange}
                  checked={collapsed}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
              }
            >
              collapsed
            </MenuItem>
          </div>
          <div>
            <MenuItem
              icon={
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleImageChange}
                  checked={image}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
              }
            >
              Background image
            </MenuItem>
          </div>
        </Menu>
        {/*<MenuItem>
              <div className="block">
                <Switch
                  height={16}
                  width={30}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleRtlChange}
                  checked={rtl}
                  onColor="#219de9"
                  offColor="#bbbbbb"
                />
                <span>RTL</span>
              </div>
        </MenuItem>*/}
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/BoB11-BolockChain/PDxF"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              viewSource
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
