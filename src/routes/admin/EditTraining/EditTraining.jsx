import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "src/components/Dropdown";
import Loading from "src/components/Loading";
import Sequence from "src/components/SequenceDnD";
import useInputState from "src/hooks/useInputState";

import "./styles.scss";

const dummy = ["option1", "option2", "option3", "option4"];

const EditTraining = () => {
  const { trainingId } = useParams();

  const [state, setState, onChange] = useInputState();
  const [tactics, setTactics] = useState([]);
  const [challenges, setChallenges] = useState([]);

  const [isFetched, setIsFetched] = useState(false);
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
        setState({
          title: jsonBody.title,
          description: jsonBody.description,
          score: jsonBody.score,
          // system: jsonBody.system,
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
    navigate(`/admin/editchallenge/${trainingId}`, {
      state: { ...state, tactics, challenges },
    });
  };

  return (
    <div className="edit-training">
      <div className="marginbox"></div>
      <p className="title">Edit Training</p>
      <div className="box">
        <p className="small-title">VM Image</p>
        <Dropdown
          defaultValue={dummy[1]}
          setData={(data) => setState({ ...state, system: data })}
          options={dummy}
        />
      </div>
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
      <button className="pbutton" onClick={move}>
        Go to Edit Challenges
      </button>
    </div>
  );
};

export default EditTraining;
