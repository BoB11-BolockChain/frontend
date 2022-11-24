import { useEffect, useState } from "react";
import DockerlistTableTr from "src/components/CreateVM_TB/DockerlistTableTr";
import Loading from "src/components/Loading";
import TBody from "src/components/TBody";
import BoardModal from "src/components/CreateVM_TB/VMModal";
import DockerimagelistTableTr from "src/components/CreateVM_TB/DockerimagelistTableTr";
import Swal from "sweetalert2";

const Create_VM = () => {
  const EditDockerName = async (e) => {
    Swal.fire({
      title: "Submit Docker Image name",
      text: 'Input "ubuntu or debian"',
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Create!!",
      showLoaderOnConfirm: true,
      preConfirm: async (dockerid) => {
        const sdata = { docker_name: dockerid };
        console.log(sdata);
        e.preventDefault();
        const res = await fetch("http://www.pdxf.tk:8000/makedocker", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sdata),
        });
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "Docker Create Success.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      },
    });
  };

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

  const [dataLoaded1, setDataLoaded1] = useState(false);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/dockerlist");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData1(js.data);
        setDataLoaded1(true);
        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };

    fetchData();
  }, [width]);

  const [dataLoaded2, setDataLoaded2] = useState(false);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/dockerimagelist");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData2(js.data);
        setDataLoaded2(true);
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
      <div className="Title">
        <h2>Create VM</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Upload your Windows or Linux Docker file
                  <span className="box-subtitle">only .iso .tar</span>
                </div>
              </div>
              <br />
              <div className="box-body">
                <form
                  action="http://www.pdxf.tk:8000/makevm"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <input type="file" id="upload_file" name="upload_file" />
                  <button
                    type="submit"
                    name="upload"
                    className="btn btn-primary"
                  >
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Make New Windows VM
                  <br />
                  <span className="box-subtitle">Make iso file to New VM</span>
                </div>
              </div>
              <div className="box-bottom">
                {dataLoaded ? (
                  <table>
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>FileName</th>
                      </tr>
                    </thead>
                    <TBody data={data} setModalState={setModalState} />
                  </table>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Make New Linux Docker
                  <br />
                  <span className="box-subtitle">Copy in Docker Hub</span>
                  <img src="\img\linux_ex.png" />
                </div>
              </div>
              <div className="box-bottom">
                <div className="forbtn">
                  <button
                    onClick={EditDockerName}
                    type="button"
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">Windows Running VM</div>
              </div>
              <div className="box-bottom">윈도우 리스트 출력</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Linux Running Docker
                  <br />
                  <span className="box-subtitle">
                    Default Docker Password : root
                  </span>
                </div>
              </div>
              <div className="box-bottom">
                {dataLoaded1 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>ContainerID</th>
                        <th>IMAGE </th>
                        <th>PORTS </th>
                        <th>STATUS </th>
                        <th>info</th>
                      </tr>
                    </thead>
                    <DockerlistTableTr data={data1} />
                  </table>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">Windows Images List</div>
              </div>
              <div className="box-bottom">윈도우 이미지 리스트 출력</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">Linux Docker Images list</div>
              </div>
              <div className="box-bottom">
                {dataLoaded2 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>REPOSITORY:TAG</th>
                        <th>IMAGE ID</th>
                        <th>CREATED</th>
                        <th>info</th>
                      </tr>
                    </thead>
                    <DockerimagelistTableTr data={data2} />
                  </table>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_VM;