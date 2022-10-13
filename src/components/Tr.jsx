import React, { useState } from 'react';
import Td from './Td';

const Tr = ({ data, setModalState, handleRemove, admin }) => {
    return (
        <tbody>
            {
                data.map((d) => {
                    return (
                        <Td key={d.id} data={d} setModalState={setModalState} handleRemove={handleRemove} admin={admin} />
                    )
                })
            }
        </tbody>
    )
};

export default Tr;