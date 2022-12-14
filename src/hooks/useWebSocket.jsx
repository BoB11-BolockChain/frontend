const { useState, useEffect, useRef } = require("react");

const useWebSocket = (url) => {
  const connRef = useRef();
  const [msg, setMsg] = useState({});

  useEffect(() => {
    const conn = new WebSocket(url);
    conn.onopen = (e) => {
      console.log("websocket connected");
    };
    conn.onmessage = (e) => {
      const parsed = JSON.parse(e.data);
      setMsg(parsed);
      conn.send("ping");
      console.log("websocket ping pong");
    };
    conn.onclose = (e) => {
      console.log("websocket closed from server");
    };
    conn.onerror = (e) => {
      console.log(e);
    };

    connRef.current = conn;

    // study cleanup
    return () => {
      console.log("websocket cleanup");
      connRef.current.close();
      conn.close();
    };
  }, [url]);

  return msg;
};

export default useWebSocket;
