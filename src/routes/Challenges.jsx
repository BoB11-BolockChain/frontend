import React, { useEffect, useState } from "react";
import ChallengeModal from "src/components/ChallengeModal";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";
import Loading from "src/components/Loading";

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
            <p>
              <ReactiveButton
                onClick={() => setModalState({ data: d, isOpen: true })}
                idleText={<>{d.title}<br />{d.score}</>} /></p>
          </div>
        ))
      ) : (
        <Loading />
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
