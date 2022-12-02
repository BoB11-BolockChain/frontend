import { useState } from "react";
import ReactModal from "react-modal";
import { HiOutlineFlag, HiOutlineShieldExclamation } from "react-icons/hi";

const TrainingModal = ({
  isOpen,
  setModalState,
  data,
  margin,
  setSolveCheck,
}) => {
  const [challState, setChallState] = useState({
    id: 0,
    title: "",
    desc: "",
    score: 0,
    sequence: 0,
    isClick: false,
  });
  const [state, setState] = useState({ flag: "" });
  const [solve, setSolve] = useState({ check: "", isClick: false });
  const [click, setClick] = useState(false);

  const chall_data = data;

  const irCheck = (data) => {
    const check = Object.keys(data.challenge).length - 1;
    if (data.challenge[check].solved === "True") {
      return (
        <button
          className="ir-button"
          type="button"
          onClick={() => {
            window.sessionStorage.removeItem("activatedVM");
            window.sessionStorage.setItem(
              "activatedVM",
              JSON.stringify({
                scenarioId: data.scene_id,
                type: "Scenario",
                vnc: 5003,
                rdp: 5004,
              })
            );
            setClick((prev) => !prev);
          }}
        >
          <table>
            <td className="ir-desc">Scenario Incident Response</td>
            <td className="ir-border" />
            <td className="ir-icon">{<HiOutlineShieldExclamation />}</td>
          </table>
        </button>
      );
    }
    return null;
  };

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
        chall_id: challState.id,
      }),
    });
    const js = await res.json();
    setSolve({ check: js.chall_id, isClick: true });
  };

  const challCheck = (check) => {
    switch (check) {
      case "Solve a Challenge":
        setSolveCheck(true);
        return <p style={{ background: "#4caf50" }}>Solve a Challenge</p>;
      case "Aleady Solved":
        return <p style={{ background: "#4860b0" }}>Aleady Solved</p>;
      default:
        return <p style={{ background: "#e53935" }}>False</p>;
    }
  };
  const connectInfo = (activateJS) => {
    if (activateJS.scenarioId === data.scene_id) {
      var url = window.location.protocol + "//" + window.location.hostname;
      return (
        <table className="modal-vm-connect">
          <tr className="modal-vm-title">
            <p>{activateJS.type} Connect Info</p>
          </tr>
          <tr>
            <td className="modal-vm-info">
              <tr>
                <b>VNC</b>
              </tr>
              <tr>
                <p>
                  {url}:{activateJS.vnc}
                </p>
              </tr>
            </td>
            <td className="modal-vm-info">
              <tr>
                <b>RDP</b>
              </tr>
              <tr>
                <p>
                  {url}:{activateJS.rdp}
                </p>
              </tr>
            </td>
          </tr>
        </table>
      );
    }
    return null;
  };
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        setModalState({ data: {}, isOpen: false, index: 0 });
        setChallState({ isClick: false });
        setSolve({ isClick: false });
        setState({ flag: "" });
        setSolveCheck(false);
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
          top: "10%",
          left: "10%",
          right: "10%",
          bottom: "8%",
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
      <div className="modal-item">
        {isOpen === true ? (
          <>
            <table className="modal-scenario">
              <tr className="modal-scene-title">
                <p id="modal_scene_title">{data.scene_title}</p>
                <p id="modal_scene_system">SYSTEM: {data.system}</p>
              </tr>
              <tr>
                <p id="modal_scene_desc">{data.scene_desc}</p>
              </tr>
              <tr>
                <div className="modal-connect-button">
                  <button
                    className="an-button"
                    type="button"
                    onClick={() => {
                      window.sessionStorage.removeItem("activatedVM");
                      window.sessionStorage.setItem(
                        "activatedVM",
                        JSON.stringify({
                          scenarioId: data.scene_id,
                          type: "Challenge",
                          vnc: 5001,
                          rdp: 5002,
                        })
                      );
                      setClick((prev) => !prev);
                    }}
                  >
                    <td className="an-desc">Challenge Analyze</td>
                    <td className="an-border" />
                    <td className="an-icon">{<HiOutlineFlag />}</td>
                  </button>
                  {irCheck(chall_data)}
                </div>
              </tr>
            </table>

            {connectInfo(
              JSON.parse(window.sessionStorage.getItem("activatedVM"))
            )}
            <div className="modal-challenge">
              <p className="modal-chall-divider">Challenge List</p>
              <div className="modal-chall-list">
                {chall_data.challenge.map((d) => {
                  let solved_check_style = {};
                  if (d.solved === "True") {
                    solved_check_style = "modal-chall-list-button-solved";
                  } else {
                    solved_check_style = "modal-chall-list-button";
                  }

                  return (
                    <button
                      className={solved_check_style}
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
                        setSolveCheck(false);
                      }}
                    >
                      <p>{d.chall_title}</p>
                      <p>{d.score}</p>
                    </button>
                  );
                })}
              </div>
              {challState.isClick === true ? (
                <div className="modal-chall-content">
                  <table>
                    <tr>
                      <td id="modal_chall_title">{challState.title}</td>
                      <td id="modal_chall_score">
                        Score: <b>{challState.score}</b>
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
                          <form
                            onSubmit={onSubmit}
                            className="modal-chall-flag"
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
                          <form
                            onSubmit={onSubmit}
                            className="modal-chall-flag"
                          >
                            <input
                              onChange={onChange}
                              value={state.flag}
                              placeholder="FLAG"
                              name="flag"
                              type="text"
                            />
                            <button>Submit</button>
                          </form>
                        )}
                      </td>
                    </tr>
                    {solve.isClick === true ? (
                      <tr>
                        <td colspan="2">
                          <div className="modal-chall-check">
                            {challCheck(solve.check)}
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </table>
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </ReactModal>
  );
};

export default TrainingModal;
