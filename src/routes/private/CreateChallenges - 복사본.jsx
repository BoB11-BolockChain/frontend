import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "src/components/drag/DraggableElement";
import Layout from "src/components/Layout/Layout";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border: 4px solid indianred;
  border-radius: 6px;
  border-color: #212951;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

//json 파일 가져와서 파싱
const json_data = `{
  "Branch1": [
    {
      "Payload": "' or 1 = 1 #'",
      "AbilityName": "Baby SQL Injection"
    },
    {
      "Payload": "' and 1 = 1 #'",
      "AbilityName": "blind SQL Injection"
    }
  ],
  "Branch2": [
    {
      "Payload": "<scrtip>alert(document.cookies);</script>",
      "AbilityName": "baby XSS"
    },
    {
      "Payload": "<scrtip>alert('xss');</script>",
      "AbilityName": "normal XSS"
    },
    {
      "Payload": "<sddipt>",
      "AbilityName": "ff XSS"
    }
  ],
  "Branch3": [
    {
      "Payload": "<scrtipff</script>",
      "AbilityName": "bassXSS"
    },
    {
      "Payload": "<scrtipdddd);</script>",
      "AbilityName": "no111S"
    },
    {
      "Payload": "<sddipt>",
      "AbilityName": "fsd22SS"
    }
  ],
  "Branch4": [
    {
      "Payload": "<sfffipt>",
      "AbilityName": "baaaS"
    },
    {
      "Payload": "<scfadipt>",
      "AbilityName": "nasdfasdfXSS"
    }
  ]
}`;

const data_list = JSON.parse(json_data);

const getItems = (count, prefix) =>
  Array.from({ length: count, name: prefix }, (v, k) => k).map((k) => {
    const Branch_name = prefix;
    return {
      id: data_list[Branch_name][k].AbilityName,
      prefix,
      content: `${Branch_name}-${k}`,
      payload: data_list[Branch_name][k].Payload,
    };
  });
const generateLists = () =>
  Object.keys(data_list).reduce(
    (acc, listKey) => ({
      ...acc,
      [listKey]: getItems(Object.keys(data_list[listKey]).length, listKey),
    }),
    {}
  );
const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

function DragList() {
  const [elements, setElements] = React.useState(generateLists());
  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <Layout>
      <header>
        <h1>Create Challenges</h1>
      </header>
      <DragDropContextContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <ListGrid>
            {Object.keys(data_list).map((listKey) => (
              <DraggableElement
                // payload={elements[listKey]}
                elements={elements[listKey]}
                key={listKey}
                prefix={listKey}
              />
            ))}
          </ListGrid>
        </DragDropContext>
      </DragDropContextContainer>
    </Layout>
  );
}

export default DragList;
