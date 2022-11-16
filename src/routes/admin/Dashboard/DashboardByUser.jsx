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
  const onClick = () => {
    setModalState({ data: {}, isOpen: true });
  };

  return (
    <>
      <p className="title">{userId}</p>
      <div className="scenarios">
        {dummy.map((d) => (
          <div className="item">
            <p>{d}</p>
            <button onClick={onClick}>go</button>
          </div>
        ))}
      </div>
      <DashboardModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
      />
    </>
  );
};

export default DashboardByUser;
