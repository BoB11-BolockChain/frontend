import React from "react";
import TableTd from "./WindowsVMlistTableTd";
import Loading from "src/components/Loading";
import { tableBodyClasses } from "@mui/material";



const TableTr = ({ data, name }) => {
  
  return (
    <tbody id="t-table">
      {data ? (
        data.map((d) => {
          return <TableTd key={d.ID} data={d} />;
        })
      ) : (
        <Loading />
      )}
    </tbody>
  );
};

export default TableTr;
