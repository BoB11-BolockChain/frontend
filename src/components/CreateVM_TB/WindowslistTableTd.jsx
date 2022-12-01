import React from "react";
import Swal from "sweetalert2";

const TableTd = ({ data }) => {
  const createVM = async (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "warning",
      title: "Make VM files...",
      text: "Please Wait a Second",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const res = await fetch("http://www.pdxf.tk:8000/isotoqcow2", {
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
        title: "Convert Success.",
        confirmButtonText: "OK",
        preConfirm: () => {
          window.location.reload();
        },
      });
    }
  };
  const editISO = async (e) => {
    Swal.fire({
      title: "Submit Widnows ISO name",
      text: 'Do not enter ".iso"',
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async (windowsid) => {
        const Sdata = {
          windows_ISO_NewName: windowsid + ".iso",
          ISO_name: data.title,
        };
        e.preventDefault();
        console.log(Sdata);
        const res = await fetch("http://www.pdxf.tk:8000/editiso", {
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
            title: "Edit ISO Name Success.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      },
    });
  };

  const delISO = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "ISO파일을 지우시겠습니까?",
      text: 'you want to delete "' + data.title + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("http://www.pdxf.tk:8000/deliso", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ISO_name: data.title,
          }),
        });
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "ISO has been deleted.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      }
    });
  };
  return (
    <>
      <tr key={data.title}>
        <td>{data.title}</td>
        <td
          style={{ background: "white" }}
          onClick={createVM}
          value={data.title}
        ><button className="option-btn">Make Windows VM</button>
        </td>
        <td
          style={{ background: "white" }}
          onClick={editISO}
          value={data.title}
        >
          <button className="option-btn">Edit ISO Name</button>
        </td>
        <td
          style={{ background: "white" }}
          onClick={delISO}
          value={data.title}
        ><button className="option-btn"> Delete ISO</button>
        </td>
      </tr>
    </>
  );
};

export default TableTd;
