import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import ScoreModal from "src/components/ScoreModal";
import "src/components/Layout/Score.scss";
import Loading from "src/components/Loading";
import ScoreTr from "src/components/ScoreTBody";
import tempImg from "src/assets/user1.png";

const Scoreboard = () => {
  const [width, setWidth] = useState("");
  const [modalState, setModalState] = useState({
    data: {},
    isOpen: false,
    img: tempImg,
  });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [line, setLine] = useState([]);
  const [lineLoaded, setLineLoaded] = useState(false);
  const [config, setConfig] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/scorelist");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData(js.data);
        setLine(js.line);

        setConfig({
          data: line,
          xField: "time",
          yField: "score",
          seriesField: "user",
          xAxis: {
            type: "time",
            label: {
              autoRotate: false,
              // formatter: (v) => {
              //   console.log(v);
              //   const date = v.split(" ")[0].slice(5);
              //   const time = v.split(" ")[1].slice(0, -3);
              //   console.log(typeof time);
              //   return date + " " + time;
              //   // date.split("-")[1] +
              //   // "-" +
              //   // date.split("-")[2] +
              //   // " " +
              //   // time.split(":")[0] +
              //   // ":" +
              //   // time.split(":")[1]
              // },
            },
          },
          yAxis: {
            label: {
              formatter: (v) =>
                `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
            },
          },
          legend: {
            layout: "horizontal",
            position: "bottom",
          },
        });
        setDataLoaded(true);
        setLineLoaded(true);
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
      <ScoreModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
        margin={width}
        img={tempImg}
      />
      <header>
        <h1 className="h2 fw-bold my-4">ScoreBoard</h1>
      </header>
      {lineLoaded ? <Line {...config} /> : null}
      {dataLoaded ? (
        <div className="score-container">
          <table>
            <thead>
              <th width="5%">No.</th>
              <th colspan="2" width="10%">
                User
              </th>
              <th width="50%"></th>
              <th width="5%">Score</th>
            </thead>
            <ScoreTr data={data} setModalState={setModalState} img={tempImg} />
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Scoreboard;
