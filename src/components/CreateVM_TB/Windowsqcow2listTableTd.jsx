import { PanoramaVertical } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
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
        Filename: data.title,
      }),
    });
    // const res2 = await fetch("http://www.pdxf.tk:8000/RunningEffect", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type" : "application/json",
    //   },
    //   body: JSON.stringify({
    //     Filename: data.title,
    //   }),
    // });
    Swal.showLoading();
    // if (res2.ok) {
      
    // }
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

  const cloneqcow2 = async (e) => {
    Swal.fire({
      title: "Submit Clone qcow2 name",
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
          Clonefilename: windowsid + ".qcow2",
          Filename: data.title,
        };
        e.preventDefault();
        console.log(Sdata);
        const res = await fetch("http://www.pdxf.tk:8000/cloneqcow2", {
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
            title: "Clone qcow2 Success.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      },
    });
  };

  return (
    <>
      <tr key={data.title}>
        <td width="60%">{data.title}</td>
        <td onClick={startqcow2}>
          <button className="option-btn">Start</button>
        </td>
        <td onClick={cloneqcow2} >
          <button className="option-btn">Clone</button>
        </td>
        <td onClick={editqcow2}>
          <button className="option-btn">Rename</button>
        </td>
        <td onClick={delqcow2}>
          <button className="option-btn">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default TableTd;
