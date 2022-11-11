import { useState } from "react";
import ReactModal from "react-modal";
// import VmCaller from "src/components/VmCaller";

const TrainingModal = ({ isOpen, setModalState, data, system, margin }) => {
  const [challState, setChallState] = useState({ title: "", desc: "", score: 0, system: "", isClick: false });
  const chall_data = data;
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        setModalState({ data: {}, isOpen: false })
        setChallState({ isClick: false })
      }}
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
      <div class="modal-item">
        {
          (isOpen === true) ?
            chall_data.map((d) => (
              <button
                className="flex-auto flex-grow-0 justify-center rounded-lg border-2 border-[#FA678C] p-2"
                onClick={() => setChallState({ title: d.title, desc: d.desc, score: d.score, system: system, isClick: true })}
              >
                <p>{d.title}</p>
                <p>{d.score}</p>
              </button>
            )) : null
        }
      </div>
      {
        (challState.isClick === true) ?
          <div class="modal-chall-content">
            <table>
              <tr>
                <td id="chall_title">{challState.title}</td>
                <td id="chall_score">Score: {challState.score}</td>
                <td id="chall_system">System: {challState.system}</td>
              </tr>
              <tr>
                <td colspan="2">{challState.desc}</td>
              </tr>
            </table>
          </div>
          : null
      }
    </ReactModal>
  );
};

export default TrainingModal;
