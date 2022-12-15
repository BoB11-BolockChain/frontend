import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Loading from "src/components/Loading";
import useWebSocket from "src/hooks/useWebSocket";

import "./styles.scss";

const DashboardModal = ({ isOpen, setModalState, data, userId }) => {
  const socketOperationMsg = useWebSocket(
    `ws://pdxf.tk:8000/dashboardir?userId=${userId}&scenarioId=${data.id}`
  );
  const [isMsgSent, setIsMsgSent] = useState(false);

  useEffect(() => {
    if (socketOperationMsg?.Chain) {
      setIsMsgSent(true);
    }
  }, [socketOperationMsg]);

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
          gap: "0.2rem",
          padding: "30px",
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
            <div className="incident"></div>
          </div>
        </>
      )}
      {isMsgSent ? (
        socketOperationMsg.Chain.map((d, i) => (
          <div key={d.id} className="process">
            <div className="tactic">
              <div
                className={`order ${d.status === 0 ? "notsolved" : "solved"}`}
              >
                {i}
              </div>
              <div className="height-aign bodytext chtitle">
                {d.executor.command}
              </div>
            </div>
            <div className="titlemarginbox"></div>
            <p className="bodytext">RESULT : {d.status}</p>
            <p>{d.finish}</p>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </ReactModal>
  );
};

export default DashboardModal;
