import { useNavigate } from "react-router-dom";
import { HiOutlineFlag, HiOutlineCube } from "react-icons/hi";
import "./styles.scss";

const dummy = [
  "window training",
  "linux training",
  "web training",
  "apt training",
];

const ManageTraining = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1 className="h2 fw-bold my-4">Manage Training</h1>
      </header>
      <div className="managetraining">
        <p class="edit-list">Training List</p>
        <div>
          <button onClick={() => navigate("/admin/edittraining")}>
            <table>
              <tr>
                <td class="create-desc">Create Training</td>
                <td class="create-border" />
                <td class="create-icon">{<HiOutlineFlag />}</td>
              </tr>
            </table>
          </button>
          <button type="button" onClick={() => navigate("/admin/createvm")}>
            <table>
              <td class="create-desc">Create VM</td>
              <td class="create-border" />
              <td class="create-icon">{<HiOutlineCube />}</td>
            </table>
          </button>
        </div>
      </div>
      {dummy.map((d) => (
        <div className="item">
          <div className="item-title">
            <p>{d}</p>
          </div>
          <button onClick={() => navigate(`/admin/edittraining/${d}`)}>
            EDIT
          </button>
        </div>
      ))}
    </>
  );
};

export default ManageTraining;
