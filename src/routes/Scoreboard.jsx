import React, { PureComponent } from "react";
import Layout from "src/components/Layout/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, //line chart import
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis, //redar chart import
} from "recharts";

const line_data = [
  {
    name: "1 Day",
    B_Team: 4000,
    A_Team: 2400,
    amt: 2400,
  },
  {
    name: "2 Day",
    B_Team: 3000,
    A_Team: 1398,
    amt: 2210,
  },
  {
    name: "3 Day",
    B_Team: 2000,
    A_Team: 9800,
    amt: 2290,
  },
  {
    name: "4 Day",
    B_Team: 2780,
    A_Team: 3908,
    amt: 2000,
  },
  {
    name: "5 Day",
    B_Team: 1890,
    A_Team: 4800,
    amt: 2181,
  },
  {
    name: "6 Day",
    B_Team: 2390,
    A_Team: 3800,
    amt: 2500,
  },
  {
    name: "7 Day",
    B_Team: 3490,
    A_Team: 4300,
    amt: 2100,
  },
];

const redar_data = [
  {
    subject: "Forensics",
    A: 150,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Web",
    A: 130,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Misc",
    A: 110,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Window",
    A: 120,
    B: 40,
    fullMark: 150,
  },
  {
    subject: "Linux",
    A: 120,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "PDxF",
    A: 120,
    B: 120,
    fullMark: 150,
  },
];
class Scoreboard extends PureComponent {
  render() {
    return (
      <Layout>
        <header>
          <h1>ScoreBoard</h1>
        </header>
        <LineChart
          width={500}
          height={300}
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
        </LineChart>

        <RadarChart
          cx={250}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={redar_data}
        >
          <PolarGrid stroke="black" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />

          <Radar
            name="H4uN"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />

          <Radar
            name="rbap"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />

          <Legend wrapperStyle={{ top: 30, left: 10, fontSize: 20 }} />
          <Tooltip />
        </RadarChart>
      </Layout>
    );
  }
}

export default Scoreboard;
