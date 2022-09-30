import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";

const Challenges = () => {
  // useEffect(async () => {
  //   const res = await fetch("http://www.pdxf.tk/challenges", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(res.json);
  // }, []);

  const onClick = () => {};

  const challenges = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <Layout>
      <div>
        <h1>challenges</h1>
        {challenges.map((c, i) => (
          <div>
            <h2>{c.id}</h2>
            <p>challenge {c.id}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Challenges;
