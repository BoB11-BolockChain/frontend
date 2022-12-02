import React from "react";
import Swal from "sweetalert2";

const TableTd = ({ data }) => {
  const accessVM = () => {
    Swal.fire({
      title: "Access VNC",
      text: 'you want to Access "' + data.Domain + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Access",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = {
          VMname: data.Domain,
          VNC_port: String(data.Port),
        };
        fetch("http://www.pdxf.tk:8000/accessvncwindows", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send_data),
        });
        window.open(
          "https://www.pdxf.tk:6080/vnc.html",
          "Windows noVNC",
          "width=1000, height=700, scrollbars=yes, resizable=no"
        );
      }
    });
  };

  // const accessVM = () => {
  //   if (data.Port === 0) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "VM is not running",
  //       confirmButtonText: "OK",
  //       // showConfirmButton: false,
  //       // timer: 1500,
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: "success",
  //       title: "pdxf.tk:" + data.Port,
  //       confirmButtonText: "OK",
  //       // showConfirmButton: false,
  //       // timer: 1500,
  //     });
  //   }
  // };

  const VMDestroy = () => {
    Swal.fire({
      title: "Are you sure?",
      text: 'you want to delete "' + data.Domain + '" ?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Destroy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = { WinVMDomain: data.Domain };
        const res = await fetch("http://www.pdxf.tk:8000/delwinvm", {
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
            title: "Your VM has been deleted.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      }
    });
  };

  const VMsuspend = () => {
    if (data.State === "PAUSED") {
      Swal.fire({
        icon: "error",
        title: "VM is not Running",
        confirmButtonText: "OK",
        // showConfirmButton: false,
        // timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: 'you want to suspend "' + data.Domain + '" ?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Suspend",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const send_data = { WinVMDomain: data.Domain };
          const res = await fetch("http://www.pdxf.tk:8000/suspendwinvm", {
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
              title: "Your file has been suspended.",
              confirmButtonText: "OK",
              preConfirm: () => {
                window.location.reload();
              },
            });
          }
        }
      });
    }
  };

  const VMresume = () => {
    if (data.State === "RUNNING") {
      Swal.fire({
        icon: "error",
        title: "VM is Running",
        confirmButtonText: "OK",
        // showConfirmButton: false,
        // timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: 'you want to resume "' + data.Domain + '" ?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Resume",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const send_data = { WinVMDomain: data.Domain };
          const res = await fetch("http://www.pdxf.tk:8000/resumewinvm", {
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
              title: "Your file has been resumed.",
              confirmButtonText: "OK",
              preConfirm: () => {
                window.location.reload();
              },
            });
          }
        }
      });
    }
  };

  const VMstart = () => {
    if (data.State != "SHUTOFF") {
      Swal.fire({
        icon: "error",
        title: "VM is not Shut Off",
        confirmButtonText: "OK",
        // showConfirmButton: false,
        // timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: 'you want to start "' + data.Domain + '" ?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, Start",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const send_data = { WinVMDomain: data.Domain };
          const res = await fetch("http://www.pdxf.tk:8000/startwinvm", {
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
              title: "Your file has been started.",
              confirmButtonText: "OK",
              preConfirm: () => {
                window.location.reload();
              },
            });
          }
        }
      });
    }
  };
  return (
    <>
      <tr key={data.ID}>
        {/* <td>{data.ID}</td> */}
        <td>{data.Port}</td>
        <td>{data.Domain}</td>
        <td>{data.State}</td>
        <td onClick={accessVM}>
          <button className="option-btn">Access</button>
        </td>
        <td onClick={VMDestroy}>
          <button className="option-btn">Delete</button>
        </td>
        <td onClick={VMsuspend}>
          <button className="option-btn">Suspend</button>
        </td>
        <td onClick={VMresume}>
          <button className="option-btn">Resume</button>
        </td>
        <td onClick={VMstart}>
          <button className="option-btn">Start</button>
        </td>
      </tr>
    </>
  );
};

export default TableTd;
