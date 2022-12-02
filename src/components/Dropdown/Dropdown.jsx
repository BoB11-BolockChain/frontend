import { useState } from "react";

import styles from "./dropdown.module.scss";

const Dropdown = ({ defaultValue, setData, options }) => {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className={styles.dropdown}>
      <div className={styles.head}>
        {/* {selected < 0 ? "Select" : options[selected]} */}
        {options.includes(selected) ? selected : "Select"}
      </div>
      <div className={styles.content}>
        {options.map((d, i) => (
          <div
            key={i}
            className={`${styles.option} ${
              selected === d ? styles.selected : ""
            }`}
            onClick={() => {
              setSelected(d);
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
