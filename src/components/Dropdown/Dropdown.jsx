import { useState } from "react";

import styles from "./dropdown.module.scss";

const Dropdown = ({ defaultValue, setData, options }) => {
  const [selected, setSelected] = useState(defaultValue);

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
            onClick={() => {
              setSelected(i);
              setData(d);
            }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
