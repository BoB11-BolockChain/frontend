import React from "react";
import ReactModal from "react-modal";
import ModalBoardCreate from "./ModalBoardCreate";
import ModalBoardEdit from "./ModalBoardEdit";

const BoardModal = ({ isOpen, setModalState, data, ceState }) => {
    return (
        <ReactModal
            ceState={ceState}
            isOpen={isOpen}
            marginLeft={"300px"}
            onRequestClose={() => setModalState({ data: {}, isOpen: false })}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundcolor: "rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    justifycontent: "center",
                    alignitems: "center",
                },
                content: {
                    position: "absolute",
                    top: "25%",
                    left: "400px",
                    right: "15%",
                    bottom: "25%",
                    boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.3)",
                    border: "0px",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "0px",
                    textalign: "center",
                    verticalalign: "middle",
                    textAlign: "center",
                },
            }}
        >
            <div style={{
                marginLeft: "300px"
            }}>

            </div>
            <div class="modal">
                {
                    (ceState === "create") ? (
                        <ModalBoardCreate />
                    ) : ((ceState === "edit") ? (
                        <ModalBoardEdit data={data} />
                    ) : (
                        <table>
                            <tr>
                                <td id="title" colspan="5">{data.title}</td>
                            </tr>
                            <tr>
                                <td id="author">{data.author}</td>
                                <td id="divider">|</td>
                                <td id="date">{data.cdate}</td>
                                <td></td>
                                <td id="view">조회수: {data.views}</td>
                            </tr>
                            <tr>
                                <td id="content" colspan="5">{data.content}</td>
                            </tr>
                        </table>
                    ))}
            </div>
        </ReactModal>
    );
};

export default BoardModal;