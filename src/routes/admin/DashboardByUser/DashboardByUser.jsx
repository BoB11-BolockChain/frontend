import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardModal from "src/components/DashboardModal";
import Loading from "src/components/Loading";

import "./styles.scss";

const DashboardByUser = () => {
  const { userId } = useParams();

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://pdxf.tk:8000/dashboardbyuser?userId=${userId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const jsonBody = await res.json();
        setIsFetched(true);
        setData(jsonBody);
      } else {
        console.log(res.status);
      }
    };
    fetchData();
  }, [userId]);

  const challengeProgress = (d) => {
    let progress = 0;
    d.challenges.forEach((c) => c.solved && progress++);
    return progress;
  };

  const [modalState, setModalState] = useState({
    data: undefined,
    isOpen: false,
  });
  const openModal = (training) => {
    setModalState({ data: training, isOpen: true });
  };

  return (
    <>
      <div className="marginbox"></div>
      <header>
        <h1>Dashboard of {userId}</h1>
      </header>
      {isFetched ? (
        <div className="scenarios">
          {data.map((d, i) => (
            <div key={i} className="whitebox">
              <div className="scenario-info">
                <p className="scenario-title">{d.title}</p>
                <p className="scenario-progress">
                  Challenge Progress : {challengeProgress(d)} /{" "}
                  {d.challenges.length}
                </p>
              </div>
              <button onClick={() => openModal(d)} className="pdxf-button">
                Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
      {!!modalState.data && (
        <DashboardModal
          isOpen={modalState.isOpen}
          setModalState={setModalState}
          data={modalState.data}
          userId={userId}
        />
      )}
    </>
  );
};

export default DashboardByUser;
