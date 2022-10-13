import React, { useState } from "react";

const ModalBoardEdit = ({ data }) => {
    const [editState, setEditState] = useState({ num: data.num, title: data.title, content: data.content, id: window.sessionStorage.getItem("sessionId") });

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
        <form onSubmit={onEditSubmit}>
            <tr>
                <td><input onChange={onEditChange} placeholder="제목" name="title" type="text" defaultValue={editState.title} /></td>
            </tr>
            <tr>
                <td><textarea onChange={onEditChange} placeholder="내용" name="content" cols="50" rows="10" defaultValue={editState.content} /></td>
            </tr>
            <input type="submit" />
        </form>
    )
}
export default ModalBoardEdit;