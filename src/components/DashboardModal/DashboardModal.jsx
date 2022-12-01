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

const DashboardModal = ({ isOpen, setModalState, data }) => {
  //websocket
  //if incident finished, server will close socket

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setModalState({ data: undefined, isOpen: false })}
      ariaHideApp={false}
      style={{
        content: {
          marginLeft: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid #888",
        },
      }}
    >
      {!!data && (
        <>
          <h2 className="dashboard-title">Results of {data.ScenarioTitle}</h2>
          <div className="divider"></div>
          <div className="big">
            <h2 className="dashboard-small-title">Challenge Progress</h2>
            <div className="challenges">
              {data.Challenges.map((d) => (
                <div
                  className={`item ${
                    d.Solved === "true" ? "solved" : "notsolved"
                  }`}
                >
                  <p className="bodytext">{d.ChallengeTitle}</p>
                  <p>{100}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="big">
            <h2 className="dashboard-small-title">Incident Response Result</h2>
            <div className="textmarginbox"></div>
            <div className="incident">
              {data?.Challenges?.map((d, i) => (
                <div className="process">
                  <div className="tactic">
                    <div className="order notsolved">{i}</div>
                    <div className="height-align bodytext chtitle">{d.ChallengeTitle}</div>
                  </div>
                  <div className="titlemarginbox"></div>
                  <p className="bodytext">RESULT : {d.Solved}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </ReactModal>
  );
};

export default DashboardModal;
