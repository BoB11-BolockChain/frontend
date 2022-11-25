import React from "react";
import ReactModal from "react-modal";
import ModalBoardCreate from "./ModalBoardCreate";

const BoardModal = ({ isOpen, setModalState, data, ceState, margin }) => {
    return (
        <ReactModal
            ceState={ceState}
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalState({ data: {}, isOpen: false })}
            style={{
                overlay: {
                    position: "fixed",
                    marginLeft: [margin],
                    height: "100%",
                    backgroundcolor: "rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    justifycontent: "center",
                    alignitems: "center",
                },
                content: {
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    right: "15%",
                    bottom: "20%",
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
            <div class="boardmodal">
                {
                    (ceState === "create") ? (
                        <ModalBoardCreate />
                    ) :
                        <table>
                            <tr>
                                <td id="num" colspan="5">{data.num}</td>
                            </tr>
                            <tr>
                                <td id="scenario_title">{data.scenario_title}</td>
                                <td id="divider">|</td>
                                <td id="challenge_title">{data.challenge_title}</td>
                                <td id="divider">|</td>
                                <td id="score">{data.score}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td id="content" colspan="5">
                                    <div>
                                        {(data.content || '').split("\n").map((line) => {
                                            return (
                                                <span>
                                                    {line}
                                                    <br />
                                                </span>
                                            );
                                        })}
                                    </div>
                                </td>
                            </tr>
                        </table>
                }
            </div>
        </ReactModal >
    );
};

export default BoardModal;