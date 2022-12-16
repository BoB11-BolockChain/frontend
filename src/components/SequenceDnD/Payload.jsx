import { Close, Edit } from "@mui/icons-material";
import { useRef, useState, useMemo } from "react";

const { Draggable } = require("react-beautiful-dnd");

const Payload = ({ droppableId, index, data, removePayload }) => {
  const [isShowMore, setIsShowMore] = useState(false); 
  const comment = data.payload
  const textLimit = useRef(200); 
  
  const commenter = useMemo(() => { 	
    const shortReview = 		   	
      comment.slice(0, textLimit.current); 	
    
    if (comment.length > textLimit.current) { 	
      if (isShowMore) { return comment; } 	
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
        >
          {/* <p {...provided.dragHandleProps}>{data.payload}</p> */}
          <div {...provided.dragHandleProps} {...provided.draggableProps}>{commenter}</div>
          
      <div className="fold-btn" onClick={() => setIsShowMore(!isShowMore)}>{(comment.length > textLimit.current) &&	
      (isShowMore ? '▲' : '▶')}
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
