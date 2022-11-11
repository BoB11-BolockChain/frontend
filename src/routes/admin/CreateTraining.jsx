import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "src/components/Dropdown";
import CreateChallenge from "src/routes/admin/CreateChallenge";

const CreateTraining = () => {
  return (
    <>
      <div class="Title">
        <h2>Create Training</h2>
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
              </div>
              <div class="box-body"></div>
              <div class="box-bottom">
                <div class="forblank">
                  <input
                    class="form-control inputbox"
                    placeholder="write OS version"
                  ></input>
                </div>
                <div class="forbtn">
                  {" "}
                  <button type="button" class="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
              {/* <p>ex: Ubuntu 22.04</p> */}
            </div>
          </div>
          <div class="col-md-6">
            <div class="wt-box">
              <p className="box-title">vm option</p>
              <Dropdown />
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
                <div class="box-title">
                  Scenario Description
                  <span class="box-subtitle">description</span>
                </div>
              </div>
              <div class="box-body">
                <textarea
                  class="form-control inputbox"
                  placeholder="description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateChallenge />
      <br />
      <div class="container">
        <div class="row bottom-btn">
          <div class="col-md-9"></div>
          <div class="col-md-3">
            <button class="btn btn-primary pagebtn">Create Training</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTraining;
