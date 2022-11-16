import React from 'react';
// import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const ScoreTd = ({ data, setModalState }) => {

    return (
        <>
            <tr>
                <td>{data.num}</td>
                <td id="id" onClick={() => setModalState({ data: data, isOpen: true })}>{data.id}</td>
                <td>{data.score}</td>
                {/* {(admin === 1) && (
                    <>
                        <td class="icon" onClick={() => setModalState({ data: data, isOpen: true, ceState: "edit" })}>
                            <FaRegEdit />
                        </td>
                        <td class="icon" onClick={() => onRemove(data)}>
                            <FaRegTrashAlt />
                        </td>
                    </>
                )} */}
            </tr>
        </>
    )
};

export default ScoreTd;