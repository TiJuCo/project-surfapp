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
    "gust",
    "precipitation",
    "swellDirection",
    "swellHeight",
    "swellPeriod",
    "waterTemperature",
    "windDirection",
    "windSpeed",
  ];

  const getSeaConditionsInfo = async () => {
    setLoading(true);

    const res = await axios.get(
      "https://run.mocky.io/v3/f39bbc3c-1b8e-486f-96c9-bb32929afbbf"
    );

    setBeachesInfo(res.data.beaches);
    getStormGlassInfo(res.data.beaches);
    getTideInfo(res.data.beaches);
    setLoading(false);
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

  // API request fail safe
  const getStormGlassInfo = async () => {
    const first6Beaches = await axios.get(
      `https://run.mocky.io/v3/2931bc42-ef0a-4e23-bb72-6901ae0f7193`
    );
    setSeaInfo((state) => {
      state = [...state, ...first6Beaches.data];
      return state;
    });
    const second6Beaches = await axios.get(
      `https://run.mocky.io/v3/bd9a7f8f-b246-4915-a564-34901da92e6a`
    );
    setSeaInfo((state) => {
      state = [...state, ...second6Beaches.data];
      return state;
    });
    const third6Beaches = await axios.get(
      `https://run.mocky.io/v3/3c164eb9-6ad7-41c9-a4a1-2dae1d636c23`
    );
    setSeaInfo((state) => {
      state = [...state, ...third6Beaches.data];
      return state;
    });
    const fourth6Beaches = await axios.get(
      `https://run.mocky.io/v3/89d2610f-f184-4ce6-a73f-0abd1a86a73c`
    );
    setSeaInfo((state) => {
      state = [...state, ...fourth6Beaches.data];
      return state;
    });
    const fifth6Beaches = await axios.get(
      `https://run.mocky.io/v3/eaf1386e-b2c9-4786-b57f-daa280cd2a15`
    );
    setSeaInfo((state) => {
      state = [...state, ...fifth6Beaches.data];
      return state;
    });
    const sixth6Beaches = await axios.get(
      `https://run.mocky.io/v3/124e541d-82a3-425f-a180-9bce71d7cbc6`
    );
    setSeaInfo((state) => {
      state = [...state, ...sixth6Beaches.data];
      return state;
    });
  };

  console.log(seaInfo);

  // Fail Safe request mocky API
  // const getStormGlassInfo = async (ourApi) => {
  //   const res = await axios.get(
  //     `https://run.mocky.io/v3/a831d043-946f-480f-acee-747c6aea7a5b`
  //   );
  //   await setSeaInfo(res.data);
  //   console.log(res.data);
  //   return res.data;
  // };

  // Added the Converted Wind Direction variable assignment to the api context
  let convertedWindDirection = "";
  seaInfo.map((beach, index) =>
    beach.map((hour, index) => {
      if (hour.windDirection.sg <= 22.5) {
        convertedWindDirection = "N";
      } else if (
        hour.windDirection.sg > 22.5 &&
        hour.windDirection.sg <= 67.5
      ) {
        convertedWindDirection = "NE";
      } else if (
        hour.windDirection.sg > 67.5 &&
        hour.windDirection.sg <= 112.5
      ) {
        convertedWindDirection = "E";
      } else if (
        hour.windDirection.sg > 112.5 &&
        hour.windDirection.sg <= 157.5
      ) {
        convertedWindDirection = "SE";
      } else if (
        hour.windDirection.sg > 157.5 &&
        hour.windDirection.sg <= 202.5
      ) {
        convertedWindDirection = "S";
      } else if (
        hour.windDirection.sg > 202.5 &&
        hour.windDirection.sg <= 247.5
      ) {
        convertedWindDirection = "SW";
      } else if (
        hour.windDirection.sg > 247.5 &&
        hour.windDirection.sg <= 292.5
      ) {
        convertedWindDirection = "W";
      } else if (
        hour.windDirection.sg > 292.5 &&
        hour.windDirection.sg <= 337.5
      ) {
        return (convertedWindDirection = "NW");
      } else if (
        hour.windDirection.sg > 337.5 &&
        hour.windDirection.sg <= 360
      ) {
        convertedWindDirection = "N";
      }
      hour.convertedWindDirection = convertedWindDirection;
    })
  );

  let convertedSwellDirection = "";
  seaInfo.map((beach, index) =>
    beach.map((hour, index) => {
      if (hour.swellDirection.sg <= 22.5) {
        convertedSwellDirection = "N";
      } else if (
        hour.swellDirection.sg > 22.5 &&
        hour.swellDirection.sg <= 67.5
      ) {
        convertedSwellDirection = "NE";
      } else if (
        hour.swellDirection.sg > 67.5 &&
        hour.swellDirection.sg <= 112.5
      ) {
        convertedSwellDirection = "E";
      } else if (
        hour.swellDirection.sg > 112.5 &&
        hour.swellDirection.sg <= 157.5
      ) {
        convertedSwellDirection = "SE";
      } else if (
        hour.swellDirection.sg > 157.5 &&
        hour.swellDirection.sg <= 202.5
      ) {
        convertedSwellDirection = "S";
      } else if (
        hour.swellDirection.sg > 202.5 &&
        hour.swellDirection.sg <= 247.5
      ) {
        convertedSwellDirection = "SW";
      } else if (
        hour.swellDirection.sg > 247.5 &&
        hour.swellDirection.sg <= 292.5
      ) {
        convertedSwellDirection = "W";
      } else if (
        hour.swellDirection.sg > 292.5 &&
        hour.swellDirection.sg <= 337.5
      ) {
        convertedSwellDirection = "NW";
      } else if (
        hour.swellDirection.sg > 337.5 &&
        hour.swellDirection.sg <= 360
      ) {
        convertedSwellDirection = "N";
      }
      hour.convertedSwellDirection = convertedSwellDirection;
    })
  );

  // Fail safe API request sea conditions

  /* 
  1st beaches URL: https://run.mocky.io/v3/2931bc42-ef0a-4e23-bb72-6901ae0f7193
  2nd beaches URL: https://run.mocky.io/v3/bd9a7f8f-b246-4915-a564-34901da92e6a
  3rd beaches URL: https://run.mocky.io/v3/3c164eb9-6ad7-41c9-a4a1-2dae1d636c23
  4th beaches URL: https://run.mocky.io/v3/89d2610f-f184-4ce6-a73f-0abd1a86a73c
  5th beaches URL: https://run.mocky.io/v3/eaf1386e-b2c9-4786-b57f-daa280cd2a15
  6th beaches URL: https://run.mocky.io/v3/124e541d-82a3-425f-a180-9bce71d7cbc6
  */

  // Tide info API request
  // const getTideInfo = async (ourApi) => {
  //   ourApi.map(async (beach) => {
  //     const res = await axios.get(
  //       `https://api.stormglass.io/v2/tide/extremes/point?lat=${beach.latitude}&lng=${beach.longitude}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "307e6928-c241-11ec-ac71-0242ac130002-307e6996-c241-11ec-ac71-0242ac130002",
  //         },
  //       }
  //     );
  //     console.log(res.data.data);
  //     await setTideInfo((state) => {
  //       state = [...state, res.data.data.splice(0, 18)];
  //       console.log(state);
  //       return state;
  //     });
  //   });
  // };

  // Tide info request FAIL SAFE

  const getTideInfo = async (ourApi) => {
    const res = await axios.get(
      `https://run.mocky.io/v3/fd97ea75-1ad0-4b93-b297-64a3ad965ba0`
    );
    setTideInfo(res.data);
    return tideInfo;
  };

  tideInfo.forEach((element, index) => {
    element.name = beachesInfo[index].name;
  });

  const calculator = () => {
    //Now 6, 9, 12, 15, 18, 21
    seaInfo.map((beach, beachIndex) =>
      beach
        .filter(
          (hour) =>
            +hour.time.substring(11, 13) > 4 &&
            +hour.time.substring(11, 13) < 22 &&
            // +hour.time.substring(11, 13) % 3 === 0 &&
            +hour.time.substring(11, 13) < 24
        )
        .map((surfHour, surfHourIndex) => {
          let surfRating = 0;
          let windSpeedRating = 0;
          let gustSpeedRating = 0;
          let windDirectionRating = 0;
          let swellPeriodRating = 0;
          let swellDirectionRating = 0;
          let swellSizeRating = 0;

          if (surfHour.windSpeed.sg <= 5) {
            windSpeedRating += 3;
          } else if (surfHour.windSpeed.sg > 5 && surfHour.windSpeed.sg <= 10) {
            windSpeedRating += 2;
          } else if (
            surfHour.windSpeed.sg < 10 &&
            surfHour.windSpeed.sg <= 17
          ) {
            windSpeedRating += 1;
          } else {
            windSpeedRating -= -5;
          }

          if (surfHour.gust.sg > 16) {
            gustSpeedRating += -5;
          }

          if (
            beachesInfo[beachIndex].perfectWindDirectionSurf.includes(
              surfHour.convertedWindDirection
            )
          ) {
            windDirectionRating += 2;
          } else if (
            surfHour.convertedWindDirection &&
            (beachesInfo[beachIndex].perfectWindDirectionSurf == "N" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "NE" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "NW") &&
            surfHour.convertedWindDirection.substring(0, 1).includes("N")
          ) {
            windDirectionRating += 1;
          } else if (
            surfHour.convertedWindDirection &&
            (beachesInfo[beachIndex].perfectWindDirectionSurf == "E" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "NE" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "SE") &&
            surfHour.convertedWindDirection.substring(1, 2).includes("E")
          ) {
            windDirectionRating += 1;
          } else if (
            surfHour.convertedWindDirection &&
            (beachesInfo[beachIndex].perfectWindDirectionSurf == "S" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "SE" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "SW") &&
            surfHour.convertedWindDirection.substring(0, 1).includes("S")
          ) {
            windDirectionRating += 1;
          } else if (
            surfHour.convertedWindDirection &&
            (beachesInfo[beachIndex].perfectWindDirectionSurf == "W" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "SW" ||
              beachesInfo[beachIndex].perfectWindDirectionSurf == "NW") &&
            surfHour.convertedWindDirection.substring(1, 2).includes("W")
          ) {
            windDirectionRating += 1;
          }

          if (surfHour.swellPeriod.sg >= 13) {
            swellPeriodRating += 3;
          } else if (
            surfHour.swellPeriod.sg < 13 &&
            surfHour.swellPeriod.sg >= 10
          ) {
            swellPeriodRating += 2;
          } else if (
            surfHour.swellPeriod.sg < 10 &&
            surfHour.swellPeriod.sg >= 8
          ) {
            swellPeriodRating += 1;
          } else {
            swellPeriodRating -= 1;
          }

          if (
            beachesInfo[beachIndex].facingDirection.includes(
              surfHour.convertedSwellDirection
            )
          ) {
            swellDirectionRating += 5;
          } else if (
            surfHour.convertedSwellDirection &&
            (beachesInfo[beachIndex].facingDirection == "N" ||
              beachesInfo[beachIndex].facingDirection == "NE" ||
              beachesInfo[beachIndex].facingDirection == "NW") &&
            surfHour.convertedSwellDirection.substring(0, 1).includes("N")
          ) {
            swellDirectionRating += 3;
          } else if (
            surfHour.convertedSwellDirection &&
            (beachesInfo[beachIndex].facingDirection == "E" ||
              beachesInfo[beachIndex].facingDirection == "NE" ||
              beachesInfo[beachIndex].facingDirection == "SE") &&
            surfHour.convertedSwellDirection.substring(1, 2).includes("E")
          ) {
            swellDirectionRating += 3;
          } else if (
            surfHour.convertedSwellDirection &&
            (beachesInfo[beachIndex].facingDirection == "S" ||
              beachesInfo[beachIndex].facingDirection == "SE" ||
              beachesInfo[beachIndex].facingDirection == "SW") &&
            surfHour.convertedSwellDirection.substring(0, 1).includes("S")
          ) {
            swellDirectionRating += 3;
          } else if (
            surfHour.convertedSwellDirection &&
            (beachesInfo[beachIndex].facingDirection == "W" ||
              beachesInfo[beachIndex].facingDirection == "NW" ||
              beachesInfo[beachIndex].facingDirection == "NE") &&
            surfHour.convertedSwellDirection.substring(1, 2).includes("W")
          ) {
            swellDirectionRating += 3;
          } else {
            swellDirectionRating -= 5;
          }

          if (
            surfHour.swellHeight.sg >= 0.5 &&
            surfHour.swellHeight.sg <= 0.8
          ) {
            swellSizeRating += 1;
          } else if (
            surfHour.swellHeight.sg > 0.8 &&
            surfHour.swellHeight.sg <= 1.5
          ) {
            swellSizeRating += 3;
          } else if (surfHour.swellHeight.sg > 1.5) {
            swellSizeRating += 4;
          }

          surfRating += windSpeedRating;
          surfRating += gustSpeedRating;
          surfRating += windDirectionRating;
          surfRating += swellPeriodRating;
          surfRating += swellDirectionRating;
          surfRating += swellSizeRating;

          surfHour.surfRating = surfRating;
          surfHour.windSpeedRating = windSpeedRating;
          surfHour.gustSpeedRating = gustSpeedRating;
          surfHour.windDirectionRating = windDirectionRating;
          surfHour.swellPeriodRating = swellPeriodRating;
          surfHour.swellDirectionRating = swellDirectionRating;
          surfHour.swellSizeRating = swellSizeRating;

          // Excellent = 17/20
          // Very good = 13/16
          // Good = 8/12
          // Insufficient = 4/7
          // Poor = 0/3

          let finalRating = "";
          if (surfRating >= 17 && surfRating <= 20) {
            finalRating = "Excellent";
          } else if (surfRating >= 13 && surfRating <= 16) {
            finalRating = "Very good";
          } else if (surfRating >= 9 && surfRating <= 12) {
            finalRating = "Good";
          } else if (surfRating >= 4 && surfRating <= 8) {
            finalRating = "Insufficient";
          } else if (surfRating <= 3) {
            finalRating = "Poor";
          }

          surfHour.finalRating = finalRating;
        })
    );
  };

  calculator();

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
