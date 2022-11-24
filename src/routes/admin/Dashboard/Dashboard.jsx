import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";

import tempImg from "src/assets/user1.png";
import "./styles.scss";

const Dashboard = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://pdxf.tk:8000/dashboard", {
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
        <div className="x-overflow users">
          <div className="current-users">{data.length} Users online</div>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th>ID</th>
                <th>current state</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={d.id} className="tritem" onClick={() => onClick(d.id)}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={tempImg} alt="user-img" className="user-img" />
                  </td>
                  <td>{d.id}</td>
                  <td>{d.state}</td>
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
