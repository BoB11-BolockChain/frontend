import React from "react";
import Swal from "sweetalert2";

const TableTd = ({ data }) => {
  const DockerDestroy = () => {
    Swal.fire({
      title: "Are you sure?",
      text: 'you want to delete "' + data.ContainerID + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes, Destroy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = { Docker_containerID: data.ContainerID };
        const res = await fetch("http://www.pdxf.tk:8000/dockerdestroy", {
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
            title: "Your file has been deleted.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      }
    });
  };

  const CreateDockerImage = async (e) => {
    Swal.fire({
      title: "Submit Docker Image name",
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
          Docker_containerID: data.ContainerID,
        };
        console.log(Sdata);
        e.preventDefault();
        const res = await fetch("http://www.pdxf.tk:8000/makedockerimage", {
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
            title: "Create Image Success.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      },
    });
  };

  const ImageName = (temp) => {
    if (temp.substr(0, 6) === "sha256") {
      const return_temp = temp.substr(7, 22);
      return return_temp;
    } else {
      // console.log("kk");
      return temp;
    }
  };
  const showport = (temp) => {
    if (temp.PORTS[0].PrivatePort === 22) {
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
        <td>{data.STATUS}</td>
        <td
          onClick={CreateDockerImage}
          colSpan="2"
          style={{ background: "white" }}
        >
          <button className="option-btn">Create Docker Images</button>
        </td>
        <td onClick={DockerDestroy} style={{ background: "white" }}>
          <button className="option-btn">Destory</button>
        </td>
      </tr>
    </>
  );
};

export default TableTd;
