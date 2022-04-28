import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext({
  weatherInfo: [],
});

export default ApiContext;

export const ApiContextProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  const getWeatherInfo = () => {
    axios
      .get("https://run.mocky.io/v3/53ef2996-2447-4c63-806f-f082b0dcea7a")
      .then((response) => response.data.districts)
      .then((data) => {
        getIpmaInfo(data);
      });
  };

  const getIpmaInfo = (ourApi) => {
    const results = [];
    ourApi.map((x) =>
      axios
        .get(
          `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${x.id}.json`
        )
        .then((response) => response.data.data[0])
        .then((data) => {
          results.push(data);
        })
    );
    console.log(results);
    setWeatherInfo(results);
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <ApiContext.Provider value={weatherInfo}>{children}</ApiContext.Provider>
  );
};
