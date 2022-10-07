import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";

const Notifications = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/notification");
      if (res.ok) {
        const js = await res.json();
        console.log(js);
        setData(js.data);
        setDataLoaded(true);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <>
        <header>
          <h1>Notifications</h1>
        </header>
        {dataLoaded ? (
          <table>
            <thead>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
              <th>조회수</th>
            </thead>
            <tbody>
              {
                data.map((d) => (
                  <>
                    <tr>
                      <td>{d.num}</td>
                      <td>{d.title}</td>
                      <td>{d.author}</td>
                      <td>{d.cdate}</td>
                      <td>{d.views}</td>
                    </tr>
                  </>
                ))
              }
            </tbody>
          </table>
        ) : (
          <p>loading</p>
        )}
      </>
    </Layout>
  );
};

export default Notifications;
