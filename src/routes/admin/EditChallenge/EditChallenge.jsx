import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useInputState from "src/hooks/useInputState";

import styles from "./styles.module.scss";

const EditChallenge = () => {
  const { trainingId } = useParams();
  const { state } = useLocation();
  const [inputs, setState, onChange] = useInputState();
  const [selected, setSelected] = useState({});

  const [challenges, setChallenges] = useState(state.challenges);

  const onClick = (hash) => {
    setSelected({ ...selected, [hash]: !selected[hash] });
  };

  //check tactics and challenges
  useEffect(() => {
    const beforeChallenges = [...challenges];
    beforeChallenges.forEach((ch) => {
      const afterTactics = [];
      ch.tactics.forEach((bt) => {
        const sameATacticFound = state.tactics.find(
          (at) => at.hash === bt.hash
        );
        if (sameATacticFound) {
          afterTactics.push(sameATacticFound);
        }
      });
      ch.tactics = afterTactics;
    });
    setChallenges(beforeChallenges);
  }, []);

  const navigate = useNavigate();
  const finishEdit = async () => {
    const url = trainingId
      ? `edittraining?trainingId=${trainingId}`
      : "createtraining";
    const res = await fetch(`http://pdxf.tk:8000/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Number(trainingId),
        title: state.title,
        description: state.description,
        score: Number(state.score),
        system: state.system,
        vm_name: state.vm_name,
        vm_id: state.vm_id,
        vm_pw: state.vm_pw,
        visible: state.visible,
        challenges: challenges.map((d) => ({ ...d, score: Number(d.score) })),
      }),
    });
    alert(res.status, res.statusText);
    if (res.ok) {
      navigate("/admin/managetraining");
    }
  };

  const addChallenge = () => {
    const afterAdd = [...challenges];
    const item = { ...inputs, tactics: [] };
    for (let [key, value] of Object.entries(selected)) {
      if (value) {
        item.tactics.push(state.tactics.find((el) => el.hash === key));
      }
    }
    afterAdd.push(item);
    setChallenges(afterAdd);
    setSelected({});
  };

  const removeChallenge = (index) => {
    const afterRemove = [...challenges];
    afterRemove.splice(index, 1);
    setChallenges(afterRemove);
  };

  const makeString = (arr) => {
    let result = "";
    arr.forEach((el) => {
      if (result.length !== 0) {
        result = result.concat(", ");
      }
      result = result.concat(el.title);
    });
    return result;
  };

  return (
    <div className={`${styles.editchallenge}`}>
      <p className="title">Edit Challenge</p>
      <div className="box">
        <p className="small-title">Challenge Info</p>
        <div className={styles.smallinputs}>
          <input
            className={`${styles["chall-input"]}`}
            name="title"
            onChange={onChange}
            value={inputs.title}
            placeholder="title"
          />
          <input
            className={`${styles["chall-input"]}`}
            name="score"
            onChange={onChange}
            value={inputs.score}
            placeholder="score"
          />
        </div>
        <textarea
          name="description"
          rows="5"
          onChange={onChange}
          className={`${styles["chall-input"]}`}
          placeholder="description"
        ></textarea>
        <input
          className={`${styles["chall-input"]}`}
          name="flag"
          onChange={onChange}
          value={inputs.flag}
          placeholder="flag"
        />
        <p className="small-title">Select Tactics</p>
        <div className={styles.tactics}>
          {state.tactics.map((d, i) => (
            <div
              className={`${styles.tacticitem} ${
                selected[d.hash] ? styles.selected : ""
              }`}
              onClick={() => onClick(d.hash)}
            >
              <div className={styles.tacticinfo}>
                <div className={styles.order}>{i}</div>
                <p>{d.title}</p>
              </div>
              {d.payloads.map((p) => (
                <div className={styles.payload}>{p.payload}</div>
              ))}
            </div>
          ))}
        </div>
        <button className="pbutton" onClick={addChallenge}>
          Add Challenge
        </button>
      </div>
      <div className="box">
        <p className="small-title">Challenges</p>
        {challenges.length === 0 ? (
          "No challenges created"
        ) : (
          <table className={styles.created}>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Score</th>
                <th>Tactics</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="box-table">
              {challenges.map((d, i) => (
                <tr>
                  <td width="10%">{i}</td>
                  <td width="30%">{d.title}</td>
                  <td width="10%">{d.score}</td>
                  <td width="50%">{makeString(d.tactics)}</td>
                  <td>
                    <button
                      className="rmv-btn"
                      onClick={() => removeChallenge(i)}
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button className="pbutton" onClick={finishEdit}>
        FINISH
      </button>
    </div>
  );
};

export default EditChallenge;
