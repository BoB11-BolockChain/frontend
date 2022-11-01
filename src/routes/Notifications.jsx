import { useEffect, useState } from "react";
import BoardModal from "src/components/BoardModal";
import "src/components/Layout/Board.scss";
import Loading from "src/components/Loading";
import TableTr from "src/components/TableTr";

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
    <>
      <header>
        <h1 className="h2 fw-bold my-4">Notifications</h1>
      </header>
      <div class="container">
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
  );
};

export default Notifications;
