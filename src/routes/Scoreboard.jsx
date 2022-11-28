import React, { PureComponent, StrictMode, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';
import BoardModal from "src/components/BoardModal";
import "src/components/Layout/Board.scss";
import Loading from "src/components/Loading";
import ScoreTr from "src/components/ScoreTr";
import Scoregraph from "./Scoregraph.json"

  const config = {
    data: Scoregraph,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

const Scoreboard = () => {
  const [width, setWidth] = useState("");
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/scorelist");
      if (res.ok) {
        console.log("asasa")
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData(js.data);
        setDataLoaded(true);
        console.log(js);
        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };

    fetchData();
  }, [width]);

return (
 <>
 
 <div id="container">
 </div>

  <BoardModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
        margin={width}
      />
      <header>
          <h1 className="h2 fw-bold my-4">ScoreBoard</h1>
        </header>
        <Line {...config} />

        <div></div>
  <div class="container">
  {dataLoaded ? (
    <table>
      <thead>
        <th width="10%">No.</th>
        <th width="20%">User</th>
        <th width="40%">Score</th>
      </thead>
      <ScoreTr data={data} setModalState={setModalState} />
    </table>
  ) : ( 
     <Loading /> 
  )} 
</div>
</>
 )};

export default Scoreboard;
