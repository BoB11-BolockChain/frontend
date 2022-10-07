import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";

const Info = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const js = await res.json();
        setData(js.data);
        setDataLoaded(true);
      }
    };

    fetchData();
  }, []);
};

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
