import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Loading from "src/components/Loading";
import useWebSocket from "src/hooks/useWebSocket";

const Dashboard = () => {
  const msg = useWebSocket("ws://localhost:8000/progress");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (msg) {
      const json = JSON.parse(msg);
      setData(json.data);
      console.log(json.data);
    }
  }, [msg]);

  return !msg || !data ? (
    <Loading />
  ) : (
    <Layout>
      <p>progress dashboard</p>
      <ul>
        {data.map((d) => (
          <li key={d.userId}>
            <p>userid: {d.userId}</p>
            <p>status: {d.status}</p>
            <NavLink to={`/admin/dashboard/${d.challengeId}`}>
              go to page
            </NavLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Dashboard;
