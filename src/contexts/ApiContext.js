import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

export default ApiContext;

export const ApiContextProvider = ({ children }) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [districtInfo, setdistrictInfo] = useState([]);
  const [openWeatherInfo, setOpenWeatherInfo] = useState([]);

  const [seaInfo, setSeaInfo] = useState([]);
  const [beachesInfo, setBeachesInfo] = useState([]);

  const [tideInfo, setTideInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  const date = new Date();
  const [time] = useState(date.getDate());

  const getWeatherInfo = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://run.mocky.io/v3/36dcba3b-226f-48a8-bc74-872190dbe41c"
    );
    setdistrictInfo(res.data.districts);
    getIpmaInfo(res.data.districts);
    getOpenWeatherInfo(res.data.districts);
    console.log(res.data.districts);
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
  const getOpenWeatherInfo = async (ourApi) => {
    console.log(ourApi);
    ourApi.map(async (district) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${+district.latitude}&lon=${+district.longitude}&appid=9743ddbd55285e7028ccfe78ce525d93&units=metric`
      );

      console.log(res.data);
      setOpenWeatherInfo((state) => {
        state = [...state, res.data];
        return state;
      });
    });
  };

  openWeatherInfo.forEach((district, index) => {
    district.name = weatherInfo[index].name;
  });

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
    getTideInfo(res.data.beaches);
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

  const getTideInfo = async (ourApi) => {
    ourApi.map(async (beach) => {
      const res = await axios.get(
        `https://api.stormglass.io/v2/tide/extremes/point?lat=${beach.latitude}&lng=${beach.longitude}`,
        {
          headers: {
            Authorization:
              "307e6928-c241-11ec-ac71-0242ac130002-307e6996-c241-11ec-ac71-0242ac130002",
          },
        }
      );
      console.log(res.data.data);
      await setTideInfo((state) => {
        state = [...state, res.data.data.splice(0, 18)];
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

  // AUMENTAR OS VALORES DAS TIDES POR 1 OU 2 METROS
  const firstDayTide = tideInfo.map((beach) =>
    beach.filter((el, index) => el.time.substring(9, 10) == time)
  );
  const secondDayTide = tideInfo.map((beach) =>
    beach.filter((el, index) => el.time.substring(9, 10) == time + 1)
  );
  const thirdDayTide = tideInfo.map((beach) =>
    beach.filter((el, index) => el.time.substring(9, 10) == time + 2)
  );
  const fourthDayTide = tideInfo.map((beach) =>
    beach.filter((el, index) => el.time.substring(9, 10) == time + 3)
  );
  const fifthDayTide = tideInfo.map((beach) =>
    beach.filter((el, index) => el.time.substring(9, 10) == time + 4)
  );

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
        openWeatherInfo,
        tideInfo,
        firstDay,
        secondDay,
        thirdDay,
        fourthDay,
        fifthDay,
        firstDayTide,
        secondDayTide,
        thirdDayTide,
        fourthDayTide,
        fifthDayTide,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
