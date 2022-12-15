import { useEffect, useState } from "react";
import { HiOutlineCube, HiOutlineFlag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./styles.scss";

const ManageTraining = () => {
  const navigate = useNavigate();

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://pdxf.tk:8000/gettrainings", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const jsonObj = await res.json();
        setIsFetched(true);
        setData(jsonObj);
      } else {
        console.log(res.status, res.statusText);
      }
    };
    fetchData();
  }, []);

  const deleteHandler = async (trainingId) => {
    Swal.fire({
      title: "Delete Training?",
      text: "you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#808080",
      confirmButtonText: "Yes, Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `http://pdxf.tk:8000/deletetraining?trainingId=${trainingId}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (res.ok) {
          const newData = [...data];
          newData.filter((d) => d.id !== trainingId);
          setData(newData);
          Swal.fire({
            icon: "success",
            title: "Training Delete!!.",
            confirmButtonText: "OK",
            preConfirm: () => {
              window.location.reload();
            },
          });
        }
      }
    });
  };
  return (
    <>
      <header>
        <h1>Manage Training</h1>
      </header>
      <div className="managetraining">
        <p className="edit-list">Training List</p>
        <div>
          <button onClick={() => navigate("/admin/edittraining")}>
            <table>
              <tbody>
                <tr>
                  <td className="create-desc">Create Training</td>
                  <td className="create-border" />
                  <td className="create-icon">{<HiOutlineFlag />}</td>
                </tr>
              </tbody>
            </table>
          </button>
          <button type="button" onClick={() => navigate("/admin/createvm")}>
            <table>
              <tbody>
                <tr>
                  <td className="create-desc">Create VM</td>
                  <td className="create-border" />
                  <td className="create-icon">{<HiOutlineCube />}</td>
                </tr>
              </tbody>
            </table>
          </button>
        </div>
      </div>
      {data.map((d, i) => (
        <div key={i} className="item">
          <div className="item-title">
            <p>{d.title}</p>
          </div>
          <div className="item-des">
            <div className="des-box">{d.description}</div>
          </div>
          <div className="item-btn">
            <button className="edit-btn" onClick={() => navigate(`/admin/edittraining/${d.id}`)}>
              EDIT
            </button>
            <button className="delete-btn" onClick={() => deleteHandler(d.id)}>DELETE</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ManageTraining;
