import React, { useState } from "react";
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";

const ModalBoardCreate = () => {
  const [createState, setCreateState] = useState({
    title: "",
    content: "",
    id: window.sessionStorage.getItem("sessionId"),
  });
  const onCreateChange = (e) => {
    const { name, value } = e.target;
    setCreateState({ ...createState, [name]: value });
  };
  const onCreateSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://www.pdxf.tk:8000/noticreate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createState),
    });
    if (res.ok) {
      window.location.reload();
    }
  };
  return (
    <div class="boardmodal-submit">
      <form onSubmit={onCreateSubmit}>
        <table>
          <thead>
            <tr>
              <td id="inputTitle">
                <MDBInput
                  onChange={onCreateChange}
                  placeholder="Title"
                  name="title"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td id="inputContent">
                <MDBTextArea
                  onChange={onCreateChange}
                  placeholder="Content"
                  name="content"
                  cols="50"
                  rows="7"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MDBBtn className="w-100 fw-bold text-uppercase" size="md">
                  submit
                </MDBBtn>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default ModalBoardCreate;
