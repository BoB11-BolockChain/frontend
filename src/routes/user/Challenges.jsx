import { useState, useEffect } from "react";
import ChallengeModal from "../../components/ChallengeModal";

const challenges = [
  { title: "chall1", score: 100, desc: "fdsafdsa" },
  { title: "chall1", score: 100, desc: "fdsafdsa" },
  { title: "chall1", score: 100, desc: "fdsafdsa" },
  { title: "chall1", score: 100, desc: "fdsafdsa" },
  { title: "chall1", score: 100, desc: "fdsafdsa" },
  { title: "chall1", score: 100, desc: "fdsafdsa" },
  { title: "chall1", score: 100, desc: "fdsafdsa" },
];

const Challenges = () => {
  const [modalState, setModalState] = useState({ isOpen: false, data: {} });
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
        <h1 className="h2 fw-bold my-4">Challenges</h1>
      </header>
      <div className="flex flex-row flex-wrap gap-2 justify-between">
        {challenges.map((d) => (
          <>
            <button
              className="w-1/4 flex-auto flex-grow-0 justify-center rounded-lg border-2 border-[#FA678C] p-4"
              onClick={() => setModalState({ isOpen: true, data: d })}
            >
              <p className="text-lg text-center">{d.title}</p>
              <p className="text-lg text-center">{d.score}</p>
            </button>
          </>
        ))}
      </div>
      <ChallengeModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
        margin={width}
      />
    </>
  );
};

export default Challenges;
