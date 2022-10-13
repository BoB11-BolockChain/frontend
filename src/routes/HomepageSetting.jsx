import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";
import Tr from "src/components/Tr"
import "src/components/Layout/Board.scss"
import BoardModal from "src/components/BoardModal";

const HomepageSetting = () => {
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const admin = 1;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/notification");
      if (res.ok) {
        const js = await res.json();
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
            <h1>HomepageSetting</h1>
          </header>
          {dataLoaded ? (
            <table>
              <thead>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>작성일</th>
                <th>조회수</th>
                <th>수정</th>
                <th>삭제</th>
              </thead>
              <Tr data={data} setModalState={setModalState} handleRemove={handleRemove} admin={admin} />
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
const handleRemove = (removeData) => {
  console.log(removeData);
  const fetchData = async () => {
    const res = await fetch("http://www.pdxf.tk:8000/notification", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          num: removeData.num,
          crud: "Remove"
        }
      ),
    });
    if (res.ok) {
      // const js = await res.json();
      // setData(js.data);
      // setDataLoaded(true);
    }
  };

  fetchData();
}
export default HomepageSetting;
