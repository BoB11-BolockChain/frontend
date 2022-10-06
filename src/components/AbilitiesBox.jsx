import React, { useEffect, useState } from "react";

const AbilitiesBox = () => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://www.pdxf.tk:8000/abilities", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.ok) {
  //       console.log(res);
  //       setData(await res.json());
  //       setDataLoaded(true);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <p>abilities box</p>
      <ul>
        {dataLoaded ? (
          data.map((d) => <li key={d.id}>{d.id}</li>)
        ) : (
          <p>loading</p>
        )}
      </ul>
    </div>
  );
};

export default AbilitiesBox;
