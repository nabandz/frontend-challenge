import { useState, useCallback } from "react";

const useCatServices = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_API = "https://api.thecatapi.com/v1/images/search";
  const API_KEY =
    "api_key=live_pRuh1DXcSobyuOIO3FfhGTjrTpbFks1By04uY534rkYEOuBoZx22eCw9ioCTb2P3";
  const BASE_PAGE = 1;

  const fetchData = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    setLoading(true);

    try {
      const response = await fetch(url, { method, body, headers });
      const resultData = await response.json();

      if (response.ok) {
        setData((data) => [...data, ...resultData]);
        console.log(data);
      } else {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setData([]);
      throw error;
    }
  };

  const getCatsData = async (page = BASE_PAGE) => {
    setLoading(true);
    await fetchData(`${BASE_API}?limit=15&page=${page}&${API_KEY}`);
  };

  const clearError = useCallback(() => setError(null), []);

  return {
    data,
    isLoading,
    error,
    getCatsData,
    clearError,
  };
};

export default useCatServices;
