import { useEffect, useState } from "react";

const useGetFetch = (url) => {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const jsonBody = await res.json();
        setIsFetched(true);
        setData(jsonBody);
      }
      // error handle : try-catch or res.ok else
    };
    fetchData();
  }, [url]);

  return [isFetched, data];
};

export default useGetFetch;
