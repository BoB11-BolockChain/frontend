import React from "react";
import ReactModal from "react-modal";

const BoardModal = ({ isOpen, setModalState, data }) => {
    return (
        <ReactModal
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
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
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
                <table>
                    <tr>
                        <td colspan="3">{data.title}</td>
                    </tr>
                    <tr>
                        <td>{data.author}</td>
                        <td>{data.cdate}</td>
                        <th>조회수: {data.views}</th>
                    </tr>
                    <tr>
                        <td colspan="3">{data.content}</td>
                    </tr>
                </table>
            </div>
        </ReactModal>
    );
};

export default BoardModal;