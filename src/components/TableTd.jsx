import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const TableTd = ({ data, setModalState, handleRemove, admin }) => {
    const onRemove = (d) => {
        handleRemove(d)
    }

    return (
        <>
            <tr>
                <td>{data.num}</td>
                <td id="title" onClick={() => setModalState({ data: data, isOpen: true })}>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.cdate}</td>
                <td>{data.views}</td>
                {(admin === 1) && (
                    <>
                        <td class="icon" onClick={() => setModalState({ data: data, isOpen: true, ceState: "edit" })}>
                            <FaRegEdit />
                        </td>
                        <td class="icon" onClick={() => onRemove(data)}>
                            <FaRegTrashAlt />
                        </td>
                    </>
                )}
            </tr>
        </>
    )
};

export default TableTd;