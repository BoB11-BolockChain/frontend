import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const TableTd = ({ data, setModalState, handleRemove, admin }) => {
  const onRemove = (d) => {
    handleRemove(d);
  };

  return (
    <>
      <tr>
        <td>{data.IMAGE}</td>
        <td>{data.PORTS[0].PublicPort}</td>
        <td>{data.STATUS}</td>
        <td
          id="title"
          onClick={() => setModalState({ data: data, isOpen: true })}
        >
          {data.ContainerID}
        </td>
        {/* <td>{Object.toString(data.PORTS)}</td> */}

        {admin === 1 && (
          <>
            <td
              class="icon"
              onClick={() =>
                setModalState({ data: data, isOpen: true, ceState: "edit" })
              }
            >
              <FaRegEdit />
            </td>
            <td class="icon" onClick={() => onRemove(data)}>
              <FaRegTrashAlt />
            </td>
          </>
        )}
      </tr>
    </>
  );
};

export default TableTd;
