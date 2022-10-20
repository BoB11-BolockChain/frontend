import React, { useState } from "react";
import Aside from "src/components/Layout/Aside";
import styled from "styled-components";
import styles from "src/components/Layout/Layout.module.scss";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";

let Layout_ = styled.div`
  margin-left: 335px;
`;

const Layout = (props) => {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
    if (checked === true) {
      Layout_ = styled.div`
        margin-left: 150px;
      `;
    } else {
      Layout_ = styled.div`
        margin-left: 335px;
      `;
    }
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />

      <Layout_>
        <Header
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleImageChange={handleImageChange}
        />
        <main className={styles.main}>{props.children}</main>
        <Footer />
      </Layout_>
    </div>
  );
};

export default Layout;
