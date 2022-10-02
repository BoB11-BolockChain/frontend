import React, { useEffect } from "react";

const AbilitiesBox = () => {
  // useEffect(async () => {
  //   const res = await fetch("http://www.pdxf.tk/abilities", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(res.json());
  // }, []);

  const data = [{ id: "fdsa" }, { id: "zcvz" }, { id: "qerwq" }];

  return (
    <div>
      <p>abilities box</p>
      <ul>
        {data.map((d, i) => (
          <li key={d.id}>{d.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default AbilitiesBox;
