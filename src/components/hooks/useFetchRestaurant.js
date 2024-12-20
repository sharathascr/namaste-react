import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchRestaurant = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(url);
      // console.log(result.data);
      setData(result.data);
    }
    fetchData();
  }, [url]);
  return data;
};
