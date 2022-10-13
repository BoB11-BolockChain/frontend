import React, { useState } from "react";

const ModalBoardCreate = () => {
    const [createState, setCreateState] = useState({ title: "", content: "", id: window.sessionStorage.getItem("sessionId") });
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
        <>
            <form onSubmit={onCreateSubmit}>
                <tr>
                    <td id="inputTitle"><input onChange={onCreateChange} placeholder="제목" name="title" type="text" /></td>
                </tr>
                <tr>
                    <td id="inputContent"><textarea onChange={onCreateChange} placeholder="내용" name="content" cols="50" rows="10" /></td>
                </tr>
                <input type="submit" />
            </form>
        </>
    )
}

export default ModalBoardCreate;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           