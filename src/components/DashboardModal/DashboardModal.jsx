import ReactModal from "react-modal";

const dummy = [
  { title: "challenge1", solved: true },
  { title: "challenge1", solved: true },
  { title: "challenge1", solved: false },
  { title: "challenge1", solved: false },
];

const DashboardModal = ({ isOpen, setModalState, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setModalState({ data: {}, isOpen: false })}
      style={{ content: { marginLeft: "300px" } }}
    >
      <p>challenge results</p>
      <div className="scenarios">
        {dummy.map((d) => (
          //make css component -> griditem
          <div className={`item ${d.solved ? "solved" : "notsolved"}`}>
            <p>{d.title}</p>
          </div>
        ))}
      </div>
      <div>incident response for this scenario</div>
    </ReactModal>
  );
};

export default DashboardModal;
