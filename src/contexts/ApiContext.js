import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext([]);

export default ApiContext;

export const ApiContextProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const getWeatherInfo = () => {
    axios
      .get("https://run.mocky.io/v3/53ef2996-2447-4c63-806f-f082b0dcea7a")
      .then((response) => getIpmaInfo(response.data.districts));
  };

  const getIpmaInfo = (ourApi) => {
    const results = [];
    ourApi.map((x) =>
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${x.id}.json`
        )
        .then((response) => response.data)
        .then((data) => {
          results.push(data.data[0]);
        })
    );
    setState(results);
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <ApiContext.Provider value={(state, setState)}>
      {children}
    </ApiContext.Provider>
  );
};
