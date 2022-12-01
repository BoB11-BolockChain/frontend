import React, { useState } from "react";

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
    <div class="boardmodal-write">
      <p className="boardmodal-title">CREATE POST</p>
      <form onSubmit={onCreateSubmit}>
        <table>
          <thead>
            <tr>
              <td id="inputTitle">
                <input
                  onChange={onCreateChange}
                  placeholder="Title"
                  name="title"
                  type="text"
                  className="input-title"
                />
              </td>
            </tr>
            <tr>
              <td id="inputContent">
                <textarea
                  onChange={onCreateChange}
                  placeholder="Content"
                  name="content"
                  cols="50"
                  rows="7"
                  className="input-content"
                />
              </td>
            </tr>
            <tr>
              <td>
                <button className="input-button">SUBMIT</button>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default ModalBoardCreate;
