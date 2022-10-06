import React, { useState } from "react";
import Layout from "src/components/Layout/Layout";

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
          <a href="signup">Start</a>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
