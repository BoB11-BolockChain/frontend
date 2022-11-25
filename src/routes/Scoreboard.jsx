import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  // PolarAngleAxis,
  // PolarGrid,
  // PolarRadiusAxis, //line chart import
  // Radar,
  // RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BoardModal from "src/components/BoardModal";
import "src/components/Layout/Board.scss";
import Loading from "src/components/Loading";
import ScoreTBody from "src/components/ScoreTBody";

const line_data = [
  {
    name: "14:00",
    C: 0,
    B_Team: 0,
    A_Team: 0,
    amt: 2400,
  },
  {
    name: "15:00",
    C: 0,
    B_Team: 800,
    A_Team: 1300,
    amt: 2210,
  },
  {
    name: "16:00",
    C: 0,
    B_Team: 2100,
    A_Team: 1900,
    amt: 2290,
  },
  {
    name: "17:00",
    C: 0,
    B_Team: 3000,
    A_Team: 2900,
    amt: 2000,
  },
  {
    name: "18:00",
    C: 1000,
    B_Team: 3000,
    A_Team: 3800,
    amt: 2181,
  },
  {
    name: "19:00",
    C: 1500,
    B_Team: 3500,
    A_Team: 4400,
    amt: 2500,
  },
  {
    name: "20:00",
    C: 2000,
    B_Team: 3800,
    A_Team: 4400,
    amt: 2100,
  },
];
const Scoreboard = () => {
  console.log("sdds");
  const [width, setWidth] = useState("");
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/scorelist");
      if (res.ok) {
        console.log("asasa");
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
      <BoardModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
        margin={width}
      />
      <header>
        <h1 className="h2 fw-bold my-4">ScoreBoard</h1>
      </header>
      <LineChart
        width={800}
        height={350}
        data={line_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="A_Team"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="B_Team" stroke="#82ca9d" />
        <Line type="monotone" dataKey="C" stroke="#2e2e77" />
      </LineChart>
      <div class="container">
        {dataLoaded ? (
          <table>
            <thead>
              <th width="10%">No.</th>
              <th width="20%">User</th>
              <th width="40%">Score</th>
            </thead>
            <ScoreTBody data={data} setModalState={setModalState} />
          </table>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Scoreboard;
