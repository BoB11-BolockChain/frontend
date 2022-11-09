import ReactModal from "react-modal";

const OptionModal = ({ isOpen, setModalState, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
      contentLabel="label"
      style={{ overlay: { marginLeft: 300 } }}
    >
      <p>create vm option</p>
      <input placeholder="option name" />
      <input placeholder="option command" />
      <button>create</button>
    </ReactModal>
  );
};

export default OptionModal;
