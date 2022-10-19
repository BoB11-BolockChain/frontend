import {
  Avatar,
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import Loading from "src/components/Loading";
import useGetFetch from "src/hooks/useGetFetch";
import useWebSocket from "src/hooks/useWebSocket";

const DashboardById = () => {
  const { id } = useParams();
  // const msg = useWebSocket(`ws://www.pdxf.tk:8000/dashboard?id=${id}`);
  // const [steps, setSteps] = useState(null);

  // useEffect(() => {
  //   if (msg) {
  //     console.log(id);
  //     const json = JSON.parse(msg);
  //     const paw = json["host_group"][0]["paw"];
  //     setSteps(json["steps"][paw]["steps"]);
  //   }
  // }, [msg]);

  const [modalState, setModalState] = useState({ data: {}, isOpen: false });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dummy = [
    {
      id: "dsafdsafsa",
      seq: "whoami",
      time: "2022-22-22",
      status: 0,
    },
    {
      id: "dsafdsafsafdsafa",
      seq: "superpowershell",
      time: "2022-22-22",
      status: 1,
    },
    {
      id: "dsafdsafsadsfafsaf",
      seq: "go home home",
      time: "2022-22-22",
      status: 1,
    },
  ];

  return (
    <Layout>
      <Typography variant="h3">Dashboard of {id}</Typography>
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
            <TableCell>attack sequence</TableCell>
            <TableCell>timestamp</TableCell>
            <TableCell>see status</TableCell>
          </TableHead>
          <TableBody>
            {dummy.map((d, i) => (
              <TableRow key={d.id}>
                <TableCell>
                  <Avatar
                    variant="rounded"
                    sx={{ bgcolor: d.status === 0 ? "green" : "red" }}
                  >
                    {i}
                  </Avatar>
                </TableCell>
                <TableCell>{d.seq}</TableCell>
                <TableCell>{d.time}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => setModalState({ data: d, isOpen: true })}
                    variant="contained"
                    color="secondary"
                  >
                    see status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Modal
        open={modalState.isOpen}
        onClose={() => setModalState({ data: {}, isOpen: false })}
      >
        <Box sx={style}>
          <Typography align="center">{modalState.data.seq}</Typography>
          <Typography align="center">{modalState.data.status}</Typography>
        </Box>
      </Modal>
    </Layout>
  );
};

export default DashboardById;
