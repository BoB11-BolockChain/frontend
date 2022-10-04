import React, { useEffect, useState } from "react";
import ChallengeModal from "../components/ChallengeModal";
import Layout from "../components/Layout/Layout";

const Challenges = () => {
  // const [dataLoaded, setDataLoaded] = useState(false)
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

  const [modalState, setModalState] = useState({ data: {}, isOpen: false });

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
          <React.Fragment key={c.id}>
            <h2>{c.id}</h2>
            <p>challenge {c.id}</p>
            <button onClick={() => setModalState({ data: c, isOpen: true })}>
              popup
            </button>
          </React.Fragment>
        ))}
        <ChallengeModal
          isOpen={modalState.isOpen}
          setModalState={setModalState}
          data={modalState.data}
        />
      </div>
    </Layout>
  );
};

export default Challenges;
