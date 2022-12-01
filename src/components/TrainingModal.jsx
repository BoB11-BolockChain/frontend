import { useState } from "react";
import ReactModal from "react-modal";
// import VmCaller from "src/components/VmCaller";

const TrainingModal = ({ isOpen, setModalState, data, margin, solveCheck }) => {
  const [challState, setChallState] = useState({ id: 0, title: "", desc: "", score: 0, sequence: 0, isClick: false });
  const [state, setState] = useState({ flag: "" });
  const [solve, setSolve] = useState({ check: "", isClick: false })
  const [connect, setConnect] = useState({ ip: "", vncPort: 0, rdpPort: 0, sshPort: 0, isClick: false })
  const chall_data = data;

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const sessionId = window.sessionStorage.getItem("sessionId");
    const res = await fetch("http://www.pdxf.tk:8000/training", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: sessionId,
        flag: state.flag,
        chall_id: challState.id
      }),
    });
    const js = await res.json();
    setSolve({ check: js.chall_id, isClick: true });
  };

  const challCheck = (check) => {
    switch (check) {
      case 'Solve a Challenge':
        solveCheck(true);
        window.location.reload();
        return (
          <p style={{ background: '#4caf50' }}>Solve a Challenge</p>
        )
      case 'Aleady Solved':
        return <p style={{ background: '#4860b0' }}>Aleady Solved</p>
      default:
        return <p style={{ background: '#e53935' }}>False</p>
    }
  }
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        setModalState({ data: {}, isOpen: false })
        setChallState({ isClick: false })
        setSolve({ isClick: false })
        setState({ flag: "" })
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
                <p id="modal_scene_title">{data.scene_title}</p>
                <p id="modal_scene_system">SYSTEM: {data.system}</p>
                <p id="modal_scene_desc">{data.scene_desc}</p>
              </div>
              {connect.isClick === true ? (
                <>
                  <p class="modal-chall-divider">Connect Info</p>
                  <table class="modal-chall-connect">
                    <tr>
                      <td>
                        VNC - {connect.ip}:{connect.vncPort}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        RDP - {connect.ip}:{connect.rdpPort}
                      </td>
                    </tr>
                  </table>
                </>
              ) : null}
              <div class="modal-challenge">
                <p class="modal-chall-divider">Challenge List</p>
                <div className="flex-auto flex-row flex-wrap justify-between align-items-center p-2">
                  {chall_data.challenge.map((d) => {
                    let solved_check_style = {};
                    if (d.solved === "True") {
                      solved_check_style = {
                        border: "2px solid #2ead7f",
                        background: "hsl(158, 58%, 43%)",
                        color: "hsl(0, 0%, 100%)",
                      };
                    } else {
                      solved_check_style = {
                        border: "2px solid #4860b0",
                        background: "hsl(226, 42%, 49%, 0)",
                        color: "hsl(0, 0%, 0%)",
                      };
                    }
                    return (
                      <button
                        class="modal-chall-list-button"
                        style={solved_check_style}
                        onClick={() => {
                          setChallState({
                            id: d.chall_id,
                            title: d.chall_title,
                            desc: d.chall_desc,
                            score: d.score,
                            sequence: d.sequence,
                            isClick: true,
                          });
                          setSolve({ isClick: false });
                          setState({ flag: "" });
                        }}
                      >
                        <p>{d.chall_title}</p>
                        <p>{d.score}</p>
                      </button>
                    );
                  })}
                </div>
                {challState.isClick === true ? (
                  <div class="modal-chall-content">
                    <table>
                      <tr>
                        <td id="modal_chall_title">{challState.title}</td>
                        <td id="modal_chall_score">
                          Score: {challState.score}
                        </td>
                      </tr>
                      <tr>
                        <td id="modal_chall_desc" colspan="2">
                          {challState.desc}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          {challState.sequence === 0 ? (
                            connect.isClick === true ? (
                              <form
                                onSubmit={onSubmit}
                                class="modal-chall-flag"
                              >
                                <input
                                  onChange={onChange}
                                  value={state.flag}
                                  placeholder="FLAG"
                                  name="flag"
                                  type="text"
                                />
                                <button
                                  className="fw-bold text-uppercase"
                                  size="md"
                                >
                                  Submit
                                </button>
                              </form>
                            ) : (
                              <center>
                                <button
                                  id="modal_chall_button"
                                  onClick={() => {
                                    setConnect({
                                      ip: "127.0.0.1",
                                      vncPort: 5000,
                                      rdpPort: 5001,
                                      isClick: true,
                                    });
                                  }}
                                >
                                  Analysis
                                </button>
                              </center>
                            )
                          ) : (
                            <form onSubmit={onSubmit} class="modal-chall-flag">
                              <input
                                onChange={onChange}
                                value={state.flag}
                                placeholder="FLAG"
                                name="flag"
                                type="text"
                              />
                              <button
                                className="fw-bold text-uppercase"
                                size="md"
                              >
                                Submit
                              </button>
                            </form>
                          )}
                        </td>
                      </tr>
                      {solve.isClick === true ? (
                        <tr>
                          <td colspan="2">
                            <div class="modal-chall-check">
                              {challCheck(solve.check)}
                            </div>
                          </td>
                        </tr>
                      ) : null}
                    </table>
                  </div>
                ) : null}
              </div>
              <button id="modal_scene_button">Incident Response</button>
            </div>
          </>
        ) : null}
      </div>
    </ReactModal >
  );
};

export default TrainingModal;