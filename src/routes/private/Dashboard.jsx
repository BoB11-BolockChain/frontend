import { Folder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Loading from "src/components/Loading";
import useWebSocket from "src/hooks/useWebSocket";

const Dashboard = () => {
  // const msg = useWebSocket("ws://www.pdxf.tk:8000/dashboard");
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   if (msg) {
  //     const json = JSON.parse(msg);
  //     setData(json.data);
  //     console.log(msg);
  //   }
  // }, [msg]);

  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/admin/dashboard/${id}`);
  };

  const dummy = [
    {
      id: "fdsaidfdsaididid",
      userName: "fdsa",
      time: "2022-22-22",
      scenario: "sfdsdsanari",
      progress: "prodfdslaf",
    },
    {
      id: "ffdfdfsfididid",
      userName: "fdsa",
      time: "2022-22-22",
      scenario: "sfdsdsanari",
      progress: "prodfdslaf",
    },
    {
      id: "fddidididiaididid",
      userName: "fdsa",
      time: "2022-22-22",
      scenario: "sfdsdsanari",
      progress: "prodfdslaf",
    },
  ];

  return (
    <Layout>
      <Typography variant="h3">Dashboard</Typography>
      <Box
        sx={{
          m: 4,
          border: "2px solid grey",
          "border-radius": "15px",
          backgroundColor: "white",
        }}
      >
        <Table>
          <TableHead>
            <TableCell></TableCell>
            <TableCell>name</TableCell>
            <TableCell>time</TableCell>
            <TableCell>scenario</TableCell>
            <TableCell>progress</TableCell>
          </TableHead>
          <TableBody>
            {dummy.map((d) => (
              <TableRow hover key={d.id} onClick={() => onClick(d.id)}>
                <TableCell>
                  <Avatar>
                    <Folder />
                  </Avatar>
                </TableCell>
                <TableCell>{d.userName}</TableCell>
                <TableCell>{d.time}</TableCell>
                <TableCell>{d.scenario}</TableCell>
                <TableCell>{d.progress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Layout>
  );
};

export default Dashboard;

{
  /* <Typography variant="h3">Dashboard</Typography>
      <List sx={{ border: "2px solid grey", "border-radius": "15px" }}>
        <ListItem>
          <ListItemText primary="username" />
          <ListItemText primary="time" />
          <ListItemText primary="scenario" />
          <ListItemText primary="progress" />
        </ListItem>
        {dummy.map((d) => (
          <ListItemButton>
            <Avatar>
              <Image />
            </Avatar>
            <ListItemText primary={d.userName} />
            <ListItemText primary={d.time} />
            <ListItemText primary={d.scenario} />
            <ListItemText primary={d.progress} />
          </ListItemButton>
        ))}
      </List> */
}
