import React from "react";
import "src/components/Layout/module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import styled from "styled-components";
import "src/components/Layout/header.scss";
import { BiSearchAlt } from "react-icons/bi";

const Hcontainer = styled.div`
  clear: both;
  display: block;
  content: "";
`;

const Swtich_ = styled.div``;

const Item = styled.div`
  padding: 5px;
  float: left;
  width: 100px;
  text-align: center;
  border-right: none;
`;

const Item_last = styled.div`
  float: right;
  padding: 10px;
  border-left: none;
  width: 100px;
  text-align: center;
  white-space: nowrap;
`;

const Aside = ({ collapsed, handleCollapsedChange }) => {
  const sessionId = window.sessionStorage.getItem("sessionId");
  const navigate = useNavigate();
  const onClick = () => {
    window.sessionStorage.removeItem("sessionId");
    navigate("/");
  };
  return (
    <>
      <Hcontainer>
        <Item>
          <Swtich_>
            collapsed
            <Switch
              height={30}
              width={50}
              checkedIcon={true}
              uncheckedIcon={true}
              onChange={handleCollapsedChange}
              checked={collapsed}
              onColor="#219de9"
              offColor="#bbbbbb"
            />
          </Swtich_>
        </Item>
        <Item>
          <div class="search-box">
            <button class="btn-search">{<BiSearchAlt />}</button>
            <input
              type="text"
              class="input-search"
              placeholder="Type to Search..."
            />
          </div>
        </Item>
        {!sessionId ? (
          <>
            <Item_last>
              <NavLink to="/signin">Sign In</NavLink>
            </Item_last>
            <Item_last>
              <NavLink to="/signup">Sign Up</NavLink>
            </Item_last>
          </>
        ) : (
          <>
            <Item_last>ID : {sessionId}</Item_last>
            <Item_last>
              <NavLink onClick={onClick}>Log Out</NavLink>
            </Item_last>
          </>
        )}
      </Hcontainer>
    </>
  );
};

export default Aside;
