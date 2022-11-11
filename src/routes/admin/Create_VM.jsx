import React, { useEffect, useState } from "react";
import BoardModal from "src/components/VMModal";
import Loading from "src/components/Loading";
import TableTr from "src/components/TableTr";

const Create_VM = () => {
  const [width, setWidth] = useState("");
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/makeqcow");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData(js.data);
        setDataLoaded(true);
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
      <script src="multiselect-dropdown.js"></script>
      <div class="Title">
        <h2>Create VM</h2>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  Upload your Windows or Linux Docker file
                  <span class="box-subtitle">only .iso .tar</span>
                </div>
              </div>
              <br />
              <div class="box-body">
                <form
                  action="http://www.pdxf.tk:8000/uploads"
                  method="POST"
                  accept-charset="utf-8"
                  enctype="multipart/form-data"
                >
                  <input type="file" id="upload_file" name="upload_file" />
                  <button type="submit" name="upload" class="btn btn-primary">
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  Windows Setting
                  <span class="box-subtitle">.iso -> .qcow2</span>
                </div>
              </div>
              <div class="box-bottom">
                {dataLoaded ? (
                  <table>
                    <thead>
                      <th>No.</th>
                      <th>FileName</th>
                    </thead>
                    <TableTr data={data} setModalState={setModalState} />
                  </table>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">
                  Linux Setting
                  <span class="box-subtitle">starting docker file</span>
                </div>
              </div>
              <div class="box-bottom">
                여기에 드랍다운
                <div class="forbtn">
                  <button type="button" class="btn btn-primary">
                    Execute
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_VM;
