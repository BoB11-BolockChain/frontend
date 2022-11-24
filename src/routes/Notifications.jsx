import { useEffect, useState } from "react";
import BoardModal from "src/components/BoardModal";
import "src/components/Layout/Board.scss";
import Loading from "src/components/Loading";
import TBody from "src/components/TBody";

const Notifications = () => {
  const [width, setWidth] = useState("");
  const [modalState, setModalState] = useState({ data: {}, isOpen: false });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.pdxf.tk:8000/notification");
      if (res.ok) {
        const js = await res.json();
        const windowWidth = window.innerWidth;
        setData(js.data);
        setDataLoaded(true);
        setWidth("270px");
        if (windowWidth < 768) {
          setWidth("80px");
        }
      }
    };

    fetchData();
  }, [width]);

  return (
    <>
      <BoardModal
        isOpen={modalState.isOpen}
        setModalState={setModalState}
        data={modalState.data}
        margin={width}
      />
      <header>
        <h1 className="h2 fw-bold my-4">Notifications</h1>
      </header>
      <div class="board-container">
        {dataLoaded ? (
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Created Date</th>
                <th>Views</th>
              </tr>
            </thead>
            <TBody data={data} setModalState={setModalState} />
          </table>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Notifications;
