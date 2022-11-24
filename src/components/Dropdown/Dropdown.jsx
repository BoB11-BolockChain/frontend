import { useState } from "react";

import styles from "./dropdown.module.scss";

const options = ["option1", "option2", "option3", "option4"];

const Dropdown = ({ ops, stdata }) => {
  // from props
  const [selected, setSelected] = useState(-1);

  return (
    <div className={styles.dropdown}>
      <div className={styles.head}>
        {selected < 0 ? "Select" : options[selected]}
      </div>
      <div className={styles.content}>
        {options.map((d, i) => (
          <div
            className={`${styles.option} ${
              selected === i ? styles.selected : ""
            }`}
            onClick={() => setSelected(i)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
