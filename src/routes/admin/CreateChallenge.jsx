import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import ChallengeDroppable from "../../components/ChallengeDroppable";

const dummy = [
  { tactic: "temp", droppableId: "temp", list: [] },
  { tactic: "explore", droppableId: "fdsa", list: ["fdsa", "adsf"] },
  { tactic: "sometactic", droppableId: "asdf", list: ["qwer", "rewq"] },
];

const CreateChallenge = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (id) {
      // fetch
    } else {
      setItems(dummy);
    }
  }, [id]);

  const [state, setState] = useState({ name: "", desc: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onClick = (e) => {
    const newList = [state.name];
    const tempItems = [...items];
    tempItems[0].list = newList;
    setItems(tempItems);
  };

  // give list to each droppable
  // give some set function to droppable
  // ondragend uses those functions

  const onDragEnd = (result, provided) => {
    if (!result.destination) {
      return;
    }

    const tempItems = [...items];

    if (result.source.droppableId === result.destination.droppableId) {
      const targetIndex = items.findIndex(
        (e) => e.droppableId === result.source.droppableId
      );
      const targetList = [...items[targetIndex].list];
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
      (e) => e.droppableId === result.source.droppableId
    );
    const srcList = [...items[srcIndex].list];

    const destIndex = items.findIndex(
      (e) => e.droppableId === result.destination.droppableId
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
      (e) => e.droppableId === droppableId
    );
    const targetList = [...items[droppableIndex].list];
    const targetIndex = targetList.findIndex((e) => e === draggableId);
    temp[droppableIndex].list.splice(targetIndex, 1);
    setItems(temp);
  };

  const editItem = () => {};

  return (
    <>
    <div class="Title">
      <h2>Create Challenge</h2></div>
    <div class="container">
    <div class="row">
          <div class="col-md-12">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  Add attack
                  <span class="box-subtitle"></span>
                </div>
              </div>
              <div class="box-body">
              <input
                  class="form-control inputbox"
                  placeholder="title"
                ></input>
                <div class="forblank-bt"></div>
                <textarea
                  class="form-control inputbox"
                  placeholder="description"
                ></textarea>
                
              </div>
              <div class="box-bottom">
              <button
          className="btn btn-primary attbtn"
          onClick={onClick}
        >Add
        </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      {/* <div className="p-2 flex flex-col gap-2 rounded-lg border-2 border-grey-300">
        <p>add attack</p>
        <input
          type="text"
          placeholder="name"
          className="h-10 p-2 rounded-lg border-2 border-pdxf-pink"
          name="name"
          onChange={onChange}
        />
        <textarea
          type="text"
          placeholder="desc"
          className="h-32 p-2 rounded-lg border-2 border-pdxf-pink"
          name="desc"
          onChange={onChange}
        />

        <button
          className="w-1/5 h-8 rounded-lg bg-pdxf-pink text-white place-self-end"
          onClick={onClick}
        >
          add
        </button>
      </div> */}
      <br />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="temp"></div>
        <div className="p-2 flex flex-col gap-2 rounded-lg border-2 border-grey-300 bg-white">
          <div class="box-title">attack seq</div>
          {items.map((d, i) => (
            <ChallengeDroppable
              key={d.droppableId}
              {...d}
              index={i}
              removeItem={removeItem}
              editItem={editItem}
            />
          ))}
        </div>
      </DragDropContext>
      
    </>
  );
};

export default CreateChallenge;
