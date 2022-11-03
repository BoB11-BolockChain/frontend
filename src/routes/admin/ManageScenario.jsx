import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummy = [
  "chall1",
  "chfd2",
  "chfdafd3",
  "chfdsafda4",
  "chrewqr5",
  "chouoi6",
  "ewrup7",
];

const ManageScenario = () => {
  const navigate = useNavigate();

  const [scenarios, setScenarios] = useState(dummy);

  const removeHandler = (data) => {
    setScenarios((prev) => prev.filter((e) => e !== data));
  };

  return (
    <>
      <p className="text-2xl mt-4">Manage Scenarios</p>
      <div className="flex flex-row flex-wrap gap-2 justify-between">
        {scenarios.map((d) => (
          // make component (dup in challenges)
          <div
            key={d}
            className="basis-1/4 flex flex-col border-2 rounded-lg border-pdxf-pink"
          >
            <p className="text-center">{d}</p>
            <div className="flex">
              <button onClick={() => navigate(`/admin/editscenario/${d}`)}>
                <Edit />
              </button>
              <button onClick={() => removeHandler(d)}>
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-1/4 m-4 self-center border-2 rounded-lg border-pdxf-pink"
        onClick={() => navigate("/admin/editscenario")}
      >
        create scenario
      </button>
    </>
  );
};

export default ManageScenario;
