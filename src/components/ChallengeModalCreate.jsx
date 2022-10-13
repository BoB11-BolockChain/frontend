import React, { useEffect, useState } from "react";
import Layout from "src/components/Layout/Layout";

const Profile = () => {
  // const [id, setId] = useState("");
  // const body = { sessionId: window.sessionStorage.getItem("sessionId") };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://www.pdxf.tk:8000/profile", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     const js = await res.json();
  //     console.log(js.body.userid);
  //   };
  //   fetchData();
  // });
  const [docker, setDocker] = useState({});
  const [vagrant, setVagrant] = useState({});

  const onClickDocker = async () => {
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
    <Layout>
      <button onClick={onClickDocker}>docker</button>
      <button onClick={onClickVagrant}>vag</button>
      <p>docker ssh : "ssh -p {docker.ssh} root@pdxf.tk"</p>
      <p>docker ID : root, PW : root</p>
      <p>vagrant rdp : "mstsc /v:pdxf.tk:{vagrant.rdp} /f"</p>
      <p>vagrant ID : vagrant, PW : vagrant</p>
    </Layout>
  );
};

export default Profile;
