import { useState, useEffect } from "react";
import TrainingModal from "../../components/TrainingModal";
import "./training.scss";


const training_data = [
    {
        "id": "scenario1",
        "system": "Windows",
        "data": [
            {
                "title": "chall1",
                "score": 100,
                "desc": "test1"
            }, {
                "title": "chall2",
                "score": 50,
                "desc": "test12"
            }, {
                "title": "chall3",
                "score": 150,
                "desc": "test134"
            }, {
                "title": "chall4",
                "score": 50,
                "desc": "test12343511"
            }, {
                "title": "chall5",
                "score": 200,
                "desc": "test1vdzsz aedxwAE"
            }
        ]
    }, {
        "id": "scenario2",
        "system": "Linux",
        "data": [
            {
                "title": "chall6",
                "score": 120,
                "desc": "testsacas1"
            }, {
                "title": "chall7",
                "score": 30,
                "desc": "tscaasest12"
            }, {
                "title": "chall8",
                "score": 110,
                "desc": "tessacat134"
            }, {
                "title": "chall9",
                "score": 40,
                "desc": "test1xz2343511"
            }
        ]
    }
]

const Training = () => {
    const [modalState, setModalState] = useState({ isOpen: false, data: {}, system: "" });
    const [width, setWidth] = useState("");
    useEffect(() => {
        const windowWidth = window.innerWidth;
        setWidth("270px");
        if (windowWidth < 768) {
            setWidth("80px");
        }
    }, [width])

    return (
        <>
            <header>
                <h1 className="h2 fw-bold my-4">Training</h1>
            </header>
            <div class="scenario-list">
                {training_data.map((d) => (
                    <>

                        <button
                            class="border-[#FA678C]"
                            onClick={() => setModalState({ isOpen: true, data: d.data, system: d.system })}
                        >
                            <p className="text-lg">{d.id}</p>
                            <p>{d.system}</p>
                        </button>
                    </>
                ))}
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
