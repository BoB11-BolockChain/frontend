import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "src/components/drag/DraggableElement";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";

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
const Button_ = styled.div`
  padding-top: 68px;
  padding-right: 30px;
`;

// const Payarea = styled.textarea`
//   width: 80%;
//   height: 50%;
//   resize: none;
//   border-radius: 1px;
//   border-color: #212951;
// `;

const Inputcreate = styled.div`
  clear: both;
  display: block;
  content: "";
`;

const Create_box = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  background: #b5b8d1;
`;

const Abilitynamearea = styled.input`
  width: 20%;
  margin-left: 90px;
  margin-top: 15px;
  height: 25px;
  font-size: 14px;
  border-radius: 6px;
  background: white;
  float: left;
`;
const Payarea = styled.textarea`
  width: 60%;
  margin 10px;
  margin-left: 20px;
  height: 90px;
  font-size: 14px;
  resize: none;
  border-radius: 6px;
  background: white;
  float: left;
`;
const Remotecon_box = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 8px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border-color: #b5b8d1;
  border: 4px solid;
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
    },
    {
      "Payload": "<sfffipt>",
      "AbilityName": "asdfsdf"
    },
    {
      "Payload": "<scfadipt>",
      "AbilityName": "asdf"
    }
  ],
  "Delete": [
  ]
}`;

const data_list = JSON.parse(json_data);

const getItems = (count, prefix) =>
  Array.from({ length: count, name: prefix }, (v, k) => k).map((k) => {
    const Branch_name = prefix;
    const randomId = Math.floor(Math.random() * 1000000000);
    return {
      id: `id-${randomId}`,
      AbilityName: data_list[Branch_name][k].AbilityName,
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

const make_json = (elements) => {
  const returndata = [];
  for (const elementkey in elements) {
    const branchstack = [];
    for (const abilitykey in elements[elementkey]) {
      branchstack.push({
        Branch: elementkey,
        Seqence: abilitykey,
        AbilityName: elements[elementkey][abilitykey].AbilityName,
        Payload: elements[elementkey][abilitykey].payload,
      });
    }
    returndata.push(branchstack);
  }
  // console.log(returndata);
  let json = JSON.stringify(returndata);
  // console.log(json);
  // console.log(returndata);
  // return json;
};

function DragList() {
  const [elements, setElements] = React.useState(generateLists());
  useEffect(() => {
    setElements(generateLists());
  }, [make_json(elements)]);
  const [inputvalue, setinputvalue] = React.useState();
  const onChange = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: value });
  };

  const onSubmit = async () => {
    const randomId = Math.floor(Math.random() * 1000000000);
    const input_elements = {
      id: `id-${randomId}`,
      AbilityName: inputvalue.AbilityName,
      prefix: "Delete",
      content: "Branch1-0",
      payload: inputvalue.Payload,
    };

    const listCopy = { ...elements };
    // console.log(listCopy);
    listCopy["Branch1"] = addToList(listCopy["Branch1"], 0, input_elements);
    console.log(listCopy);
    setElements(listCopy);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };
    const sourceList = listCopy[result.source.droppableId];
    // console.log(result.source.droppableId);
    // console.log(sourceList);
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );

    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    if (result.destination.droppableId != "Delete") {
      listCopy[result.destination.droppableId] = addToList(
        destinationList,
        result.destination.index,
        removedElement
        // console.log(removedElement)
      );
    }

    setElements(listCopy);
  };

  return (
    <Layout>
      <header>
        <h1>Create Challenges</h1>
      </header>
      <DragDropContextContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Remotecon_box>
            <Create_box>
              Create
              <Inputcreate>
                <Payarea
                  onChange={onChange}
                  name="Payload"
                  placeholder=" Payload: ' or 1 = 1 #'"
                />
                <Abilitynamearea
                  onChange={onChange}
                  name="AbilityName"
                  placeholder="  Input AbilityName"
                  type="text"
                />
              </Inputcreate>
              <Button_>
                <ReactiveButton
                  onClick={onSubmit}
                  color="violet"
                  type={"submit"}
                  idleText="Create"
                />
              </Button_>
            </Create_box>
          </Remotecon_box>
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
      <br />
      <ReactiveButton
        color={"primary"}
        idleText={"CreateChallenges"}
        type={"submit"}
        style={{
          borderRadius: "5px",
        }}
        outline={false}
        shadow={false}
        rounded={false}
        size={"normal"}
        block={false}
        disabled={false}
        buttonRef={null}
        width={null}
        height={50}
        animation={true}
      />
    </Layout>
  );
}

export default DragList;
