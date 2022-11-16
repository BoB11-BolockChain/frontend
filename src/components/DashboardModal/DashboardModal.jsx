import ReactModal from "react-modal";

import "./styles.scss";

const dummy = {
  scene_title: "windows 시나리오",
  scene_desc: "APT Scenario 1,\n북한 해커 집단 '김XX' APT 시나리오입니다.",
  system: "Windows",
  challenge: [
    {
      chall_id: 1,
      chall_title: "initial breach",
      chall_desc: "The scenario begins with an initial breach",
      score: "200",
      sequence: 0,
      solved: "True",
    },
    {
      chall_id: 2,
      chall_title: "Rapid Collection and Exfiltration",
      chall_desc: "Rapid Collection and Exfiltration",
      score: "300",
      sequence: 1,
      solved: "True",
    },
    {
      chall_id: 3,
      chall_title: "Deploy Stealth Toolkit",
      chall_desc: "Deploy Stealth Toolkit",
      score: "300",
      sequence: 2,
      solved: "True",
    },
  ],
};

const steps = [
  { name: "powrshell b", output: "Resource temporarily unavailable" },
  { name: "process discovery", output: "unavailable" },
];

const DashboardModal = ({ isOpen, setModalState, data }) => {
  //websocket
  //if incident finished, server will close socket

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
      style={{
        content: {
          marginLeft: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        },
      }}
    >
      <p className="title">results of {data.training}</p>
      <div className="big">
        <p>challenge progress</p>
        <div className="challenges">
          {dummy.challenge.map((d) => (
            <div
              className={`item ${d.solved === "True" ? "solved" : "notsolved"}`}
            >
              <p>{d.chall_title}</p>
              <p>{d.score}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="big">
        <p>incident response for this scenario</p>
        <div className="incident">
          {steps.map((d, i) => (
            <div className="process">
              <span className="order">{i}</span>
              {d.name}
              <p>result : {d.output}</p>
            </div>
          ))}
          <div className="process">
            <span className="solved">2</span>
            lateral move
            <p>result : failed</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default DashboardModal;
