import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CreateChallenge = () => {
  const [sequences, setSequences] = useState([
    { tactic: "whoami", order: ["powershell if write-host-blablabla"] },
    { tactic: "whoami", order: ["powershell if write-host-blablabla"] },
    { tactic: "whoami", order: ["powershell if write-host-blablabla"] },
  ]);

  const [a, setA] = useState(["fdsafd", "jhkljhkl"]);
  const [b, setB] = useState(["qerwq", "uopiu"]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const [removed] = a.splice(result.source.index, 1);
    result.splice(result.destination.index, 0, removed);
    setA(result);
  };

  // a little function to help us with reordering the result
  // const reorder = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);

  //   return result;
  // };
  // const items = reorder(
  //   this.state.items,
  //   result.source.index,
  //   result.destination.index
  // );
  return (
    <>
      <p className="text-2xl pt-4 pb-4">Create Challenge</p>
      <div className="p-2 flex flex-col gap-2 rounded-lg border-2 border-grey-300">
        <p>add attack</p>
        <input
          type="text"
          placeholder="name"
          className="h-10 p-2 rounded-lg border-2 border-pdxf-pink"
        />
        <textarea
          type="text"
          placeholder="desc"
          className="h-32 p-2 rounded-lg border-2 border-pdxf-pink"
        />
        <button className="w-1/5 h-8 rounded-lg bg-pdxf-pink text-white place-self-end">
          add
        </button>
      </div>
      <div className="p-2 flex flex-col gap-2 rounded-lg border-2 border-grey-300">
        <p>attack seq</p>
        {sequences.map((d, i) => (
          <div>
            <span className="inline-flex justify-center items-center w-4 h-4 p-3 text-xl border-4 rounded-xl border-pdxf-pink">
              {i + 1}
            </span>
            <span>{d.tactic}</span>
            {d.order.map((o) => (
              <p>{o}</p>
            ))}
          </div>
        ))}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="fdsa">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
              }}
              className="h-20"
            >
              <p className="text-xl">i am droppable</p>
              {a.map((d, i) => (
                <Draggable key={d} draggableId={d} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p className="text-xl">{d}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <p>divide</p>
        <Droppable droppableId="asdf">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
              }}
              className="h-20"
            >
              <p className="text-xl">second droppable</p>
              {b.map((d, i) => (
                <Draggable key={d} draggableId={d} index={i}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p className="text-xl">{d}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default CreateChallenge;
