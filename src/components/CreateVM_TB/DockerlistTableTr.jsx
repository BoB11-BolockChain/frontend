import React from "react";
import TableTd from "./DockerlistTableTd";
import Loading from "src/components/Loading";

const TableTr = ({ data }) => {
  return (
    <tbody>
      {data ? (
        data.map((d) => {
          return <TableTd key={d.ContainerID} data={d} />;
        })
      ) : (
        <Loading />
      )}
    </tbody>
  );
};

export default TableTr;
