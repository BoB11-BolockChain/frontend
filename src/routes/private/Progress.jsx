import React from "react";
import useGetFetch from "src/hooks/useGetFetch";

const Progress = ({ operationId }) => {
  const [isFetched, data] = useGetFetch(
    `http://pdxf.tk:8000/progress/${operationId}`
  );

  return (
    <>
      {!isFetched ? (
        <p>loading</p>
      ) : (
        <ul>
          {data.map((d) => (
            <li key={d.id}>{d.result}</li>
          ))}
        </ul>
      )}
    </>
  );
};
