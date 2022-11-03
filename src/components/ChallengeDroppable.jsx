const { Droppable } = require("react-beautiful-dnd");
const { default: ChallengeDraggable } = require("./ChallengeDraggable");

const ChallengeDroppable = ({
  droppableId,
  list,
  index,
  tactic,
  removeItem,
  editItem,
}) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div>
          <span className="inline-flex justify-center items-center w-4 h-4 p-3 text-xl border-4 rounded-xl border-pdxf-pink">
            {index}
          </span>
          <span>{tactic}</span>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            // style={{
            //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            // }}
          >
            {list.map((d, i) => (
              <ChallengeDraggable
                key={d}
                droppableId={droppableId}
                draggableId={d}
                index={i}
                data={d}
                removeItem={removeItem}
                editItem={editItem}
              />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ChallengeDroppable;
