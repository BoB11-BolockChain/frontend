import React from "react";
import ReactModal from "react-modal";

const ChallengeModal = ({ isOpen, setModalState, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
    >
      <p>title : {data.title}</p>
      <p>score : {data.score}</p>
    </ReactModal>
  );
};

export default ChallengeModal;
