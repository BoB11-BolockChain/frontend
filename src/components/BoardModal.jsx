import React from "react";
import ReactModal from "react-modal";
import ModalBoardCreate from "./ModalBoardCreate";
import ModalBoardEdit from "./ModalBoardEdit";

const BoardModal = ({ isOpen, setModalState, data, ceState, margin }) => {
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
                <td id="author">{data.author}</td>
                <td id="divider">|</td>
                <td id="date">{data.cdate}</td>
                <td></td>
                <td id="view">์กฐํ์: {data.views}</td>
              </tr>
              <tr>
                <td id="content" colSpan="5">
                  <div>
                    {(data.content || "").split("\n").map((line) => {
                      return (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </div>
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
