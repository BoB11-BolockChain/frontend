import Swal from "sweetalert2";

const WinodwslistDropdown = (data) => {
  const onClick = async (e) => {
    e.preventDefault();
    const res = await fetch("http://www.pdxf.tk:8000/isotoqcow2", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ISO_name: data.data.title,
      }),
    });
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
  return (
    <>
      <td colSpan={3} style={{ background: "#e53935" }}>
        <div>
          <div> 123</div>
          <div onClick={onClick} value={data.title}>
            Make Windows VM
          </div>
        </div>
      </td>
    </>
  );
  // return (
  //   <>
  //     <td style={{ background: "#4caf50" }}>Delete ISO file</td>
  //     <td
  //       value={data.title}
  //       onClick={onClick}
  //       style={{ background: "#e53935" }}
  //     >
  //       Make Windows VM
  //     </td>
  //     <td style={{ background: "#fa678c" }}></td>
  //   </>
  // );
};
export default WinodwslistDropdown;
