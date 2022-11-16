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
  return (
    <div className="managetraining">
      <p className="title">manage training</p>
      <div className="grid">
        {dummy.map((d) => (
          <div className="item">
            <p>{d}</p>
            <button onClick={() => navigate(`/admin/edittraining/${d}`)}>
              edit
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/admin/edittraining")}>
        create training
      </button>
    </div>
  );
};

export default ManageTraining;
