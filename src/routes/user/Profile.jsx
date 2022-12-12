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
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useRef, useState } from 'react';
import { Avatar } from 'antd';




function Profile() {
  const fileInput = useRef(null)
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")

  const onChange = (e) => {
    if(e.target.files[0]){
              setImage(e.target.files[0])
          }else{ //업로드 취소할 시
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
              placeholder="Id"
            />
          </div>
          <div className="flex-row profile-line">
            <span className="profile-value"> E-mail </span>
            <input
              className="profile-input"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex-row profile-line">
            <span className="profile-value"> 소속 </span>
            <input
              className="profile-input"
              name="department"
              placeholder="school/club"
            />
          </div>
          <div className="flex-row">
            <span className="profile-value profile-line"> Comment </span>
            <textarea
            className="profile-input"
            name="comment"
            placeholder="Comment"
          ></textarea>
          </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
          </MDBCol>
          <div className="space-box"></div>
          <button className="pdxf-button">
            Save
          </button>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Profile;
