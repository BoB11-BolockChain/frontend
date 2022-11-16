import { Close, Edit } from "@mui/icons-material";

import "./styles.scss";

const { Droppable } = require("react-beautiful-dnd");
const { default: ChallengeDraggable } = require("./Payload");

const Sequence = ({ droppableId, list, index, tactic, removeItem }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div className="droppable">
          <span className="seq-index">{index}</span>
          <span>{tactic}</span>
          <button className="icon-btn">
            <Close />
          </button>
          <button className="icon-btn">
            <Edit />
          </button>
          <div
            className="draggable-list"
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
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Sequence;
