import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";
import TableTr from "src/components/TableTr";
import "src/components/Layout/Board.scss";
import BoardModal from "src/components/BoardModal";
import Loading from "src/components/Loading";

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
          </header>
          {dataLoaded ? (
            <table>
              <thead>
                <th>No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Created Date</th>
                <th>Views</th>
              </thead>
              <TableTr data={data} setModalState={setModalState} />
            </table>
          ) : (
            <Loading />
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
