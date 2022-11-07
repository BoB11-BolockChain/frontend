import "bootstrap/dist/css/bootstrap.min.css";
import CreateChallenge from "src/routes/admin/CreateChallenge";

const CreateTraining = () => {
  return (
    
    <>
      <div class="Title">
        <h2>Create Trainging</h2>
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
              <div class="box-body">
              hi
              </div>
              <div class="box-bottom">
                <div class="forblank">
                  <input
                    class="form-control inputbox"
                    placeholder="title"
                  ></input>
                </div>
                <div class="forbtn">
                  {" "}
                  <button type="button" class="btn btn-primary">Add</button>
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
              </div>
              <div class="box-body">
                <div>select</div>
              </div>
              <div class="box-bottom">
                <div class="forblank">
                  <input
                    class="form-control inputbox"
                    placeholder="title"
                  ></input>
                </div>
                <div class="forbtn">
                  {/* {" "} */}
                  <button type="button" class="btn btn-primary">
                    Add
                  </button>
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
      <script src="multiselect-dropdown.js"></script>
    </>
  );
};

export default CreateTraining;
