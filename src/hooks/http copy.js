import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchData, setFetchData] = useState(null);

  //   fetch("https://swapi.co/api/people")

  useEffect(() => {
    setIsLoading(true);
    console.log("Sending http request to url: " + url);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchData(data);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  //useEffect takes 2 params. useEffect(function, otherthing)
  //we used a blank array []. If that didn't exist, it would infinite loop.

  return [isLoading, fetchData];
};
