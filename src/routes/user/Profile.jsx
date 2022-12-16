import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useEffect, useRef, useState } from "react";
import { Avatar } from "antd";
import Swal from "sweetalert2";
import Loading from "src/components/Loading";

function Profile() {
  const sessionId = window.sessionStorage.getItem("sessionId");
  const navigate = useNavigate();
  const [fatched, setFatched] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/profilepage", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Id: sessionId,
        }),
      });
      if (res.ok) {
        const js = await res.json();
        setData(js);
        console.log(data);
        setFatched(true);
      }
    };
    fetchData();
    console.log(data);
  }, [fatched]);

  const saveProfile = async () => {
    console.log(data);

    var Org = "";
    if (
      typeof data.Org.String === "undefined" ||
      data.Org.String === null ||
      data.Org.String === ""
    ) {
      Org = data.Org;
    } else {
      Org = data.Org.String;
    }

    var Comment = "";
    if (
      typeof data.Comment.String === "undefined" ||
      data.Comment.String === null ||
      data.Comment.String === ""
    ) {
      Comment = data.Comment;
    } else {
      Comment = data.Comment.String;
    }
    const res = await fetch(`http://pdxf.tk:8000/profileSave`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: data.Id,
        Email: data.Email,
        Org: Org,
        Comment: Comment,
      }),
    });
    // const res1 = await fetch(`http://www.pdxf.tk:8000/uploadimg`, {
    //   method: "POST",
    //   headers: {
    //     encType: "multipart/form-data",
    //   },
    // });
    // if (res.ok) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Profile Save",
    //     confirmButtonText: "OK",
    //     preConfirm: () => {
    //       navigate("/");
    //     },
    //   });
    // }
  };

  const [files, setFiles] = useState("");
  const fileInput = useRef(null);
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const onChange = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(file);

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      {fatched ? (
        <>
          <section>
            <MDBContainer className="py-5">
              <MDBRow>
                <Avatar
                  src={Image}
                  style={{ margin: "20px" }}
                  size={230}
                  icon={<UserOutlined />}
                  onClick={() => {
                    fileInput.current.click();
                  }}
                />

                {/* <form
                  action="http://www.pdxf.tk:8000/uploadimg"
                  method="POST"
                  encType="multipart/form-data"
                > */}
                <input
                  type="file"
                  id="upfiles"
                  name="upfiles"
                  style={{ display: "none" }}
                  accept="image/jpg,impge/png,image/jpeg"
                  // name="profile_img"
                  onChange={onChange}
                  ref={fileInput}
                />
                {/* <button type="submit" className="pdxf-button">
                    Upload
                  </button>
                </form> */}
                <br />
                <MDBCol lg="4">
                  <MDBCard className="mb-4 mb-lg-0">
                    <MDBCardBody className="p-0 profile-box">
                      <div className="flex-row profile-line">
                        <span className="profile-value"> ID </span>
                        <input
                          className="profile-input"
                          name="id"
                          value={data.Id}
                          placeholder="Id"
                          readOnly
                        />
                      </div>
                      <div className="flex-row profile-line">
                        <span className="profile-value"> E-mail </span>
                        <div style={{ backgroundColor: 808080 }}>
                          {/*여기 왜 안됨 아오*/}
                          <input
                            className="profile-input"
                            name="email"
                            value={data.Email}
                            placeholder="Email"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="flex-row profile-line">
                        <span className="profile-value"> 소속 </span>
                        <input
                          className="profile-input"
                          name="department"
                          value={data.Org.String}
                          onChange={(e) => {
                            setData({ ...data, Org: e.target.value });
                          }}
                          placeholder="school/club"
                        />
                      </div>
                      <div className="flex-row">
                        <span className="profile-value profile-line">
                          Comment
                        </span>
                        <textarea
                          className="profile-input"
                          name="comment"
                          value={data.Comment.String}
                          onChange={(e) => {
                            setData({ ...data, Comment: e.target.value });
                          }}
                          placeholder="Comment"
                        ></textarea>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="8"></MDBCol>
                <div className="space-box"></div>
                <button
                  type="submit"
                  className="pdxf-button"
                  onClick={saveProfile}
                >
                  Save
                </button>
                {/* </form> */}
              </MDBRow>
            </MDBContainer>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Profile;
