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
      <h1>Dashboard of {userId}</h1>
      {isFetched ? (
        <div className="scenarios">
          {data.map((d, i) => (
            <div className="whitebox">
              <div className="scenario-info">
                <p className="scenario-title">{d.ScenarioTitle}</p>
                <p className="scenario-progress">{i}</p>
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
      <DashboardModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
      />
    </>
  );
};

export default DashboardByUser;
