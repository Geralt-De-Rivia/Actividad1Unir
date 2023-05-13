import { useState, useEffect } from 'react';

export const useJsonReader = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [url]);

  return data;
}