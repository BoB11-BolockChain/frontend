import { useEffect, useState } from "react";
import BoardModal from "src/components/BoardModal";
import "src/components/Layout/Board.scss";
import TBody from "src/components/TBody";

const HomepageSetting = () => {
  const [width, setWidth] = useState("");
  const [modalState, setModalState] = useState({
    data: {},
    isOpen: false,
    ceState: "",
  });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([]);
  const admin = 1;

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
  }, [data, width]);

  return (
    <>
      <header>
        <h1 className="h2 fw-bold my-4">Homepage Setting</h1>
      </header>
      <div class="board-container">
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
              <TBody
                data={data}
                setModalState={setModalState}
                handleRemove={handleRemove}
                admin={admin}
              />
            </table>
            <button
              onClick={() =>
                setModalState({ data: data, isOpen: true, ceState: "create" })
              }
            >
              글쓰기
            </button>
          </>
        ) : (
          <p>loading</p>
        )}
        <BoardModal
          isOpen={modalState.isOpen}
          setModalState={setModalState}
          data={modalState.data}
          ceState={modalState.ceState}
          margin={width}
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
      body: JSON.stringify({
        num: removeData.num,
        crud: "Remove",
      }),
    });
    if (res.ok) {
      window.location.reload();
    }
  };

  fetchData();
};

export default HomepageSetting;
