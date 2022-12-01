import React, { useState } from "react";

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
    <div className="boardmodal-write">
      <p className="boardmodal-title">EDIT POST</p>
      <form onSubmit={onEditSubmit}>
        <table>
          <thead>
            <tr>
              <td id="inputTitle">
                <input
                  onChange={onEditChange}
                  placeholder="Title"
                  name="title"
                  type="text"
                  defaultValue={editState.title}
                  className="input-title"
                />
              </td>
            </tr>
            <tr>
              <td id="inputContent">
                <textarea
                  onChange={onEditChange}
                  placeholder="Content"
                  name="content"
                  cols="50"
                  rows="10"
                  defaultValue={editState.content}
                  className="input-content"
                />
              </td>
            </tr>
            <tr>
              <td>
                <button className="input-button">submit</button>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};
export default ModalBoardEdit;
