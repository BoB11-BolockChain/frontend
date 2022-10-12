import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";
import Tr from "src/components/Tr"
import "src/components/Layout/Board.scss"
import BoardModal from "src/components/BoardModal";

const Notifications = () => {
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
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
        <div class="container">
          <header>
            <h1>Notifications</h1>
            <p>{window.sessionStorage.getItem("sessionId")}</p>
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
              <Tr data={data} setModalState={setModalState} />
            </table>
          ) : (
            <p>loading</p>
          )}
          <BoardModal
            isOpen={modalState.isOpen}
            setModalState={setModalState}
            data={modalState.data}
          />
        </div>
      </>
    </Layout>
  );
};

export default Notifications;
