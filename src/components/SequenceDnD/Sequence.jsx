import { Close, Edit } from "@mui/icons-material";
import { Droppable } from "react-beautiful-dnd";
import Payload from "src/components/SequenceDnD/Payload";

import "./styles.scss";

const Sequence = ({ id, index, tactic, removeItem }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div className="droppable">
          <div className="tactic-header">
            <div className="tactic-info">
              <div className="tactic-order">{index}</div>
              <p>{tactic.title}</p>
            </div>
            <div className="btn-group">
              <button className="icon-btn">
                <Close />
              </button>
              <button className="icon-btn">
                <Edit />
              </button>
            </div>
          </div>
          <div
            className="draggable-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
            // style={{
            //   backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
            // }}
          >
            {tactic.payloads.map((d, i) => (
              <Payload
                key={d.id}
                droppableId={id}
                draggableId={d.id}
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
