import React from "react";
import ReactModal from "react-modal";

const ChallengeModal = ({ isOpen, setModalState, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      marginLeft={"300px"}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
    >
      <div style={{
        marginLeft: "300px"
      }}>

      </div>
      <p>하이?</p>
      <p>title : {data.title}</p>
      <p>score : {data.score}</p>
    </ReactModal>
  );
};

export default ChallengeModal;
