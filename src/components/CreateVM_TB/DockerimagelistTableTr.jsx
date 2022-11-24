import React from "react";
import TableTd from "./DockerimagelistTableTd";
import Loading from "src/components/Loading";

const TableTr = ({ data }) => {
  return (
    <tbody>
      {data ? (
        data.map((d) => {
          return <TableTd key={d.REPOSITORY} data={d} />;
        })
      ) : (
        <Loading />
      )}
    </tbody>
  );
};

export default TableTr;
