import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      // loading on
      setIsFetching(true);
      try {
        const data = await fetchFunction();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message,
        });
      }
      // loading off
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return { isFetching, error, fetchedData, setFetchedData };
}
