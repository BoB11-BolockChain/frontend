import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "src/components/Dropdown";
import Loading from "src/components/Loading";
import Sequence from "src/components/SequenceDnD";
import useInputState from "src/hooks/useInputState";

import "./styles.scss";

const EditTraining = () => {
  const { trainingId } = useParams();

  const [state, setState, onChange] = useInputState();

  const [items, setItems] = useState([]);

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
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
        setData(jsonBody);

        setState({
          name: jsonBody.scenario.title,
          description: jsonBody.scenario.description,
        });

        // challenge should be revisable with remove tactic
        const tactics = [];
        jsonBody.challenges.forEach((element) => {
          tactics.push(...element.tactics);
        });
        setItems(tactics);
      } else {
        console.log(res.status);
      }
    };
    if (trainingId) {
      fetchData();
    } else {
      setIsFetched(true);
    }
  }, []);

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
        <p className="small-title">VM Image</p>
        <Dropdown />
      </div>
      {isFetched ? (
        <div className="box">
          <p className="small-title">Training Information</p>
          <input
            className="input"
            name="name"
            placeholder="Title"
            onChange={onChange}
            value={state.name}
          />
          <input
            className="input"
            name="description"
            placeholder="Description"
            onChange={onChange}
            value={state.description}
          />
        </div>
      ) : (
        <Loading />
      )}
      <div className="box">
        <p className="small-title">Attack Sequence</p>
        {isFetched ? (
          <DragDropContext onDragEnd={onDragEnd}>
            {items.length === 0
              ? "No Tactics Created"
              : items.map((d, i) => (
                  <Sequence
                    key={d.droppableId}
                    tactic={d}
                    index={i}
                    removeItem={removeItem}
                  />
                ))}
          </DragDropContext>
        ) : (
          <Loading />
        )}
        <p className="small-title">Add Tactic</p>
        <div className="addform">
          <input
            className="input"
            name="add"
            onChange={onChange}
            value={state.add}
            placeholder="Enter tactic name here"
          />
          <button className="pdxf-button" onClick={addSequence}>
            Add
          </button>
        </div>
        <p className="small-title">Add Payload</p>
        <div className="addform">
          <input
            className="input"
            name="payload"
            onChange={onChange}
            value={state.payload}
            placeholder="Enter payload here"
          />
          <button className="pdxf-button" onClick={addItem}>
            Add
          </button>
        </div>
      </div>
      <button className="pdxf-button" onClick={move}>
        next
      </button>
    </div>
  );
};

export default EditTraining;
