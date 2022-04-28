import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export default ApiContext;

export const ApiContextProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [districtInfo, setdistrictInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  const getWeatherInfo = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://run.mocky.io/v3/53ef2996-2447-4c63-806f-f082b0dcea7a"
    );
    setdistrictInfo(res.data.districts);
    getIpmaInfo(res.data.districts);
    setLoading(false);
  };

  const getIpmaInfo = async (ourApi) => {
    console.log("function called");
    ourApi.map(async (district) => {
      const res = await axios.get(
        `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${district.id}.json`
      );
      console.log("map is being executed");

      setWeatherInfo((state) => {
        state = [...state, res.data.data[0]];
        return state;
      });
    });
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  console.log("component rendered");
  if (loading) return "...Loading...";
  return (
    <ApiContext.Provider value={{ weatherInfo, districtInfo }}>
      {children}
    </ApiContext.Provider>
  );
};
