import React from 'react';
import ScoreTd from './ScoreTd';
// import useState from "react";

// const [data, setScoreData] = useState([]);

const ScoreTr = ({ data, setModalState}) => {
    return (
        <tbody>
            {
                data.map((d) => {
                    console.log(d)
                    return (
                        <ScoreTd key={d.id} data={d} setModalState={setModalState} />
                    )
                })
            }
        </tbody>
    )
};

export default ScoreTr;