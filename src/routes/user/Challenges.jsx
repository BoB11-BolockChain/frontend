import { useState } from "react";
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

  return (
    <>
      <p className="text-2xl pt-4 pb-4">Challenges</p>
      <div className="flex flex-row flex-wrap gap-2 justify-between">
        {challenges.map((d) => (
          <div className="w-1/4 flex-auto flex flex-col flex-grow-0 justify-center rounded-lg border-2 border-gray-300 p-4">
            <p className="text-lg text-center">{d.title}</p>
            <button
              className="rounded-lg border-2 border-[#FA678C]"
              onClick={() => setModalState({ isOpen: true, data: d })}
            >
              {d.score}
            </button>
          </div>
        ))}
      </div>
      <ChallengeModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
      />
    </>
  );
};

export default Challenges;
