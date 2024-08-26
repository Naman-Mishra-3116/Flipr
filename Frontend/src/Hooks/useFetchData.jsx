// import axios from "axios";
// import { useEffect, useState } from "react";
// import { server } from "./../Utils/server";

// export const useFetchData = function (path) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState([]);

//   console.log("Server is :", server);
//   useEffect(() => {
//     const fetchData = async function () {
//       setLoading(true);
//       try {
//         const resp = await axios.get(`${server}${path}`);

//         console.log(resp.data);
//         const data = resp.data.data;
//         console.log(data);
//         setData(data);
//       } catch (error) {
//         console.clear();
//         console.log(error.response);
//         console.log(error.response);
//         console.log("Error in fetching data ", path);
//         setError(error.response || "Error in Fetching Data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return {
//     loading,
//     error,
//     data,
//   };
// };

import { useEffect, useState } from "react";
import { server } from "./../Utils/server";

export const useFetchData = function (path) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  console.log("Server is :", server);

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true);
      try {
        const response = await fetch(`${server}${path}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }
        const result = await response.json();

        console.log(result);
        const data = result.data;
        console.log(data);
        setData(data);
      } catch (error) {
        console.clear();
        console.log("Error in fetching data ", path);
        setError(error.message || "Error in Fetching Data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [path]); // added path as a dependency

  return {
    loading,
    error,
    data,
  };
};
