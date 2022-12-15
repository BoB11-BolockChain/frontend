import { useState } from "react";
import ReactModal from "react-modal";
import Loading from "src/components/Loading";
import {
  HiOutlineFlag,
  HiOutlineShieldExclamation,
  HiLink,
  HiOutlineFire,
} from "react-icons/hi";
import Swal from "sweetalert2";

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
  const [, setClick] = useState(false);
  const chall_data = data;
  const [dataLoaded, setDataLoaded] = useState(true);
  const irCheck = (data) => {
    const check = Object.keys(data.challenge).length - 1;
    if (data.challenge[check].solved === "True") {
      return (
        <button
          className="ir-button"
          type="button"
          onClick={() => {
            switch (data.system) {
              case "Windows":
                const sessionId = window.sessionStorage.getItem("sessionId");
                const vm = data.vm_name;
                makeVM(vm, sessionId, "Scenario");
                break;
              case "Linux":
                window.sessionStorage.removeItem("activatedVM");
                window.sessionStorage.setItem(
                  "activatedVM",
                  JSON.stringify({
                    scenarioId: data.scene_id,
                    type: "Scenario",
                    system: data.system,
                    vm: data.vm_name,
                    atkStart: 0,
                  })
                );
                setClick((prev) => !prev);
                break;
              default:
                break;
            }
          }}
        >
          <table>
            <tbody>
              <tr>
                <td className="ir-icon">{<HiOutlineShieldExclamation />}</td>
                <td className="ir-border" />
                <td className="ir-desc">Scenario Incident Response</td>
              </tr>
            </tbody>
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
        return <p style={{ background: "#4860b0" }}>Already Solved</p>;
      default:
        return <p style={{ background: "#e53935" }}>False</p>;
    }
  };

  const AccessTerminalDocker = (vmname, userId) => {
    Swal.fire({
      title: "Access Training",
      text: "Are you sure you want to resolve this problem?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes, Access",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = {
          Image_ID: vmname, //이미지 이름
          System: "Linux",
          Username: userId,
        };
        fetch("http://www.pdxf.tk:8000/accesslinux", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send_data),
        });
        window.open(
          "http://www.pdxf.tk:8080",
          "Docker Terminal",
          "width=500, height=700, scrollbars=yes, resizable=no"
        );
      }
    });
  };

  const makeVM = (vmname, userId, type, system, vmID, vmPW) => {
    Swal.fire({
      title: "Access Training",
      text: "Are you sure you want to resolve the problem?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes, Access",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const send_data = {
          VMname: vmname, // DB에서 이름 가져오기
          Username: userId, // 유저 이름
          System: system,
        };
        setDataLoaded(false);
        const res = await fetch("http://www.pdxf.tk:8000/accesswindows", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send_data),
        });
        const js = await res.json();
        setDataLoaded(true);
        window.sessionStorage.removeItem("activatedVM");
        window.sessionStorage.setItem(
          "activatedVM",
          JSON.stringify({
            scenarioId: data.scene_id,
            type: type,
            system: data.system,
            vm: data.vm_name,
            vmId: vmID,
            vmPw: vmPW,
            port: js.Vmport,
            atkStart: 0,
          })
        );
        setClick((prev) => !prev);
      }
    });
  };

  const accessVM = async (userId, vmPort) => {
    const send_data = {
      VMname: userId, // DB에서 이름 가져오기
      VNC_Port: vmPort,
    };
    const res = await fetch("http://www.pdxf.tk:8000/accessvncwindows", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send_data),
    });
    const js = await res.json();
    window.open(
      "https://www.pdxf.tk:" + js + "/vnc.html",
      "Windows noVNC",
      "width=1200, height=900, scrollbars=yes, resizable=no"
    );
  };

  const AttackStart = (data) => {
    Swal.fire({
      title: "Attack starting",
      text: "Press this button to launch the attack",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#808080",
      confirmButtonText: "Launch, Attack!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        switch (data.system) {
          case "Windows":
            const windows_send_data = {
              VMname: data.vm,
              Username: window.sessionStorage.getItem("sessionId"),
              System: data.system,
              SSHuser: data.vmId,
              SSHpass: data.vmPw,
              ScenarioId: data.scenarioId,
            };
            const windows_atk_res = await fetch(
              "http://www.pdxf.tk:8000/operation_start_windows",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(windows_send_data),
              }
            );
            if (windows_atk_res.ok) {
              //공격 성공 alert
              window.sessionStorage.removeItem("activatedVM");
              window.sessionStorage.setItem(
                "activatedVM",
                JSON.stringify({
                  scenarioId: data.scenarioId,
                  type: data.type,
                  system: data.system,
                  vm: data.vm,
                  vmId: data.vmId,
                  vmPw: data.vmPw,
                  port: data.port,
                  atkStart: 1,
                })
              );
              setClick((prev) => !prev);
            }
            break;
          case "Linux":
            const linux_send_data = {
              Image_ID: data.vm, //이미지 이름
              System: data.system,
              Username: window.sessionStorage.getItem("sessionId"),
              ScenarioId: data.scenarioId,
            };
            const linux_atk_res = await fetch(
              "http://www.pdxf.tk:8000/operation_start_linux",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(linux_send_data),
              }
            );
            if (linux_atk_res.ok) {
              //공격 성공 alert
              window.sessionStorage.removeItem("activatedVM");
              window.sessionStorage.setItem(
                "activatedVM",
                JSON.stringify({
                  scenarioId: data.scenarioId,
                  type: data.type,
                  system: data.system,
                  vm: data.vm,
                  atkStart: 1,
                })
              );
              setClick((prev) => !prev);
            }
            break;
          default:
            break;
        }
      }
    });
  };

  const SystemVMCheck = (data) => {
    const sessionId = window.sessionStorage.getItem("sessionId");
    const vm = data.vm;
    let btn_css = "";
    switch (data.type) {
      case "Challenge":
        btn_css = "an-access";
        break;
      case "Scenario":
        btn_css = "ir-access";
        break;
      default:
        break;
    }
    switch (data.system) {
      case "Windows":
        return (
          <table className={"modal-" + btn_css}>
            <tbody>
              <tr className="modal-connect-info">
                <td>
                  User ID : <b>{data.vmId}</b> / User PW : <b>{data.vmPw}</b>
                </td>
              </tr>
              <tr className={"modal-tr-" + btn_css}>
                <td>
                  <button
                    onClick={() => accessVM(sessionId, data.port)}
                    className={btn_css + "-button"}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td className={btn_css + "-icon"}>{<HiLink />}</td>
                          <td className={btn_css + "-text"}>
                            {data.type} Access
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </button>
                  {JSON.parse(window.sessionStorage.getItem("activatedVM"))
                    .atkStart === 0 ? (
                    <button
                      className="atk-start-button"
                      onClick={() =>
                        AttackStart(
                          JSON.parse(
                            window.sessionStorage.getItem("activatedVM")
                          )
                        )
                      }
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td className="atk-start-icon">
                              {<HiOutlineFire />}
                            </td>
                            <td className="atk-start-text">Attack Start</td>
                          </tr>
                        </tbody>
                      </table>
                    </button>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Linux":
        return (
          <table className={"modal-" + btn_css}>
            <tbody>
              <tr className={"modal-tr-" + btn_css}>
                <td>
                  <button
                    onClick={() => AccessTerminalDocker(vm, sessionId)}
                    className={btn_css + "-button"}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <td className={btn_css + "-icon"}>{<HiLink />}</td>
                          <td className={btn_css + "-text"}>
                            {data.type} Access
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </button>
                  {JSON.parse(window.sessionStorage.getItem("activatedVM"))
                    .atkStart === 0 ? (
                    <>
                      <button
                        className="atk-start-button"
                        onClick={() =>
                          AttackStart(
                            JSON.parse(
                              window.sessionStorage.getItem("activatedVM")
                            )
                          )
                        }
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td className="atk-start-icon">
                                {<HiOutlineFire />}
                              </td>
                              <td className="atk-start-text">Attack Start</td>
                            </tr>
                          </tbody>
                        </table>
                      </button>
                    </>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  const connectInfo = (activateJS) => {
    if (activateJS.scenarioId === data.scene_id) {
      {
        return <>{SystemVMCheck(activateJS)}</>;
      }
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
              <tbody>
                <tr className="modal-scene-title">
                  <td>
                    <p id="modal_scene_title">{data.scene_title}</p>
                    <p id="modal_scene_system">SYSTEM: {data.system}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p id="modal_scene_desc">{data.scene_desc}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    {dataLoaded ? (
                      <div className="modal-connect-button">
                        <button
                          className="an-button"
                          type="button"
                          onClick={() => {
                            switch (data.system) {
                              case "Windows":
                                const sessionId =
                                  window.sessionStorage.getItem("sessionId");
                                makeVM(
                                  data.vm_name,
                                  sessionId,
                                  "Challenge",
                                  data.system,
                                  data.vm_id,
                                  data.vm_pw
                                );
                                break;
                              case "Linux":
                                window.sessionStorage.removeItem("activatedVM");
                                window.sessionStorage.setItem(
                                  "activatedVM",
                                  JSON.stringify({
                                    scenarioId: data.scene_id,
                                    type: "Challenge",
                                    system: data.system,
                                    vm: data.vm_name,
                                    atkStart: 0,
                                  })
                                );
                                setClick((prev) => !prev);
                                break;
                              default:
                                break;
                            }
                          }}
                        >
                          <table>
                            <tbody>
                              <tr>
                                <td className="an-icon">{<HiOutlineFlag />}</td>
                                <td className="an-border" />
                                <td className="an-desc">Challenge Analyze</td>
                              </tr>
                            </tbody>
                          </table>
                        </button>
                        {irCheck(chall_data)}
                      </div>
                    ) : (
                      <div className="modal-connect-button">
                        <Loading />
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            {connectInfo(
              JSON.parse(window.sessionStorage.getItem("activatedVM"))
            )}
            <div className="modal-challenge">
              <p className="modal-chall-divider">Challenge List</p>
              <div className="modal-chall-list">
                {chall_data.challenge.map((d, i) => {
                  let solved_check_style = {};
                  if (d.solved === "True") {
                    solved_check_style = "modal-chall-list-button-solved";
                  } else {
                    solved_check_style = "modal-chall-list-button";
                  }

                  return (
                    <button
                      key={i}
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
                      <div>
                        <p>{d.chall_title}</p>
                      </div>
                      <div>
                        <p>
                          <b>{d.score}</b>
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
              {challState.isClick === true ? (
                <div className="modal-chall-content">
                  <table>
                    <tbody>
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
                        <td colSpan="2">
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
                          <td colSpan="2">
                            <div className="modal-chall-check">
                              {challCheck(solve.check)}
                            </div>
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
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
