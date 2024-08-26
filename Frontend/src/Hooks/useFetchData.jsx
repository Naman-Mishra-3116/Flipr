import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "./../Utils/server";

export const useFetchData = function (path) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  console.log("Server is :", server);
  useEffect(() => {
    const fetchData = async function () {
      setLoading(true);
      try {
        const resp = await axios.get(`${server}${path}`);
        const data = resp.data.data;
        setData(data);
      } catch (error) {
        console.clear();
        console.log(error.response);
        console.log(error.resonse);
        console.log("Error in fetching data ", path);
        setError(error.response.data.message || "Error in Fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
  };
};
