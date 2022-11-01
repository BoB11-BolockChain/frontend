import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";
import TableTr from "src/components/TableTr"
import "src/components/Layout/Board.scss"
import BoardModal from "src/components/BoardModal";

const HomepageSetting = () => {
  const [modalState, setModalState] = useState({ data: {}, isOpen: false, ceState: "" });
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
    <>
      <div class="container">
        <header>
          <h1>HomepageSetting</h1>
        </header>
        {dataLoaded ? (
          <>
            <table>
              <thead>
                <th>No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Created Date</th>
                <th>Views</th>
                <th>Edit</th>
                <th>Remove</th>
              </thead>
              <TableTr data={data} setModalState={setModalState} handleRemove={handleRemove} admin={admin} />
            </table>
            <button onClick={() => setModalState({ data: data, isOpen: true, ceState: "create" })}>글쓰기</button>
          </>
        ) : (
          <p>loading</p>
        )}
        <BoardModal
          isOpen={modalState.isOpen}
          setModalState={setModalState}
          data={modalState.data}
          ceState={modalState.ceState}
        />
      </div>
    </>
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
      window.location.reload();
    }
  };

  fetchData();
}

export default HomepageSetting;
