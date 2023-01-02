import { useState, useEffect } from 'react';


// connecting frontend to backend
export function useFetch(url: string) {

  const [data, setData] = useState([]);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
  }

  useEffect(() => {
    fetchUrl();
  },);

  return [data];

}
