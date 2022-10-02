import React from "react";
import ReactModal from "react-modal";

const ChallengeModal = (props) => {
  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={() => props.setModalState({ data: {}, isOpen: false })}
    >
      challenge id : {props.data.id}
    </ReactModal>
  );
};

export default ChallengeModal;
