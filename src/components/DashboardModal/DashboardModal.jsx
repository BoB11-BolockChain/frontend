import ReactModal from "react-modal";

import "./styles.scss";

const DashboardModal = ({ isOpen, setModalState, data, userId }) => {
  // const socketOperationMsg = useWebSocket(
  //   `http://pdxf.tk:8000/dashboardir?userId=${userId}&scenarioId=${data.id}`
  // );

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
          <h2 className="dashboard-title">Results of {data.title}</h2>
          <div className="divider"></div>
          <div className="big">
            <h2 className="dashboard-small-title">Challenge Progress</h2>
            <div className="challenges">
              {data.challenges.map((d, i) => (
                <div
                  key={i}
                  className={`item ${d.solved ? "solved" : "notsolved"}`}
                >
                  <p className="bodytext">{d.title}</p>
                  <p>{d.score}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="big">
            <h2 className="dashboard-small-title">Incident Response Result</h2>
            <div className="textmarginbox"></div>
            <div className="incident">
              {data?.challenges?.map((d, i) => (
                <div key={i} className="process">
                  <div className="tactic">
                    <div className="order notsolved">{i}</div>
                    <div className="height-align bodytext chtitle">
                      {d.title}
                    </div>
                  </div>
                  <div className="titlemarginbox"></div>
                  <p className="bodytext">RESULT : {d.solved}</p>
                </div>
              ))}
              {/* {socketOperationMsg.chain.map((d) => (
                <div>{d.status}</div>
              ))} */}
            </div>
          </div>
        </>
      )}
    </ReactModal>
  );
};

export default DashboardModal;
