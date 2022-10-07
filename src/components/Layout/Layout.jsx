import React, { useState } from "react";
import Aside from "src/components/Layout/Aside";
import styles from "src/components/Layout/Layout.module.scss";
import Footer from "src/components/Layout/Footer";

const Layout = (props) => {
  const [rtl] = useState(false);
  const [collapsed] = useState(false);
  const [image] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <div className={styles.layout}>
        <main className={styles.main}>
          {props.children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
