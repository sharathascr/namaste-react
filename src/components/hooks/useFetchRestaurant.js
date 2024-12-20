import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchRestaurant = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await axios.get(url);
        // console.log(result.data);
        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { data, loading, error };
};
