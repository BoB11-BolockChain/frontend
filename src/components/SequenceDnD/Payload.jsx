import { Close } from "@mui/icons-material";
import { useMemo, useRef, useState } from "react";

const { Draggable } = require("react-beautiful-dnd");

const Payload = ({ droppableId, index, data, removePayload }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const comment = data.payload;
  const textLimit = useRef(200);

  const commenter = useMemo(() => {
    const shortReview = comment.slice(0, textLimit.current);

    if (comment.length > textLimit.current) {
      if (isShowMore) {
        return comment;
      }
      return shortReview;
    }
    return comment;
  }, [isShowMore]);

  return (
    <Draggable draggableId={data.hash} index={index}>
      {(provided, snapshot) => (
        <div
          className="draggable payload-box"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div>{commenter}</div>
          <div className="fold-btn" onClick={() => setIsShowMore(!isShowMore)}>
            {comment.length > textLimit.current && (isShowMore ? "▲" : "▶")}
          </div>
          <div className="btn-group">
            <button
              className="icon-btn"
              onClick={() => removePayload(droppableId, data.hash)}
            >
              <Close />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Payload;
