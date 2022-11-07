import { useState } from "react";
import ReactModal from "react-modal";
// import VmCaller from "src/components/VmCaller";

const TrainingModal = ({ isOpen, setModalState, data, margin }) => {
  const [challState, setChallState] = useState({ title: "", desc: "", score: 0, system: "", isClick: false });
  const chall_data = data;
  console.log(chall_data);
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
          top: "15%",
          left: "10%",
          right: "10%",
          bottom: "10%",
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
            <>
              <div class="modal-scenario">
                <p id="modal_scene_title">{data.id}</p>
                <p id="modal_scene_system">SYSTEM: {data.system}</p>
                <p id="modal_scene_desc">{data.desc}</p>
              </div>
              <div class="modal-challenge">
                <p id="modal_chall_list">Challenge List</p>
                <div className="flex-auto flex-row flex-wrap justify-between align-items-center p-2">
                  {chall_data.data.map((d) => (
                    <button
                      className="flex-auto flex-grow-0 justify-center rounded-lg border-2 border-[#FA678C] p-2 m-2"
                      onClick={() => setChallState({ title: d.title, desc: d.desc, score: d.score, isClick: true })}
                    >
                      <p>{d.title}</p>
                      <p>{d.score}</p>
                    </button>
                  ))}
                </div>
                {
                  (challState.isClick === true) ?
                    <div class="modal-chall-content">
                      <table>
                        <tr>
                          <td id="modal_chall_title">{challState.title}</td>
                          <td id="modal_chall_score">Score: {challState.score}</td>
                        </tr>
                        <tr>
                          <td colspan="2">{challState.desc}</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <button id="modal_chall_button">
                              Analysis
                            </button>
                          </td>
                        </tr>
                      </table>
                    </div>
                    : null
                }
              </div>
              <button id="modal_scene_button">
                Incident Response
              </button>
            </>
            : null
        }
      </div>
    </ReactModal>
  );
};

export default TrainingModal;
