import React, { useState } from "react";
import Dropdown from "src/components/CreateVM_TB/WindowslistDropdown";

const TableTd = ({ data }) => {
  const [view, setView] = useState(false);
  return (
    <>
      <tr key={data.title}>
        <td>{data.num}</td>
        <td>{data.title}</td>
        <td
          onClick={() => {
            setView(!view);
          }}
        >
          {view ? "⌃" : "⌄"}
        </td>
      </tr>
      <tr>{view && <Dropdown data={data} />}</tr>
    </>
  );
};

export default TableTd;
