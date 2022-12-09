import { useEffect, useState } from "react";
import DockerlistTableTr from "src/components/CreateVM_TB/DockerlistTableTr";
import WindowslistTableTr from "src/components/CreateVM_TB/WindowslistTableTr";
import WindowsVMlistTableTr from "src/components/CreateVM_TB/WindowsVMlistTableTr";
import Windowsqcow2listTableTr from "src/components/CreateVM_TB/Windowsqcow2listTableTr";
import Dropdown from "src/components/Dropdown";
import Loading from "src/components/Loading";
import DockerimagelistTableTr from "src/components/CreateVM_TB/DockerimagelistTableTr";
import Swal from "sweetalert2";

const Create_VM = () => {
  const seldata = ["Windows", "Linux"];
  const [selected, setSelected] = useState(window.sessionStorage.getItem("os"));

  // window.sessionStorage.setItem("os", selected);
  // setSelected("Windows");
  // setSelected("Linux");
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

  const [dataLoaded3, setDataLoaded3] = useState(false);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/listwinvm");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData3(js.data);
        setDataLoaded3(true);
        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };
    fetchData();
  }, [width]);

  const [dataLoaded4, setDataLoaded4] = useState(false);
  const [data4, setData4] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/qcowlist");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData4(js.data);
        setDataLoaded4(true);
        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };

    fetchData();
  }, [width]);

  const [name, setName] = useState([]);
  useEffect(() => {
    const fetchData2 = async () => {
      const res2 = await fetch("http://www.pdxf.tk:3000/startqcow2");
      if(res2.ok) {
        const filename = await res2.json();
        setName(filename.value)
        console.log(filename)
      }
    }
    fetchData2();
  }, [name])

  return (
    <>
      <script src="multiselect-dropdown.js"></script>
      <h1>Create VM</h1>

      <div className="col-md-6">
        <div className="wt-box">
          <div className="box-top">
            <div className="box-title">
              Upload your Windows or Linux Docker file
              <span className="box-subtitle">only .iso .tar</span>
            </div>
          </div>
          <br />
          <div className="box-body flex">
            <form
              action="http://www.pdxf.tk:8000/makevm"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                className="form"
                type="file"
                id="upload_file"
                name="upload_file"
              />
            </form>
            <button type="submit" name="upload" className=" btn-primary">
              Upload
            </button>
          </div>
        </div>
      </div>
      <Dropdown
        defaultValue={window.sessionStorage.getItem("os")}
        setData={(d) => {
          window.sessionStorage.setItem("os", d);
          setSelected(d);
        }}
        options={seldata}
      />

      <div className="margin-box"></div>
      {selected === "Linux" ? (
        <>
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Make New Linux Docker
                  <span className="box-subtitle">Copy in Docker Hub</span>
                  <div className="margin-10"></div>
                  <img src="\img\linux_ex.png" alt="profile" />
                </div>
              </div>
              <div className="margin-10"></div>
              <div className="box-body flex">
                <div className="forbtn">
                  <button
                    onClick={EditDockerName}
                    type="button"
                    className="btn-primary docker-btn"
                  >
                    Click and Make your Linux Docker
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Linux Running Docker
                  <span className="box-subtitle">
                    Default Docker Password : pdxf
                  </span>
                </div>
              </div>
              <div className="margin-10"></div>
              <div className="box-table">
                {dataLoaded1 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>ContainerID</th>
                        <th>IMAGE </th>
                        <th>STATUS </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
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
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">Linux Docker Images list</div>
              </div>
              <div className="margin-10"></div>
              <div className="box-table">
                {dataLoaded2 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>REPOSITORY:TAG</th>
                        <th>IMAGE ID</th>
                        <th>CREATED</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
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
        </>
      ) : (
        <>
          <div className="col-md-6">
            <div className="wt-box">
              <div className="box-top">
                <div className="box-title">
                  Windows Running VM
                  <span className="box-subtitle">
                    Default VM Password : pdxf
                  </span>
                </div>
              </div>
              <div className="margin-10"></div>
              <div className="box-table">
                {dataLoaded3 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Port</th>
                        <th>VM Name</th>
                        <th>State</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <WindowsVMlistTableTr data={data3} name={name}/>
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
                <div className="box-title">Windows VM list</div>
              </div>
              <div className="margin-10"></div>
              <div className="box-table">
                {dataLoaded4 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>qcow2 Name</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <Windowsqcow2listTableTr data={data4} />
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
                <div className="box-title">Windows ISO images list</div>
              </div>
              <div className="margin-10"></div>
              <div className="box-table">
                {dataLoaded ? (
                  <table>
                    <thead>
                      <tr>
                        <th>ISO Name</th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <WindowslistTableTr data={data} />
                  </table>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Create_VM;
