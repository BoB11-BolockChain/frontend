import React from 'react';

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
                        <td onClick={() => setModalState({ data: data, isOpen: true, ceState: "edit" })}>Edit</td>
                        <td onClick={() => onRemove(data)}>Remove</td>
                    </>
                )}
            </tr>
        </>
    )
};

export default TableTd;