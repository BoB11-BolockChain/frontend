import React, { useEffect, useState } from "react";
import ChallengeModal from "src/components/ChallengeModal";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";
import Loading from "src/components/Loading";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import useGetFetch from "src/hooks/useGetFetch";

const Challenges = () => {
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [isFetched, data] = useGetFetch("http://www.pdxf.tk:8000/info");

  useEffect(() => {
    console.log(data);
  }, []);

  return !isFetched ? (
    <Loading />
  ) : (
    <>
      <Layout>
        <h1>challenges</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>item</div>
          </Grid>
          <Grid item xs={4}>
            <div>item</div>
          </Grid>
          {data.data.map((d) => (
            <Grid item xs={4}>
              <Card variable="outlined">
                <CardContent>
                  <Typography align="center">center text</Typography>
                  <p>{d.title}</p>
                  <Button
                    variant="contained"
                    onClick={() => setModalState({ data: d, isOpen: true })}
                  >
                    {d.score}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
      <ChallengeModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
      />
    </>
  );
  // return (
  //   <Layout>
  //     <header>
  //       <h1>challenges</h1>
  //     </header>
  //     {dataLoaded ? (
  //       data.map((d) => (
  //         <div key={d.title}>
  //           <p>
  //             <ReactiveButton
  //               onClick={() => setModalState({ data: d, isOpen: true })}
  //               idleText={<>{d.title}<br />{d.score}</>} /></p>
  //         </div>
  //       ))
  //     ) : (
  //       <Loading />
  //     )}
  //     <ChallengeModal
  //       isOpen={modalState.isOpen}
  //       setModalState={setModalState}
  //       data={modalState.data}
  //     />
  //   </Layout>
  // );
};

export default Challenges;
