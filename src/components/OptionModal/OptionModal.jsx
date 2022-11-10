import { useState } from "react";
import ReactModal from "react-modal";

import "./styles.scss";

const OptionModal = ({ isOpen, setModalState, data }) => {
  const [state, setState] = useState({ name: "", command: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onClick = () => {
    data((prev) => prev.concat(state.name));
    setModalState({ data: {}, isOpen: false });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
      contentLabel="label"
      style={{ overlay: { marginLeft: 300 } }}
    >
      <div className="modal-container">
        <p className="box-title">create vm option</p>
        <input
          className="inputbox option"
          placeholder="option name"
          name="name"
          onChange={onChange}
        />
        <input
          className="inputbox option"
          placeholder="option command"
          name="command"
        />
        <button className="btn-primary option" onClick={onClick}>
          create
        </button>
      </div>
    </ReactModal>
  );
};

export default OptionModal;
