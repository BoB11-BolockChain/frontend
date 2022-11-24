import React, { useState } from "react";
import Dropdown from "src/components/CreateVM_TB/DockerlistDropdown";

const TableTd = ({ data }) => {
  const [view, setView] = useState(false);

  const ImageName = (temp) => {
    if (temp.substr(0, 6) == "sha256") {
      const return_temp = temp.substr(7, 22);
      return return_temp;
    } else {
      // console.log("kk");
      return temp;
    }
  };
  const showport = (temp) => {
    if (temp.PORTS[0].PrivatePort == 22) {
      return temp.PORTS[0].PublicPort;
    } else {
      return temp.PORTS[1].PublicPort;
    }
  };
  return (
    <>
      <tr>
        <td>{data.ContainerID}</td>
        <td>{ImageName(data.IMAGE)}</td>
        <td>{showport(data)}</td>
        <td>{data.STATUS}</td>
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
