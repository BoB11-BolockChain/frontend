import React from "react";
import TableTd from "./DockerlistTableTd";
import Loading from "src/components/Loading";

const TableTr = ({ data, setModalState, handleRemove, admin }) => {
  return (
    <tbody>
      {data ? (
        data.map((d) => {
          return (
            <TableTd
              key={d.ContainerID}
              data={d}
              setModalState={setModalState}
              handleRemove={handleRemove}
              admin={admin}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </tbody>
  );
};

export default TableTr;
