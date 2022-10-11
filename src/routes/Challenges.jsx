import React, { useEffect, useState } from "react";
import ChallengeModal from "src/components/ChallengeModal";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";

const Challenges = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/info", {
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

  return (
    <Layout>
      <header>
        <h1>challenges</h1>
      </header>
      {dataLoaded ? (
        data.map((d) => (
          <div key={d.title}>
            <p>{d.score}</p>
            <p>{d.title}</p>
<<<<<<< HEAD
            <ReactiveButton
              onClick={() => setModalState({ data: d, isOpen: true })}
              idleText="Solve The Problem"
            />
          </>
=======
            <button onClick={() => setModalState({ data: d, isOpen: true })}>
              popup
            </button>
          </div>
>>>>>>> 1e0f24781fb6f1cd9cbf4c4871603e07396a88c5
        ))
      ) : (
        <p>loading</p>
      )}
      <ChallengeModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
      />
    </Layout>
  );
};

export default Challenges;
