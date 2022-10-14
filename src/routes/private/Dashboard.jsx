import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Loading from "src/components/Loading";
import useWebSocket from "src/hooks/useWebSocket";

const Dashboard = () => {
  const msg = useWebSocket("ws://www.pdxf.tk:8000/dashboard");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (msg) {
      const json = JSON.parse(msg);
      setData(json.data);
      console.log(json.data);
    }
  }, [msg]);

  const [dummy, setDummy] = useState("");
  const onClick = async () => {
    const res = await fetch("http://www.pdxf.tk:8000/createoperation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "runtest",
        adversary: { adversary_id: "f70bab6a-2266-4106-bd33-3f3c480321d9" },
        planner: { id: "aaa7c857-37a0-4c4a-85f7-4e9f7f30e31a" },
        source: { id: "ed32b9c3-9593-4c33-b0db-e2007315096b" },
        group: "test11",
        state: "running",
      }),
    });
    if (res.ok) {
      const jsonBody = await res.json();
      setDummy(jsonBody.id);
    }
  };

  return !msg || !data ? (
    <Loading />
  ) : (
    <Layout>
      <p>progress dashboard</p>
      <p>{dummy}</p>
      <button onClick={onClick}>create operation</button>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <p>userid: {d.name}</p>
            <p>status: {d.status}</p>
            <p>time: {d.run}</p>
            <p>{d.description}</p>
            <Link to={`/admin/dashboard/${d.id}`}>go to page</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Dashboard;
