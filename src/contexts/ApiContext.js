import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export default ApiContext;

export const ApiContextProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [districtInfo, setdistrictInfo] = useState([]);

  const [seaInfo, setSeaInfo] = useState([]);
  const [beachesInfo, setBeachesInfo] = useState([]);

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
    ourApi.map(async (district) => {
      const res = await axios.get(
        `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${district.id}.json`
      );

      setWeatherInfo((state) => {
        state = [...state, res.data.data[0]];
        return state;
      });
    });
  };

  const params = [
    "airTemperature",
    "cloudCover",
    "currentDirection",
    "currentSpeed",
    "gust",
    "precipitation",
    "seaLevel",
    "swellDirection",
    "swellHeight",
    "swellPeriod",
    "waterTemperature",
    "waveDirection",
    "waveHeight",
    "wavePeriod",
    "windWaveDirection",
    "windWaveHeight",
    "windWavePeriod",
    "windDirection",
    "windSpeed",
  ];

  const getSeaConditionsInfo = async () => {
    setLoading(true);

    const res = await axios.get(
      "https://run.mocky.io/v3/9cd2f706-54d8-4853-9640-e5b422fded86"
    );

    setBeachesInfo(res.data.beaches);
    getStormGlassInfo(res.data.beaches);
    setLoading(false);
  };

  const getStormGlassInfo = async (ourApi) => {
    ourApi.map(async (beach) => {
      const res = await axios.get(
        `https://api.stormglass.io/v2/weather/point?lat=${beach.latitude}&lng=${beach.longitude}&params=${params}`,
        {
          headers: {
            Authorization:
              "307e6928-c241-11ec-ac71-0242ac130002-307e6996-c241-11ec-ac71-0242ac130002",
          },
        }
      );
      await setSeaInfo((state) => {
        state = [...state, res.data.hours.splice(0, 120)];
        console.log(state);
        return state;
      });
    });
  };

  const firstDay = seaInfo.map((beach) =>
    beach.filter((el, index) => index < 24)
  );
  const secondDay = seaInfo.map((beach) =>
    beach.filter((el, index) => index > 23 && index < 48)
  );
  const thirdDay = seaInfo.map((beach) =>
    beach.filter((el, index) => index > 47 && index < 72)
  );
  const fourthDay = seaInfo.map((beach) =>
    beach.filter((el, index) => index > 71 && index < 96)
  );
  const fifthDay = seaInfo.map((beach) =>
    beach.filter((el, index) => index > 95)
  );

  firstDay.map((el, index) => el.name = beachesInfo[index].name);
  secondDay.map((el, index) => el.name = beachesInfo[index].name);
  thirdDay.map((el, index) => el.name = beachesInfo[index].name);
  fourthDay.map((el, index) => el.name = beachesInfo[index].name);
  fifthDay.map((el, index) => el.name = beachesInfo[index].name);

  useEffect(() => {
    getWeatherInfo();
    getSeaConditionsInfo();
  }, []);

  if (loading) return "...Loading...";
  return (
    <ApiContext.Provider
      value={{
        weatherInfo,
        districtInfo,
        seaInfo,
        setSeaInfo,
        beachesInfo,
        firstDay,
        secondDay,
        thirdDay,
        fourthDay,
        fifthDay
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
