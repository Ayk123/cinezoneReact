import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); //Add loading state
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  useEffect(() => {
    async function fetchMovies() {
      // // Simulating a loading delay of 2 seconds
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setLoading(false); // update loading state after data is fetched
    }
    fetchMovies();
  }, [url]);
  return { data, loading };
};
