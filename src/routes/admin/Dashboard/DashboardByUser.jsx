import { useParams } from "react-router-dom";

import "./styles.scss";

const dummy = ["apt scenario", "pwn scenario", "web scenario"];

const DashboardByUser = () => {
  const { userId } = useParams();
  return (
    <div>
      <p className="title">{userId}</p>
      <div className="scenarios">
        {dummy.map((d) => (
          <div className="item">{d}</div>
        ))}
      </div>
    </div>
  );
};

export default DashboardByUser;
