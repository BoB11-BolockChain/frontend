import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AbilitiesBox from "../components/AbilitiesBox";

const EditChallenge = () => {
  const { id } = useParams();

  // useEffect(async () => {
  // const res = await fetch("http://www.pdxf.tk/challenge/{id}", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(res.json());
  // }, []);

  return (
    <div>
      <p>edit challenge</p>
      <p>id : {id}</p>
      <p>here is challenge edit div</p>
      <AbilitiesBox />
    </div>
  );
};

export default EditChallenge;
