import { useState } from "react";
import OptionModal from "src/components/OptionModal";

import "./styles.scss";

const dummy = ["option1", "option2", "option3", "option4"];

const Dropdown = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState([]);

  const onClick = () => {
    setOpened((prev) => !prev);
  };

  const onCheck = (e) => {
    const prev = [...selected];
    if (e.target.checked) {
      prev.push(e.target.name);
      setSelected(prev);
    } else {
      const deleted = prev.filter((v) => e.target.name !== v);
      setSelected(deleted);
    }
  };

  const [modalState, setModalState] = useState({ data: {}, isOpen: false });

  return (
    <div className="dropdown">
      <div className="selected-items-display">
        {selected.map((d) => (
          <span>{d}</span>
        ))}
      </div>
      <div className="multiselect">
        <button onClick={onClick}>drop</button>
        <div>--select--</div>
        {opened ? (
          <div>
            <div className="items">
              {dummy.map((d) => (
                <label className="item">
                  <input type="checkbox" onChange={onCheck} name={d} />
                  {d}
                </label>
              ))}
              <div className="item">
                <button
                  onClick={() => setModalState({ data: {}, isOpen: true })}
                >
                  create option
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <OptionModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data=""
      />
    </div>
  );
};

export default Dropdown;
