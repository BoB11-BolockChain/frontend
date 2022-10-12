import React, { useEffect, useRef, useState } from "react";
import Layout from "src/components/Layout/Layout";
import Loading from "src/components/Loading";
import useGetFetch from "src/hooks/useGetFetch";
import useWebSocket from "src/hooks/useWebSocket";

const Progress = () => {
  const msg = useWebSocket("ws://localhost:8000/progress");
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    if (msg) {
      setSteps(JSON.parse(msg)["pauoik"]["steps"]);
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
            <p>{step.name}</p>
            <p>{step.status}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Progress;
