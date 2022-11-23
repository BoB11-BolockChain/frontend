import { useEffect, useState } from "react";
import BoardModal1 from "src/components/DockerListModal";
import DockerlistTableTr from "src/components/DockerlistTableTr";
import Loading from "src/components/Loading";
import TBody from "src/components/TBody";
import BoardModal from "src/components/VMModal";

const Create_VM = () => {
  const [state, setState] = useState({});
  const onChange = (e) => {
    const { value } = e.target;
    setState({ ...state, docker_name: value });
  };
  const onClick = async (e) => {
    e.preventDefault();
    console.log(state);
    const res = await fetch("http://www.pdxf.tk:8000/makedocker", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    if (res.ok) {
      alert("Docker Create success");
      const js = await res.json();
      console.log(js);
    }
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
        console.log(data);
        setDataLoaded(true);
        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };

    fetchData();
  }, [width]);

  const [modalState1, setModalState1] = useState({ data1: {}, isOpen: false });
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
        console.log(data1);
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
      <BoardModal1
        isOpen={modalState1.isOpen}
        setModalState={setModalState1}
        data={modalState1.data1}
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
                  action="http://www.pdxf.tk:8000/makevm"
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
                  Make New Windows VM
                  <br />
                  <span class="box-subtitle">Make iso file to New VM</span>
                </div>
              </div>
              <div class="box-bottom">
                {dataLoaded ? (
                  <table>
                    <thead>
                      <th>No.</th>
                      <th>FileName</th>
                    </thead>
                    <TBody data={data} setModalState={setModalState} />
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
                  Make New Linux Docker
                  <br />
                  <span class="box-subtitle">ex) ubuntu</span>
                  <img src="\img\linux_ex.png" />
                </div>
              </div>
              <div class="box-bottom">
                <input
                  onChange={onChange}
                  class="form-control inputbox"
                  placeholder="docker Hub Name"
                ></input>
                <div class="forbtn">
                  <button
                    onClick={onClick}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">Windows Running VM</div>
              </div>
              <div class="box-bottom">윈도우 리스트 출력</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="wt-box">
              <div class="box-top">
                <div class="box-title">Linux Running Docker</div>
              </div>
              <div class="box-bottom">
                {dataLoaded1 ? (
                  <table>
                    <thead>
                      <th>IMAGE </th>
                      <th>PORTS </th>
                      <th>STATUS </th>
                      <th>ContainerID</th>
                    </thead>
                    <DockerlistTableTr
                      data={data1}
                      setModalState={setModalState1}
                    />
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
