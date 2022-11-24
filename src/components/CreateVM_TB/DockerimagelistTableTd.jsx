import React, { useState } from "react";
import Dropdown from "src/components/CreateVM_TB/DockerimagelistDropdown";

const TableTd = ({ data }) => {
  const [view, setView] = useState(false);
  function Unix_timestamp(t) {
    var date = new Date(t * 1000);
    var year = date.getFullYear();
    var month = "0" + (date.getMonth() + 1);
    var day = "0" + date.getDate();
    var hour = "0" + date.getHours();
    var minute = "0" + date.getMinutes();
    var second = "0" + date.getSeconds();
    return (
      year +
      "-" +
      month.substr(-2) +
      "-" +
      day.substr(-2) +
      " " +
      hour.substr(-2) +
      ":" +
      minute.substr(-2) +
      ":" +
      second.substr(-2)
    );
  }

  return (
    <>
      <tr>
        <td>{data.REPOSITORY}</td>
        <td>{data.IMAGE_ID}</td>
        <td>{Unix_timestamp(data.CREATED)}</td>
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
