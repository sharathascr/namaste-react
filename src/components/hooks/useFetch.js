import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, [url]);
  return data;
};
