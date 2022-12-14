import React from "react";
import TableTd from "./WindowslistTableTd";
import Loading from "src/components/Loading";

const TableTr = ({ data }) => {
  return (
    <tbody>
      {data ? (
        data.map((d) => {
          return <TableTd key={d.num} data={d} />;
        })
      ) : (
        <Loading />
      )}
    </tbody>
  );
};

export default TableTr;
