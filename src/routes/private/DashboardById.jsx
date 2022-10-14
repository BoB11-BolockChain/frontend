import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Loading from "src/components/Loading";
import useGetFetch from "src/hooks/useGetFetch";
import useWebSocket from "src/hooks/useWebSocket";

const DashboardById = () => {
  const { id } = useParams();
  const msg = useWebSocket(`ws://www.pdxf.tk:8000/dashboard?id=${id}`);
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    if (msg) {
      console.log(id);
      const json = JSON.parse(msg);
      const paw = json["host_group"][0]["paw"];
      setSteps(json["steps"][paw]["steps"]);
    }
  }, [msg]);

  return !msg || !steps ? (
    <Loading />
  ) : (
    <Layout>
      <p>progress dashboard</p>
      <ul>
        {steps.map((step) => (
          <li key={step.ability_id}>
            <p>userid: {step.name}</p>
            <p>status: {step.status}</p>
            <p>time: {step.run}</p>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default DashboardById;
