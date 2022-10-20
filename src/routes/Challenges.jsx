import React, { useEffect, useState } from "react";
import ChallengeModal from "src/components/ChallengeModal";
import Layout from "src/components/Layout/Layout";
import ReactiveButton from "reactive-button";
import Loading from "src/components/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';

const Challenges = () => {
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [isFetched, data] = useGetFetch("http://www.pdxf.tk:8000/info");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Layout>
      <div class="Title">
        <h2>Create Scenario</h2>
      </div>

      <div class="container">
        <div class="row">
        <div class="col-md-6">
            <div class="wt-box">
            <div class="box-top">
                    <div class="box-title">OS version
                    <span class="box-subtitle">description</span></div>
                </div>
                <div class="box-body">
                <div>asdf</div>
                </div>
                <div class="box-bottom">
                    <div class="forblank"><input class="form-control inputbox" placeholder="title"></input></div>
                    <div class="forbtn"> <button type="button" class="btn btn-primary">Add</button></div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="wt-box">
            <div class="box-top">
                    <div class="box-title">VM option
                    <span class="box-subtitle">description</span></div>
                </div>
                <div class="box-body">
                    <div>select</div>
                </div>
                <div class="box-bottom">
                    <div class="forblank"><input class="form-control inputbox" placeholder="title"></input></div>
                    <div class="forbtn"> <button type="button" class="btn btn-primary">Add</button></div>
                </div>
            </div>
        </div>
        </div>

        <div class="row">
        <div class="col-md-12">
            <div class="wt-box">
                <div class="box-top">
                    <div class="box-title">Scenario Title
                    <span class="box-subtitle">description</span></div>
                </div>
                <div class="box-body">
                    <input class="form-control inputbox" placeholder="title"></input>
                </div>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12">
        <div class="wt-box">
            <div class="box-top">
                <div class="box-title">Scenario Description
                <span class="box-subtitle">description</span></div>
                </div>
            <div class="box-body">
                    <textarea class="form-control inputbox" placeholder="title"></textarea>
                </div>
            </div>
        </div>
        </div>
        <div class="row bottom-btn">
            <div class="col-md-9"></div>
            <div class="col-md-3"><button class="btn btn-primary pagebtn">Next</button></div>
        </div>
       

      </div>





      {/* {dataLoaded ? (
        data.map((d) => (
          <div key={d.title}>
            <p>
              <ReactiveButton
                onClick={() => setModalState({ data: d, isOpen: true })}
                idleText={<>{d.title}<br />{d.score}</>} /></p>
          </div>
        ))
      ) : (
        <Loading />
      )}
      <ChallengeModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
      /> */}
    </Layout>
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
