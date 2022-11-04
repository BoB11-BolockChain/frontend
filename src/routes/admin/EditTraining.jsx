import React, { useEffect, useState } from "react";
import ReactiveButton from "reactive-button";
import Loading from "src/components/Loading";

const EditChallenge = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);

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
    <>
      <header>
        <h1>EditChallenges</h1>
      </header>
      {dataLoaded ? (
        data.map((d) => (
          <div key={d.title}>
            <p>{d.score}</p>
            <p>{d.title}</p>

            <ReactiveButton
              color="secondary"
              onClick={() => {}}
              idleText="Solve The Problem"
            />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditChallenge;
