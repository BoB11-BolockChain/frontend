import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";

import tempImg from "src/assets/user1.png";
import styles from "./dashboard.module.scss";

// last activity and time
//
const Dashboard = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://pdxf.tk:9000/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const jsonBody = await res.json();
        setIsFetched(true);
        setData(jsonBody);
      } else {
        console.log(res.status);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const onClick = (userId) => {
    navigate(`/admin/dashboard/${userId}`);
  };

  return (
    <>
      <p className="title">Dashboard</p>
      {isFetched ? (
        <div className={`${styles.users}`}>
          <div className={`${styles.currentusers}`}>
            {data.length} Users online
          </div>
          <table className={styles.dashboard}>
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th>ID</th>
                <th>State</th>
                {/* online, some time ago */}
                <th>Last Solution</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={d.id} className="tritem" onClick={() => onClick(d.id)}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={tempImg}
                      alt="user profile"
                      className={`${styles.userimg}`}
                    />
                  </td>
                  <td>{d.id}</td>
                  <td>{d.lastSolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Dashboard;
