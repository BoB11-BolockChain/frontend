import React, { useState } from 'react';

const Td = ({ data, setModalState, handleRemove, admin }) => {
    const onRemove = (d) => {
        handleRemove(d)
    }
    // if (admin) {
    //     setDataLoaded(true);
    // }

    return (
        <>
            <tr>
                <td>{data.num}</td>
                <td onClick={() => setModalState({ data: data, isOpen: true })}>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.cdate}</td>
                <td>{data.views}</td>
                {(admin == 1) && (
                    <>
                        <td>Edit</td>
                        <td onClick={() => onRemove(data)}>Remove</td>
                    </>
                )}
            </tr>
        </>
    )
};

export default Td;