import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import ModalBoardCreate from "../ModalBoardCreate";
import ModalBoardEdit from "../ModalBoardEdit";

var isolist = [];
const BoardModal = ({ isOpen, setModalState, data, ceState, margin }) => {
  const searchtitle = (data) => {
    for (var i = 0; i < isolist.length; i++) {
      if (data === isolist[i].ISO__Name) {
        return isolist[i];
      }
    }
    return false;
  };
  // const navigate = useNavigate();
  const [iso, setiso] = useState([]);

  const onClick = async (e) => {
    e.preventDefault();

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
    if (res.ok) {
      alert("Convert success");
      const js = await res.json();
      console.log(js);
      isolist.push(js);
      console.log(isolist);
      // window.sessionStorage.setItem("ISO_port", js.ISO__Port);
      // window.sessionStorage.setItem("ISO_name", js.ISO__Name);
    }
    const item = e.target.value;
    // console.log(item);
    console.log(e.target.name);
    setiso([...iso, item]);
  };
  // const ISO__port = window.sessionStorage.getItem("ISO_port");
  // const ISO__name = window.sessionStorage.getItem("ISO_name");
  return (
    <ReactModal
      ceState={ceState}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
      style={{
        overlay: {
          position: "fixed",
          marginLeft: [margin],
          height: "100%",
          backgroundcolor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          justifycontent: "center",
          alignitems: "center",
        },
        content: {
          position: "absolute",
          top: "20%",
          left: "10%",
          right: "15%",
          bottom: "20%",
          boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.3)",
          border: "0px",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "0px",
          textalign: "center",
          verticalalign: "middle",
          textAlign: "center",
        },
      }}
    >
      <div className="boardmodal">
        {ceState === "create" ? (
          <ModalBoardCreate />
        ) : ceState === "edit" ? (
          <ModalBoardEdit data={data} />
        ) : (
          <table>
            <thead>
              <tr>
                <td id="title" colSpan="5">
                  {data.title}
                </td>
              </tr>
              <tr>
                <td id="content" colSpan="5">
                  1. The "Make VM file" button is the "{data.title}" Convert to
                  a vm file called ".qcow2". <br />
                  <br />
                  2. The Access Link then returns a VNC address that is
                  accessible to the created vm.
                </td>
              </tr>
              <tr>
                <td>
                  {!searchtitle(data.title) ? (
                    <div className="forbtn">
                      <button
                        onClick={onClick}
                        value={data.title}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Convert ISO file to qcow2 file
                      </button>
                    </div>
                  ) : (
                    <div className="forbtn">
                      VNC Access <br /> Password : test <br />
                      "pdxf.tk:{searchtitle(data.title).ISO__Port}"
                    </div>
                  )}
                </td>
              </tr>
            </thead>
          </table>
        )}
      </div>
    </ReactModal>
  );
};

export default BoardModal;
