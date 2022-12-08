import { Close, Edit } from "@mui/icons-material";
import { Droppable } from "react-beautiful-dnd";
import Payload from "src/components/SequenceDnD/Payload";

import "./styles.scss";

const Sequence = ({ index, data, removeTactic, removePayload }) => {
  return (
    <Droppable droppableId={data.hash}>
      {(provided, snapshot) => (
        <div className="droppable">
          <div className="tactic-header">
            <div className="tactic-info">
              <div className="tactic-order">{index}</div>
              <p className="text">{data.title}</p>
            </div>
            <div className="btn-group">
              <button
                className="icon-btn"
                onClick={() => removeTactic(data.hash)}
              >
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
            {data.payloads?.map((d, i) => (
              <Payload
                key={d.hash}
                droppableId={data.hash}
                index={i}
                data={d}
                removePayload={removePayload}
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
