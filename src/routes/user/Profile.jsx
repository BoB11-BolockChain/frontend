import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import useInputState from "src/hooks/useInputState";
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useEffect, useRef, useState } from 'react';
import { Avatar } from 'antd';




function Profile() {
  const [input, setState, onChange2] = useInputState();
  useEffect(() => {
    // const Id = Id
    const fetchData = async() => {
      fetch(`http://pdxf.tk:3000/profilepage`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // id: sessionId,
        }),
    });}
});

  const saveProfile = async () => {
    const res = await fetch(`http://pdxf.tk:3000/profileSave`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json", 
        },
      body: JSON.stringify({
        id: "",
        email: "",
        org: "",
        comment: "",
      }),
      });
    }


  const fileInput = useRef(null)
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")

  const onChange = (e) => {
    if(e.target.files[0]){
              setImage(e.target.files[0])
          }else{
              setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
              return
          }
    //화면에 프로필 사진 표시
          const reader = new FileReader();
          reader.onload = () => {
              if(reader.readyState === 2){
                  setImage(reader.result)
              }
          }
          reader.readAsDataURL(e.target.files[0])
      }
  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>
          <Avatar 
        src={Image} 
        style={{margin:'20px'}} 
        size={230}
        icon={<UserOutlined/>} 
        onClick={()=>{fileInput.current.click()}}/>
         <input 
 	      type='file' 
    	  style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChange}
        ref={fileInput}/>
        
          <MDBCol lg="4">
            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0 profile-box">
              <div className="flex-row profile-line">
            <span className="profile-value"> ID </span>
            <input
              className="profile-input"
              name="id"
              // value={user.id}
              placeholder="Id"
            />
          </div>
          <div className="flex-row profile-line">
            <span className="profile-value"> E-mail </span>
            <input
              className="profile-input"
              name="email"
              // value={user.email}
              placeholder="Email"
            />
          </div>
          <div className="flex-row profile-line">
            <span className="profile-value"> 소속 </span>
            <input
              className="profile-input"
              name="department"
              onChange={onChange2}
              placeholder="school/club"
            />
          </div>
          <div className="flex-row">
            <span className="profile-value profile-line"> Comment </span>
            <textarea
            className="profile-input"
            name="comment"
            onChange={onChange2}
            placeholder="Comment"
          ></textarea>
          </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
          </MDBCol>
          <div className="space-box"></div>
          <button className="pdxf-button" onClick={saveProfile}>
            Save
          </button>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Profile;
