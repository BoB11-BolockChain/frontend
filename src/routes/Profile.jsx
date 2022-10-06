import React from "react";
import Layout from "src/components/Layout/Layout";

function Profile({ user }) {
  const { email, id, pw } = user || {};
  return (
    <Layout>
      <header>
        <h1>Profile</h1>
      </header>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>id</dt>
      <dd>{id}</dd>
      <dt>pw</dt>
      <dd>{pw}</dd>
    </Layout>
  );
}

export default Profile;
