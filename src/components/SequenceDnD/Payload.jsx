import { Close, Edit } from "@mui/icons-material";

const { Draggable } = require("react-beautiful-dnd");

const Payload = ({ droppableId, index, data, removePayload }) => {
  return (
    <Draggable draggableId={data.hash} index={index}>
      {(provided, snapshot) => (
        <div
          className="draggable"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <p {...provided.dragHandleProps}>{data.payload}</p>
          <div className="btn-group">
            <button
              className="icon-btn"
              onClick={() => removePayload(droppableId, data.hash)}
            >
              <Close />
            </button>
            <button className="icon-btn">
              <Edit />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Payload;
