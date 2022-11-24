import Swal from "sweetalert2";

const DockerimagelistDropdown = (data) => {
  const Rdata = data.data;
  const DeleteDockerImage = () => {
    Swal.fire({
      title: "연관된 컨테이너도 지워집니다.",
      text: 'you want to delete "' + Rdata.REPOSITORY + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = {
          Container_Name: Rdata.REPOSITORY,
          IMAGE_ID: Rdata.IMAGE_ID,
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
            icon: "warning",
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
          Docker_REPOSITORY: Rdata.REPOSITORY,
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
      <td
        colSpan="2"
        onClick={EditDockerName}
        style={{ background: "#4caf50" }}
      >
        Edit Name
      </td>
      <td
        colSpan="2"
        onClick={DeleteDockerImage}
        style={{ background: "#e53935" }}
      >
        Delete Image
      </td>
    </>
  );
};

export default DockerimagelistDropdown;
