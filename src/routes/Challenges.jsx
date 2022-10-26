import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "src/components/Layout/Layout";


const Challenges = () => {

  return (
    <Layout>
    <script src="multiselect-dropdown.js" ></script>
      <div class="Title">
        <h2>Create Scenario</h2>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  OS version
                  <span class="box-subtitle">description</span>
                </div>
                <div class="box-body">
                <div class="custom-select">
                <select class="select-box">
                <option value="0">Select OS Version</option>
                <option value="1">Windows 11</option>
                <option value="2">Windows 10</option>
                <option value="3">Linux Ubuntu 22.04</option>
                <option value="4">Linux Ubuntu 20.04</option>
                <option value="5">Linux Ubuntu 18.04</option>
                </select>
                </div>
                </div>
                <div class="box-bottom">
                    <div class="forblank"><input class="form-control inputbox" placeholder="OS version"></input></div>
                    <div class="forbtn"> <button type="button" class="btn btn-primary">Add</button></div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  VM option
                  <span class="box-subtitle">description</span>
                </div>
                <div class="box-body">
                {/* <div class="custom-select"> */}
                <select multiple multiselect-search="true"
                multiselect-hide-x = "false"
                class="select-box">
                <option value="1">Microsoft word</option>
                <option value="2">Hangeul</option>
                <option value="3">Program1</option>
                <option value="4">Program2</option>
                <option value="5">Program3</option>
                </select>
                {/* </div> */}
                </div>
                <div class="box-bottom">
                    <div class="forblank"><input class="form-control inputbox" placeholder="URL"></input></div>
                    <div class="forbtn"> <button type="button" class="btn btn-primary">Add</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  Scenario Title
                  <span class="box-subtitle">description</span>
                </div>
              </div>
              <div class="box-body">
                <input
                  class="form-control inputbox"
                  placeholder="title"
                ></input>
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
                    <textarea class="form-control inputbox" placeholder="description"></textarea>
                </div>
              </div>
              <div class="box-body">
                <textarea
                  class="form-control inputbox"
                  placeholder="title"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
        <div class="col-md-12">
        <div class="wt-box">
            <div class="box-top">
                <div class="box-title">Add Attack Payload
                <span class="box-subtitle">description</span></div>
                </div>
            <div class="box-body">
            <input class="form-control inputbox" placeholder="title"></input>
            <div class="margin-plus"></div>
                    <textarea class="form-control inputbox" placeholder="description"></textarea>
                </div>
                <div class="row bottom-btn">
            <div class="col-md-9"></div>
            <div class="col-md-3"><button class="btn btn-primary pagebtn">Add</button></div>
        </div>
            </div>
        </div>
        </div>
        <div class="row bottom-btn">
          <div class="col-md-9"></div>
          <div class="col-md-3">
            <button class="btn btn-primary pagebtn">Next</button>
          </div>
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
