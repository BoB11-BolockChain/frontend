import React from "react";
import Swal from "sweetalert2";

const TableTd = ({ data }) => {
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
  const DeleteDockerImage = () => {
    Swal.fire({
      title: "연관된 컨테이너도 지워집니다.",
      text: 'you want to delete "' + data.REPOSITORY + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = {
          Container_Name: data.REPOSITORY,
          IMAGE_ID: data.IMAGE_ID,
        };
        const res = await fetch("http://www.pdxf.tk:8000/destroydockerimage", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send_data),
        });
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "Your Image has been deleted.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      }
    });
  };

  const EditDockerName = async (e) => {
    Swal.fire({
      title: "Submit Docker Image name",
      text: 'Input "REPOSITORY:TAG"',
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async (dockerid) => {
        const Sdata = {
          Docker_image: dockerid,
          Docker_REPOSITORY: data.REPOSITORY,
        };
        console.log(Sdata);
        e.preventDefault();
        const res = await fetch("http://www.pdxf.tk:8000/editdockerimage", {
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
            title: "Edit Image Name Success.",
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
      <tr>
        <td>{data.REPOSITORY}</td>
        <td>{data.IMAGE_ID}</td>
        <td>{Unix_timestamp(data.CREATED)}</td>
        <td
          colSpan="2"
          onClick={EditDockerName}
          style={{ background: "white" }}
        >
          <button className="option-btn">Edit Name</button>
          
        </td>
        <td
          colSpan="2"
          onClick={DeleteDockerImage}
          style={{ background: "white" }}
        >
          <button className="option-btn">Delete Image</button>
        </td>
      </tr>
    </>
  );
};

export default TableTd;
