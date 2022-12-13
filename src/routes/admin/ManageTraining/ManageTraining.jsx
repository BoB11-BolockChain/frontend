import { useEffect, useState } from "react";
import { HiOutlineCube, HiOutlineFlag } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const dummy = [
  "window training",
  "linux training",
  "web training",
  "apt training",
];

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
      alert("deleted");
      // swal hae ju say yo
      const newData = [...data];
      newData.filter((d) => d.id !== trainingId);
      setData(newData);
    }
  };

  return (
    <>
      <header>
        <h1>Manage Training</h1>
      </header>
      <div className="managetraining">
        <p class="edit-list">Training List</p>
        <div>
          <button onClick={() => navigate("/admin/edittraining")}>
            <table>
              <tr>
                <td className="create-desc">Create Training</td>
                <td className="create-border" />
                <td className="create-icon">{<HiOutlineFlag />}</td>
              </tr>
            </table>
          </button>
          <button type="button" onClick={() => navigate("/admin/createvm")}>
            <table>
              <td className="create-desc">Create VM</td>
              <td className="create-border" />
              <td className="create-icon">{<HiOutlineCube />}</td>
            </table>
          </button>
        </div>
      </div>
      {data.map((d) => (
        <div className="item">
          <div className="item-title">
            <p>{d.title}</p>
            <p>{d.description}</p>
          </div>
          <button onClick={() => deleteHandler(d.id)}>DELETE</button>
          <button onClick={() => navigate(`/admin/edittraining/${d.id}`)}>
            EDIT
          </button>
        </div>
      ))}
    </>
  );
};

export default ManageTraining;
