import React from "react";
import Swal from "sweetalert2";

const TableTd = ({ data }) => {
  const editqcow2 = async (e) => {
    Swal.fire({
      title: "Submit Widnows qcow2 name",
      text: 'Do not enter ".qcow2"',
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async (windowsid) => {
        const Sdata = {
          Newfilename: windowsid + ".qcow2",
          Originfilename: data.title,
        };
        e.preventDefault();
        console.log(Sdata);
        const res = await fetch("http://www.pdxf.tk:8000/editqcow2", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Sdata),
        });
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "Edit qcow2 Name Success.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      },
    });
  };

  const delqcow2 = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "qcow2 파일을 지우시겠습니까?",
      text: 'you want to delete "' + data.title + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("http://www.pdxf.tk:8000/delqcow2", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Filename: data.title,
          }),
        });
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "qcow2 has been deleted.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      }
    });
  };

  const startqcow2 = async (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "warning",
      title: "Starting VM...",
      text: "Please Wait a Second",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await fetch("http://www.pdxf.tk:8000/startqcow2", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ISO_name: data.title,
      }),
    });
    Swal.showLoading();
    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Start Success.",
        confirmButtonText: "OK",
        preConfirm: () => {
          window.location.reload();
        },
      });
    }
  };

  return (
    <>
      <tr key={data.title}>
        <td>{data.title}</td>
        <td onClick={startqcow2}>
          <button className="option-btn">Start qcow2</button>
        </td>
        <td
        ><button className="option-btn">Clone qcow2</button>
        </td>
        <td onClick={editqcow2}>
          <button className="option-btn">Edit qcow2 Name</button>
        </td>
        <td onClick={delqcow2}>
          <button className="option-btn">Delete qcow2</button>
        </td>
      </tr>
    </>
  );
};

export default TableTd;
