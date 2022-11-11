import { useEffect, useState } from "react";
import OptionModal from "src/components/OptionModal";

import "./styles.scss";

const dummy = ["option1", "option2", "option3", "option4"];

const Dropdown = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState([]);

  //fetch
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(dummy);
  }, []);

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
          <span className="selected-item">{d}</span>
        ))}
      </div>
      <div className="multiselect">
        <div className="select-head" onClick={onClick}>
          --select--
        </div>
        {opened ? (
          <div className="items">
            {options.map((d) => (
              <label>
                <input
                  type="checkbox"
                  onChange={onCheck}
                  name={d}
                  checked={selected.includes(d)}
                />
                {d}
              </label>
            ))}
            <button
              className="create-button"
              onClick={() => {
                setModalState({ data: {}, isOpen: true });
                setOpened(false);
              }}
            >
              create option
            </button>
          </div>
        ) : null}
      </div>
      <OptionModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={setOptions}
      />
    </div>
  );
};

export default Dropdown;
