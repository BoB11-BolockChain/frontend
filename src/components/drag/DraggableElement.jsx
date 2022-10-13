import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

const ColumnHeader = styled.div`
  margin-bottom: 20px;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: #b5b8d1;
`;

const DraggableElement = ({ prefix, elements }) => (
  <DroppableStyles>
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <ListItem
              payload={item.payload}
              key={item.id}
              name={item.AbilityName}
              item={item}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DroppableStyles>
);

export default DraggableElement;
