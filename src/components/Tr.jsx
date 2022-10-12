import React, { useState } from 'react';
import Td from './Td';

const Tr = ({ data, setModalState }) => {
    return (
        <tbody>
            {
                data.map((d) => {
                    return (
                        <Td key={d.id} data={d} setModalState={setModalState} />
                    )
                })
            }
        </tbody>
    )
};

export default Tr;