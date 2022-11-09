import { useState, useEffect } from "react";
import TrainingModal from "../../components/TrainingModal";
import "./training.scss";

const Training = () => {
    const [modalState, setModalState] = useState({ isOpen: false, data: {} });
    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [width, setWidth] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://www.pdxf.tk:8000/training");
            if (res.ok) {
                const js = await res.json();
                // console.log(js.scenario);
                const windowWidth = window.innerWidth;
                setData(js.scenario);
                setDataLoaded(true);
                console.log(data);
                setWidth("270px");
                if (windowWidth < 768) {
                    setWidth("80px");
                }
            }
        }
        fetchData();
    }, [data, width])

    return (
        <>
            <header>
                <h1 className="h2 fw-bold my-4">Training</h1>
            </header>
            <div class="scenario-list">
                {dataLoaded ? (
                    data.map((d) => (
                        <>

                            <button
                                class="border-[#FA678C]"
                                onClick={() => setModalState({ isOpen: true, data: d })}
                            >
                                <p className="text-lg">{d.scene_title}</p>
                                <p>{d.system}</p>
                            </button>
                        </>
                    ))
                ) : (
                    <p>loading</p>
                )}
            </div>
            <TrainingModal
                modalState={modalState}
                isOpen={modalState.isOpen}
                setModalState={setModalState}
                data={modalState.data}
                margin={width}
                system={modalState.system}
            />
        </>
    );
};

export default Training;
