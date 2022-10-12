import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";

const Info = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/profile", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionid: window.sessionStorage.getItem("sessionId") })
      });
      if (res.ok) {
        const js = await res.json();
        setData(js.data);
        setDataLoaded(true);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <>
        <header>
          <h1>Profile</h1>
        </header>
        {dataLoaded ? (
          <>
            <p>Email: {data.email}</p>
            <p>id: {data.id}</p>
          </>
        ) : (
          <p>loading</p>
        )}
      </>
    </Layout>
  );
};

export default Info;
