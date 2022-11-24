import React, { useState } from "react";
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";

const ModalBoardEdit = ({ data }) => {
  const [editState, setEditState] = useState({
    num: data.num,
    title: data.title,
    content: data.content,
    id: window.sessionStorage.getItem("sessionId"),
  });

  const onEditChange = (e) => {
    const { name, value } = e.target;
    setEditState({ ...editState, [name]: value });
  };

  const onEditSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://www.pdxf.tk:8000/notiedit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editState),
    });
    if (res.ok) {
      window.location.reload();
    }
  };
  return (
    <div class="boardmodal-submit">
      <form onSubmit={onEditSubmit}>
        <table>
          <thead>
            <tr>
              <td id="inputTitle">
                <MDBInput
                  onChange={onEditChange}
                  placeholder="Title"
                  name="title"
                  type="text"
                  defaultValue={editState.title}
                />
              </td>
            </tr>
            <tr>
              <td id="inputContent">
                <MDBTextArea
                  onChange={onEditChange}
                  placeholder="Content"
                  name="content"
                  cols="50"
                  rows="7"
                  defaultValue={editState.content}
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
export default ModalBoardEdit;
