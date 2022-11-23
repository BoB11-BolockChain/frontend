import { Close, Edit } from "@mui/icons-material";

const { Draggable } = require("react-beautiful-dnd");

const Payload = ({ droppableId, draggableId, index, data, removeItem }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          className="draggable"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <span {...provided.dragHandleProps}>{data.payload}</span>
          <div className="btn-group">
            <button
              className="icon-btn"
              onClick={() => removeItem(droppableId, draggableId)}
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
