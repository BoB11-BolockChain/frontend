import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "src/components/Dropdown";
import Loading from "src/components/Loading";
import Sequence from "src/components/SequenceDnD";
import useInputState from "src/hooks/useInputState";

import "./styles.scss";

const EditTraining = () => {
  const OS = ["Windows", "Linux"];
  const [selected, setSelected] = useState(window.sessionStorage.getItem("os"));
  const { trainingId } = useParams();
  const [osstate, setosstate] = useState([]);
  const [osstate1, setosstate1] = useState([]);
  const [state, setState, onChange] = useInputState();
  const [tactics, setTactics] = useState([]);
  const [challenges, setChallenges] = useState([]);

  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    const GetVMName = async () => {
      const res = await fetch(`http://pdxf.tk:8000/getwindowslist`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const jsonBody = await res.json();
        const vmnamedata1 = jsonBody;
        setosstate1(vmnamedata1);
      } else {
        console.log(res.status);
      }

      const res1 = await fetch(`http://pdxf.tk:8000/getlinuxlist`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res1.ok) {
        const jsonBody = await res1.json();
        const vmnamedata = jsonBody;
        setosstate(vmnamedata);
      } else {
        console.log(res1.status);
      }
    };

    GetVMName();
    const fetchData = async () => {
      const res = await fetch(
        `http://pdxf.tk:8000/gettraining?trainingId=${trainingId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const jsonBody = await res.json();
        setIsFetched(true);
        setState({
          title: jsonBody.title,
          description: jsonBody.description,
          score: jsonBody.score,
          system: jsonBody.system,
          vm_name: jsonBody.vm_name,
          vm_id: jsonBody.vm_id,
          vm_pw: jsonBody.vm_pw,
          vm_visible: jsonBody.visible,
        });
        const tactics = [];
        jsonBody.challenges.forEach((element) => {
          tactics.push(...element.tactics);
        });
        setTactics(tactics);
        setChallenges(jsonBody.challenges);
      } else {
        console.log(res.status);
      }
    };
    trainingId ? fetchData() : setIsFetched(true);
  }, [trainingId, setState]);

  const getPayloads = (from, target) => {
    const tacticIndex = from.findIndex((el) => el.hash === target);
    console.log(from[tacticIndex].payloads);
    const payloads = [...from[tacticIndex].payloads];
    return [tacticIndex, payloads];
  };

  const onDragEnd = (result, provided) => {
    if (!result.destination) {
      return;
    }
    const afterDrag = [...tactics];

    if (result.source.droppableId === result.destination.droppableId) {
      const [tacticIndex, payloads] = getPayloads(
        tactics,
        result.source.droppableId
      );
      payloads[result.source.index] = payloads.splice(
        result.destination.index,
        1,
        payloads[result.source.index]
      )[0];
      afterDrag[tacticIndex].payloads = payloads;
      setTactics(afterDrag);
      return;
    }

    const [srcIndex, srcPayloads] = getPayloads(
      tactics,
      result.source.droppableId
    );
    const [destIndex, destPayloads] = getPayloads(
      tactics,
      result.destination.droppableId
    );
    destPayloads.splice(
      result.destination.index,
      0,
      srcPayloads.splice(result.source.index, 1)[0]
    );

    afterDrag[srcIndex].payloads = srcPayloads;
    afterDrag[destIndex].payloads = destPayloads;
    setTactics(afterDrag);
    return;
  };

  const removeTactic = (droppableId) => {
    const afterRemove = [...tactics];
    const tacticIndex = getPayloads(tactics, droppableId)[0];
    afterRemove.splice(tacticIndex, 1);
    setTactics(afterRemove);
  };

  const removePayload = (droppableId, draggableId) => {
    const afterRemove = [...tactics];
    const [tacticIndex, payloads] = getPayloads(tactics, droppableId);
    const payloadIndex = payloads.findIndex((el) => el === draggableId);
    afterRemove[tacticIndex].payloads.splice(payloadIndex, 1);
    setTactics(afterRemove);
  };

  const addTactic = () => {
    const temp = [...tactics];
    temp.push({
      title: state.add,
      hash: Date(),
      payloads: [],
    });
    setState({ ...state, add: "" });
    setTactics(temp);
  };

  const addPayload = () => {
    const temp = [...tactics];
    temp[0].payloads.push({
      payload: state.payload,
      hash: Date(),
    });
    setState({ ...state, payload: "" });
    setTactics(temp);
  };

  const navigate = useNavigate();
  const move = () => {
    navigate(`/admin/editchallenge${trainingId ? "/" + trainingId : ""}`, {
      state: { ...state, tactics, challenges },
    });
  };

  return (
    <div className="edit-training">
      <header>
        <h1 className="h2 fw-bold my-4">Edit Training</h1>
      </header>
      <div className="box">
        <p className="small-title">OS</p>
        <Dropdown
          defaultValue={
            state.system ? state.system : window.sessionStorage.getItem("os")
          }
          setData={(d) => {
            window.sessionStorage.setItem("os", d);
            setSelected(d);
            setState({ ...state, system: d });
          }}
          options={OS}
        />
      </div>
      {isFetched && (
        <div className="box">
          <p className="small-title">VM Image</p>
          {selected === "Windows" ? (
            <Dropdown
              defaultValue={state.vm_name}
              setData={(data) => setState({ ...state, vm_name: data })}
              options={osstate1}
            />
          ) : (
            <Dropdown
              defaultValue={state.vm_name}
              setData={(data) => setState({ ...state, vm_name: data })}
              options={osstate}
            />
          )}
          <div className="flex-row">
            <input
              className="input"
              name="vm_id"
              placeholder="VM ID"
              onChange={onChange}
              value={state.vm_id}
            />
            <input
              className="input"
              name="vm_pw"
              placeholder="VM PASSWORD"
              onChange={onChange}
              value={state.vm_pw}
              type="password"
            />
          </div>
        </div>
      )}
      {isFetched ? (
        <div className="box">
          <p className="small-title">Training Information</p>
          <div className="flex-row">
            <input
              className="input"
              name="title"
              placeholder="Title"
              onChange={onChange}
              value={state.title}
            />
            <input
              className="input"
              name="score"
              placeholder="score"
              onChange={onChange}
              value={state.score}
            />
          </div>
          <textarea
            className="input"
            name="description"
            placeholder="Description"
            onChange={onChange}
            value={state.description}
            rows="3"
          ></textarea>
        </div>
      ) : (
        <Loading />
      )}
      <div className="box">
        <p className="small-title">Attack Sequence</p>
        {isFetched ? (
          <DragDropContext onDragEnd={onDragEnd}>
            {tactics.length === 0
              ? "No Tactics Created"
              : tactics.map((d, i) => (
                  <Sequence
                    key={d.hash}
                    data={d}
                    index={i}
                    removeTactic={removeTactic}
                    removePayload={removePayload}
                  />
                ))}
          </DragDropContext>
        ) : (
          <Loading />
        )}
        <div className="marginbox"></div>
        <div className="divider"></div>
        <p className="small-title">Add Tactic</p>
        <div className="addform">
          <input
            className="input"
            name="add"
            onChange={onChange}
            value={state.add}
            placeholder="Enter tactic name here"
          />
          <button className="pdxf-button" onClick={addTactic}>
            Add
          </button>
        </div>
        <div className="marginbox"></div>
        <p className="small-title">Add Payload</p>
        <div className="addform">
          <input
            className="input"
            name="payload"
            onChange={onChange}
            value={state.payload}
            placeholder="Enter payload here"
          />
          <button className="pdxf-button" onClick={addPayload}>
            Add
          </button>
        </div>
      </div>
      <div className="box">
        <p className="small-title">Configuration</p>
        <label htmlFor="visible" className="visible-label">
          Users can participate in this training
          <input
            type="checkbox"
            id="visible"
            checked={state.visible}
            onChange={(e) => {
              setState({ ...state, visible: e.target.checked });
            }}
            className="visible-input"
          />
        </label>
      </div>
      <button className="pbutton" onClick={move}>
        Go to Edit Challenges
      </button>
    </div>
  );
};

export default EditTraining;
