import React, { useState } from "react";

const CreateOperationButton = () => {
  const [dummy, setDummy] = useState("");
  const onClick = async () => {
    const res = await fetch("http://www.pdxf.tk:8000/createoperation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "runtest",
        adversary: { adversary_id: "f70bab6a-2266-4106-bd33-3f3c480321d9" },
        planner: { id: "aaa7c857-37a0-4c4a-85f7-4e9f7f30e31a" },
        source: { id: "ed32b9c3-9593-4c33-b0db-e2007315096b" },
        group: "test11",
        state: "running",
      }),
    });
    if (res.ok) {
      const jsonBody = await res.json();
      setDummy(jsonBody.id);
    }
  };

  return (
    <>
      <p>{dummy}</p>
      <button onClick={onClick}>create operation</button>
    </>
  );
};

export default CreateOperationButton;
