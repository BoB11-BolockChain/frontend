import React, { useState } from "react";

const VmCaller = () => {
  const [docker, setDocker] = useState();
  const [vagrant, setVagrant] = useState();
  const [buttonClicked, setButtonClicked] = useState({
    docker: false,
    vagrant: false,
  });

  const onClickDocker = async () => {
    setButtonClicked({ ...buttonClicked, docker: true });
    const res = await fetch("http://www.pdxf.tk:8000/docker", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: { id: window.sessionStorage.getItem("sessionId") },
    });
    const js = await res.json();
    console.log(js);
    setDocker({ ssh: js.ssh });
  };

  const onClickVagrant = async () => {
    setButtonClicked({ ...buttonClicked, vagrant: true });
    const res = await fetch("http://www.pdxf.tk:8000/vagrant", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: { id: window.sessionStorage.getItem("sessionId") },
    });
    const js = await res.json();
    console.log(js);
    setVagrant({ rdp: js.rdp });
  };

  return (
    <>
      {buttonClicked.docker ? (
        <p>yap!</p>
      ) : (
        <button onClick={onClickDocker}>docker</button>
      )}
      {buttonClicked.vagrant ? (
        <p>yap!</p>
      ) : (
        <button onClick={onClickVagrant}>vagrant</button>
      )}
      <p>docker ssh : "ssh pdxf.tk:{docker?.ssh}"</p>
      <p>vagrant rdp : "mstsc /v:pdxf.tk:{vagrant?.rdp} /f"</p>
    </>
  );
};

export default VmCaller;
