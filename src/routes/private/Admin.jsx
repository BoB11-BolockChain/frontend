import React from "react";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";

const Admin = () => {
  return (
    <Layout>
      <div>
        <header>
          <h1>PDxF</h1>
        </header>
        <p>
          PDxF is <strong>CDX Framework</strong> Admin Only Page
        </p>
        <div>
          <a href="http://pdxf.tk:8888" target="_blank">
            <ReactiveButton idleText="Visit Caldera" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
