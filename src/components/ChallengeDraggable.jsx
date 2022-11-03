import { Close, Edit } from "@mui/icons-material";
import { useState } from "react";

const { Draggable } = require("react-beautiful-dnd");

const ChallengeDraggable = ({
  droppableId,
  draggableId,
  index,
  data,
  removeItem,
  editItem,
}) => {
  const [editing, setEditing] = useState(false);
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="m-2 border-2 rounded-lg border-grey-300"
        >
          <span {...provided.dragHandleProps} className="text-xl">
            {data}
          </span>
          <button onClick={() => removeItem(droppableId, draggableId)}>
            <Close />
          </button>
          <button>
            <Edit />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default ChallengeDraggable;
