import React from "react";
import ReactModal from "react-modal";
import VmCaller from "src/components/VmCaller";

const ChallengeModal = ({ isOpen, setModalState, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      marginLeft={"300px"}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundcolor: "rgba(0, 0, 0, 0.4)",
          display: "flex",
          justifycontent: "center",
          alignitems: "center",
        },
        content: {
          position: "absolute",
          top: "25%",
          left: "400px",
          right: "15%",
          bottom: "25%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          textalign: "center",
          verticalalign: "middle",
          textAlign: "center",
        },
      }}
    >
      <div
        style={{
          marginLeft: "300px",
        }}
      ></div>
      <p>하이?</p>
      <p>title : {data.title}</p>
      <p>score : {data.score}</p>
      <VmCaller />
    </ReactModal>
  );
};

export default ChallengeModal;
