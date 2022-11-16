import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "src/components/Dropdown";
import Sequence from "src/components/SequenceDnD";
import useInputState from "src/hooks/useInputState";

import "./styles.scss";

const dummy = [
  { tactic: "temp", droppableId: "temp", list: [] },
  { tactic: "explore", droppableId: "fdsa", list: ["fdsa", "adsf"] },
  { tactic: "sometactic", droppableId: "asdf", list: ["qwer", "rewq"] },
];

const EditTraining = () => {
  const { trainingId } = useParams();

  const [state, setState, onChange] = useInputState();

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (trainingId) {
      // fetch
    } else {
      setItems(dummy);
    }
  }, [trainingId]);

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(process.env.BACKEND_SERVER + trainingId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const jsonBody = await res.json();
        setIsFetched(true);
        setData(jsonBody);
      }
      // error handle : try-catch or res.ok else
    };
    if (trainingId) {
      fetchData();
    } else {
      setIsFetched(true);
    }
  }, [trainingId]);
  const log = () => {
    console.log(isFetched, data);
  };

  const onDragEnd = (result, provided) => {
    if (!result.destination) {
      return;
    }

    const tempItems = [...items];
    if (result.source.droppableId === result.destination.droppableId) {
      const targetIndex = items.findIndex(
        (el) => el.droppableId === result.source.droppableId
      );
      const targetList = [...tempItems[targetIndex].list];
      targetList[result.source.index] = targetList.splice(
        result.destination.index,
        1,
        targetList[result.source.index]
      )[0];
      tempItems[targetIndex].list = targetList;
      setItems(tempItems);
      return;
    }

    const srcIndex = items.findIndex(
      (el) => el.droppableId === result.source.droppableId
    );
    const srcList = [...items[srcIndex].list];
    const destIndex = items.findIndex(
      (el) => el.droppableId === result.destination.droppableId
    );
    const destList = [...items[destIndex].list];
    const [removed] = srcList.splice(result.source.index, 1);
    destList.splice(result.destination.index, 0, removed);

    tempItems[srcIndex].list = srcList;
    tempItems[destIndex].list = destList;
    setItems(tempItems);
    return;
  };

  const removeItem = (droppableId, draggableId) => {
    const temp = [...items];
    const droppableIndex = items.findIndex(
      (el) => el.droppableId === droppableId
    );
    const targetList = [...items[droppableIndex].list];
    const targetIndex = targetList.findIndex((el) => el === draggableId);
    temp[droppableIndex].list.splice(targetIndex, 1);
    setItems(temp);
  };

  const addSequence = () => {
    const temp = [...items];
    temp.push({ tactic: state.add, droppableId: state.add, list: [] });
    setState({ ...state, add: "" });
    setItems(temp);
  };

  const addItem = () => {
    const temp = [...items];
    temp[0].list.push(state.payload);
    setState({ ...state, payload: "" });
    setItems(temp);
  };

  const navigate = useNavigate();
  const move = () => {
    navigate("/admin/editchallenge", { state: items });
  };

  return (
    <div className="edit-training">
      <p className="title">Edit Training</p>
      <div className="box">
        <p className="title">vm image</p>
        <Dropdown />
      </div>
      <div className="box">
        <p className="title">info</p>
        <input
          className="input"
          name="name"
          placeholder="name"
          onChange={onChange}
        />
        <input
          className="input"
          name="description"
          placeholder="description"
          onChange={onChange}
        />
      </div>
      <div className="box">
        <p className="title">sequences</p>
        <DragDropContext onDragEnd={onDragEnd}>
          {items.map((d, i) => (
            <Sequence
              key={d.droppableId}
              {...d}
              index={i}
              removeItem={removeItem}
            />
          ))}
          <input
            className="input"
            name="add"
            onChange={onChange}
            value={state.add}
          />
          <button className="pdxf-button" onClick={addSequence}>
            add sequence
          </button>
          <input
            className="input"
            name="payload"
            onChange={onChange}
            value={state.payload}
          />
          <button className="pdxf-button" onClick={addItem}>
            add payload
          </button>
        </DragDropContext>
      </div>
      <button className="pdxf-button" onClick={move}>
        next
      </button>
    </div>
  );
};

export default EditTraining;
