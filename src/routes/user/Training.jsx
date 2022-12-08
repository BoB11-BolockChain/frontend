import { useState, useEffect } from "react";
import TrainingModal from "../../components/TrainingModal";
import "./training.scss";

const Training = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: {},
    index: 0,
  });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [width, setWidth] = useState("");
  const [solveCheck, setSolveCheck] = useState(false);

  useEffect(() => {
    const sessionId = window.sessionStorage.getItem("sessionId");
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/training", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: sessionId,
        }),
      });
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData(js.scenario);
        setDataLoaded(true);
        if (solveCheck) {
          const i = modalState.index;
          setModalState({ data: js.scenario[i], index: i, isOpen: true });
        }

        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };
    fetchData();
  }, [width, solveCheck]);

  return (
    <>
      <header>
        <h1 className="h2 fw-bold my-4">Training</h1>
      </header>
      {dataLoaded ? (
        data.map((d, i) => (
          <div className="scenario-list">
            <div className="scenario-desc">
              <div>
                <p className="scenario-desc-title">{d.scene_title}</p>
                <p className="scenario-desc-system">{d.system}</p>
              </div>
            </div>
            <button
              className="border-[#FA678C]"
              onClick={() => setModalState({ isOpen: true, data: d, index: i })}
            >
              START
            </button>
          </div>
        ))
      ) : (
        <p>loading</p>
      )}

      <TrainingModal
        modalState={modalState}
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
        margin={width}
        system={modalState.system}
        setSolveCheck={setSolveCheck}
      />
    </>
  );
};

export default Training;
