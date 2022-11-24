import Swal from "sweetalert2";

const DockerlistDropdown = (data) => {
  const Rdata = data.data;

  const accessSSH = () => {
    Swal.fire({
      icon: "success",
      title: "ssh -p " + Rdata.PORTS[0].PublicPort + " root@pdxf.tk",
      confirmButtonText: "OK",
      // showConfirmButton: false,
      // timer: 1500,
    });
  };

  const DockerDestroy = async (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: 'you want to delete "' + Rdata.ContainerID + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Destroy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = { Docker_containerID: Rdata.ContainerID };
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
          Docker_containerID: Rdata.ContainerID,
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
  return (
    <>
      <td onClick={accessSSH} style={{ background: "#4caf50" }}>
        Access SSH
      </td>
      <td
        onClick={CreateDockerImage}
        colSpan="2"
        style={{ background: "#4860b0" }}
      >
        Create Docker Images
      </td>
      <td onClick={DockerDestroy} style={{ background: "#e53935" }}>
        Destory
      </td>
      <td style={{ background: "#fa678c" }}></td>
    </>
  );
};
export default DockerlistDropdown;
