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

  /* Fetched the current days. Apparently, this will adjust according to the number of days in the month 
  (i.e. if day1 is the 30th of april, day2 will be the 1st of May)
  */
  const date = new Date();
  const [day1] = useState(date.getDate());
  const [day2] = useState(date.getDate() + 1);
  const [day3] = useState(date.getDate() + 2);
  const [day4] = useState(date.getDate() + 3);
  const [day5] = useState(date.getDate() + 4);

  const getWeatherInfo = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://run.mocky.io/v3/36dcba3b-226f-48a8-bc74-872190dbe41c"
    );
    setdistrictInfo(res.data.districts);
    getIpmaInfo(res.data.districts);
    getOpenWeatherInfo(res.data.districts);
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
    ourApi.map(async (district) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${+district.latitude}&lon=${+district.longitude}&appid=9743ddbd55285e7028ccfe78ce525d93&units=metric`
      );
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
      "https://run.mocky.io/v3/19eafcde-9b78-464d-88e6-854eb04b084a"
    );

    setBeachesInfo(res.data.beaches);
    getStormGlassInfo(res.data.beaches);
    setLoading(false);
  };

   // Fail Safe request mocky API
   const getStormGlassInfo = async (ourApi) => {
    const res = await axios.get(
       `https://run.mocky.io/v3/a831d043-946f-480f-acee-747c6aea7a5b`
     );
     await setSeaInfo(res.data);
     console.log(res.data);
     return res.data;
   };

  // Code for requesting data from stormglass
  // const getStormGlassInfo = async (ourApi) => {
  //   ourApi.map(async (beach) => {
  //     const res = await axios.get(
  //       `https://api.stormglass.io/v2/weather/point?lat=${beach.latitude}&lng=${beach.longitude}&params=${params}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "307e6928-c241-11ec-ac71-0242ac130002-307e6996-c241-11ec-ac71-0242ac130002",
  //         },
  //       }
  //     );
  //     await setSeaInfo((state) => {
  //       state = [...state, res.data.hours.splice(0, 120)];
  //       console.log(state);
  //       return state;
  //     });
  //   });
  // };

  // const getStormGlassInfo = async (ourApi) => {
  //   const res = await axios.get(
  //     `https://run.mocky.io/v3/a831d043-946f-480f-acee-747c6aea7a5b`
  //   );
  //   await setSeaInfo(res.data);
  //   return res.data;
  // };

  // Tide info API request
  /*const getTideInfo = async (ourApi) => {
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
  */

  // TIDE INFO

  // const getTideInfo = async (ourApi) => {
  //   const res = await axios.get(
  //     `https://run.mocky.io/v3/476bbd4c-e97d-4ce0-b29c-f765cc725700`
  //   );
  //   setTideInfo(res.data.splice(0, 18));
  //   return tideInfo;
  // };

  // tideInfo.forEach((element, index) => {
  //   element.name = beachesInfo[index].name;
  // });

  // console.log(tideInfo);

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

  firstDay.map((el, index) => (el.name = beachesInfo[index].name));
  secondDay.map((el, index) => (el.name = beachesInfo[index].name));
  thirdDay.map((el, index) => (el.name = beachesInfo[index].name));
  fourthDay.map((el, index) => (el.name = beachesInfo[index].name));
  fifthDay.map((el, index) => (el.name = beachesInfo[index].name));

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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
