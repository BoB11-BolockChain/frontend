import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AbilitiesBox from "src/components/AbilitiesBox";
import Layout from "src/components/Layout/Layout";

const EditChallenge = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(async () => {
    const res = await fetch(`http://www.pdxf.tk:8000/challenges/?id=${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setDataLoaded(true);
      const js = await res.json();
      setData(js);
      console.log(js);
    }
  }, []);

  return (
    <Layout>
      <div>
        <p>edit challenge</p>
        {dataLoaded ? <p>{data.id}</p> : <p>loading</p>}
        <AbilitiesBox />
      </div>
    </Layout>
  );
};

export default EditChallenge;
