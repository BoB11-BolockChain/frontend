import React from 'react';
import TableTd from './TableTd';

const TableTr = ({ data, setModalState, handleRemove, admin }) => {
    return (
        <tbody>
            {
                data.map((d) => {
                    return (
                        <TableTd key={d.id} data={d} setModalState={setModalState} handleRemove={handleRemove} admin={admin} />
                    )
                })
            }
        </tbody>
    )
};

export default TableTr;