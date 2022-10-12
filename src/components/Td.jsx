import React from 'react';

const Td = ({ data, setModalState }) => {

    return (
        <>
            <tr onClick={() => setModalState({ data: data, isOpen: true })}>
                <td>{data.num}</td>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.cdate}</td>
                <td>{data.views}</td>
            </tr>
        </>
    )
};

export default Td;