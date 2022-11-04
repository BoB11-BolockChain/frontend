import { Menu, MenuItem, ProSidebar, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import {
  MdPerson,
  MdSettings,
  MdFlag,
  MdAreaChart,
  MdNotifications,
  MdHome,
} from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import sidebarBg from "./bg3.png";
import styled from "styled-components";

const Logo = styled.img`
  margin: 15px 20px 5px 20px;
  padding: 5px;
  width: 100px;
  height: 55px;
  filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(131deg) brightness(94%)
    contrast(88%);
`;

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const sessionId = window.sessionStorage.getItem("sessionId");

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
      // breakPoint="md"
      onToggle={handleToggleSidebar}
      style={{
        position: "fixed",
      }}
    >
      <SidebarHeader>
        <a href="/main">
          <Logo src="/img/PDxF_logo.svg" />
        </a>
        {!sessionId ? (
          <Menu iconShape="circle">
            <SubMenu title="User" icon={<MdPerson />}>
              <MenuItem>
                Sign In
                <NavLink to="/signin" />
              </MenuItem>
              <MenuItem>
                Sign Up
                <NavLink to="/signup" />
              </MenuItem>
            </SubMenu>
          </Menu>
        ) : (
          <>
            <Menu iconShape="circle">
              <SubMenu title={sessionId} icon={<MdPerson />}>
                <MenuItem>
                  My Profile
                  <NavLink to="/user/profile" />
                </MenuItem>
                <MenuItem>
                  Team Profile
                  <NavLink to="/teamprofile" />
                </MenuItem>
                <MenuItem onClick={onClick}>Log Out</MenuItem>
              </SubMenu>
            </Menu>
            <Menu iconShape="circle">
              <SubMenu title="PDxF Management" icon={<MdSettings />}>
                <SubMenu title="Challenges Management">
                  <MenuItem>
                    Create Challenges
                    <NavLink to="/admin/selectoperation" />
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
                <MenuItem>
                  Dashboard
                  <NavLink to="/admin/dashboard" />
                </MenuItem>
              </SubMenu>
            </Menu>
          </>
        )}
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<MdHome />}>
            Main
            <NavLink to="/home" />
          </MenuItem>
          <MenuItem
            icon={<MdFlag />}
            suffix={<span className="badge red">New</span>}
          >
            Challenges
            <NavLink to="/user/challenges" />
          </MenuItem>
          <MenuItem icon={<MdAreaChart />}>
            Score Board
            <NavLink to="/scoreboard" />
          </MenuItem>
          <MenuItem
            suffix={<span className="badge yellow">3</span>}
            icon={<MdNotifications />}
          >
            Notifications
            <NavLink to="/notifications" />
          </MenuItem>
        </Menu>

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
              style={{
                display: "none",
              }}
            >
              collapsed
            </MenuItem>
          </div>
        </Menu>
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
            <GoMarkGithub />
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
