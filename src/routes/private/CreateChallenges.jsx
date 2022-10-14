import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "src/components/drag/DraggableElement";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";
import dumpdata from "./asdf.json";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";

const DragDropContextContainer = styled.div`
  padding: 20px;
  border: 4px solid indianred;
  border-radius: 6px;
  border-color: #212951;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 32.5%;
  grid-gap: 8px;
`;
const Button_ = styled.div`
  padding-top: 68px;
  padding-right: 30px;
`;

const Inputcreate = styled.div`
  clear: both;
  display: block;
  content: "";
`;

const Create_box = styled.div`
  grid-template-columns: 33% 33% 32.5%;
  padding-top: 10px;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  background: #b5b8d1;
`;

const Abilitynamearea = styled.input`
  width: 20%;
  margin-left: 6%;
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
  margin-bottom: 10px;
`;

// const data_list = JSON.parse(json_data);
// let data_list = dumpdata;
let data_list = {};
const getItems = (data, count, prefix) =>
  Array.from({ length: count, name: prefix }, (v, k) => k).map((k) => {
    const Branch_name = prefix;
    const randomId = Math.floor(Math.random() * 1000000000);
    return {
      id: `id-${randomId}`,
      AbilityName: data[Branch_name][k].AbilityName,
      prefix,
      content: `${Branch_name}-${k}`,
      payload: data[Branch_name][k].Payload,
    };
  });
const generateLists = (data) =>
  Object.keys(data).reduce(
    (acc, listKey) => ({
      ...acc,
      [listKey]: getItems(data, Object.keys(data[listKey]).length, listKey),
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

const make_json = (elements, info_data) => {
  const returndata = [];
  for (const elementkey in elements) {
    const branchstack = [];
    // console.log(elementkey);
    for (const abilitykey in elements[elementkey]) {
      // const abilitystack = [];
      // console.log(elements);
      // console.log(elementkey);
      branchstack.push({
        Seqence: abilitykey,
        Payload: elements[elementkey][abilitykey].payload,
        AbilityName: elements[elementkey][abilitykey].AbilityName,
      });
      // branchstack.push(abilitystack);
      // console.log(abilitystack);
    }
    // console.log(branchstack);
    if (elementkey != "Delete") {
      returndata.push({ Branch: branchstack });
    }
    // console.log(returndata);
  }
  // console.log(returndata);
  let tt = info_data.ChallengesScore;
  tt *= 1;
  const final_data = {
    data: returndata,
    info: {
      Title: info_data.ChallengesName,
      Description: info_data.ChallengesInfo,
      Score: tt,
      OS: info_data.ChallengesOS,
    },
  };
  const json = JSON.stringify(final_data);
  console.log(json);
  // console.log(returndata);
  return json;
};

function DragList() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [_data_, set_data_] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:3000/basic", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        let js = await res.json();
        set_data_(js.data);
        // console.log(js);
        setDataLoaded(true);
        // console.log(js);
        // js["Branch" + addbranch_num] = [];
        // js.unshift("d");
        const delete_temp = [];
        delete_temp["Delete"] = [];
        // data_list = js;
        // console.log(data_list);
        const temp = { ...delete_temp, ...js };
        // console.log(temp);
        data_list = temp;
        set_data_(data_list);
        // console.log(Delete);
        // data_list["Delete"] = [];
        // console.log(data_list);
        // console.log(data);
        // console.log(js);
        setElements(generateLists(data_list));
        // console.log(elements);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const [inputinfo, setinputinfo] = React.useState({
    ChallengesInfo: "",
    ChallengesScore: 0,
    ChallengesName: "",
    ChallengesOS: "",
  });
  const [elements, setElements] = React.useState(generateLists(data_list));
  useEffect(() => {
    setElements(generateLists(data_list));
  }, [data_list]);
  // make_json(elements, inputinfo)
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
    // console.log(listCopy);
    setElements(listCopy);
  };

  const onSubmit_ = async () => {
    const addbranch_num = Object.keys(data_list).length;
    const listCopy = { ...elements };
    listCopy["Branch" + addbranch_num] = [];
    // console.log(json_data);
    // console.log(listCopy);
    // generateLists(listCopy);
    // console.log(elements);
    // data_list = listCopy;
    // console.log(data_list);
    setElements(listCopy);
    // generateLists(data_list);
    // console.log(_data_);
    // _data_ = listCopy;
    data_list = listCopy;

    // data_list = listCopy;
  };

  // const onSubmit_delete = async () => {
  //   const addbranch_num = Object.keys(data_list).length;
  //   const listCopy = { ...elements };
  //   for (var i = 0; i < addbranch_num; i++) {
  //     console.log(listCopy);
  //     console.log(i);
  //     if (i === addbranch_num) {
  //       listCopy.splice("Branch" + addbranch_num, 1);
  //       i--;
  //     }
  //   }
  //   setElements(listCopy);
  //   data_list = listCopy;
  // };

  const onChange_info = (e) => {
    const { name, value } = e.target;
    setinputinfo({ ...inputinfo, [name]: value });
  };

  const onSubmit_final = async () => {
    const res = await fetch("http://www.pdxf.tk:8000/createchallenges", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: make_json(elements, inputinfo),
    });
    if (res.ok) {
      alert("Create success");
      navigate("/challenges");
    } else {
      alert("Fail");
    }
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
      {dataLoaded ? (
        <>
          <DragDropContextContainer>
            <DragDropContext onDragEnd={onDragEnd}>
              <Remotecon_box>
                <Create_box>
                  Challenges information
                  <Inputcreate>
                    <Payarea
                      onChange={onChange_info}
                      name="ChallengesInfo"
                      placeholder="  Input Challenges Info"
                      type="text"
                    />
                    <label>
                      <input
                        onChange={onChange_info}
                        name="ChallengesOS"
                        value="Windows"
                        // checked={setinputinfo.OS === "Windows"}
                        type="radio"
                      />
                      Windows
                    </label>
                    <label>
                      <input
                        onChange={onChange_info}
                        name="ChallengesOS"
                        value="Linux"
                        // checked={setinputinfo.OS === "Linux"}
                        type="radio"
                      />
                      Linux
                    </label>
                    <Abilitynamearea
                      onChange={onChange_info}
                      name="ChallengesScore"
                      placeholder="  Input Challenges Score"
                      type="number"
                    />

                    <Abilitynamearea
                      onChange={onChange_info}
                      name="ChallengesName"
                      placeholder="  Input Challenges Name"
                      type="text"
                    />
                  </Inputcreate>
                </Create_box>
              </Remotecon_box>
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
                    <Button_>
                      <ReactiveButton
                        onClick={() => onSubmit_()}
                        color="violet"
                        type={"submit"}
                        idleText="Add Branch"
                      />
                      <a> </a>
                      <ReactiveButton
                        onClick={() => onSubmit()}
                        color="violet"
                        type={"submit"}
                        idleText="Create"
                      />
                    </Button_>
                  </Inputcreate>
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
            onClick={() => onSubmit_final()}
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
            // height={50}
            animation={true}
          />
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default DragList;
