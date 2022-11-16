import { useState } from "react";
import { useParams } from "react-router-dom";
import DashboardModal from "src/components/DashboardModal";

import "./styles.scss";

const dummy = [
  "apt scenario",
  "pwn scenario",
  "web scenario",
  "north korea scenario",
];

const DashboardByUser = () => {
  const { userId } = useParams();
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const openModal = (training) => {
    setModalState({ data: { training }, isOpen: true });
  };

  return (
    <>
      <p className="title">dashboard of {userId}</p>
      <div className="scenarios">
        {dummy.map((d) => (
          <div className="item">
            <p>{d}</p>
            <button onClick={() => openModal(d)}>go</button>
          </div>
        ))}
      </div>
      <DashboardModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
      />
    </>
  );
};

export default DashboardByUser;
