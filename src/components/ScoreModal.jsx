import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import ReactModal from "react-modal";

const ScoreModal = ({ isOpen, setModalState, data, margin, img }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={() =>
        setModalState({ data: {}, isOpen: false, margin: "" })
      }
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
          // overflow: "auto",
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
      <div className="score-modal">
        <span class="close">&times;</span>
        <div className="modal-profile">
          <img src={img} />
          <div width="100%" display="flex" className="name">
            <p className="profile-id">{data.id}</p>
            <p>설명</p>
          </div>
        </div>
        <table>
          <thead>
            <th>Scenario</th>
            <th>Challenge</th>
            <th>Solved Time</th>
            <th>Score</th>
            <th>IR Score</th>
          </thead>
          {Object.keys(data).length === 0
            ? null
            : data.solved.map((scene) => {
                const count = Object.keys(scene.challenge).length;
                return (
                  <>
                    {scene.challenge.map((chall, i) => {
                      return (
                        <tr className="scene-tr">
                          {i === 0 ? (
                            <td rowspan={count} className="scene-title">
                              {scene.scenario_title}
                            </td>
                          ) : null}
                          <td>{chall.challenge_title}</td>
                          <td>{chall.time}</td>
                          <td>{chall.score}</td>
                          {i === 0 ? (
                            <td rowspan={count}>{scene.irscore}</td>
                          ) : null}
                        </tr>
                      );
                    })}
                  </>
                );
              })}
        </table>
      </div>
    </ReactModal>
  );
};

export default ScoreModal;
