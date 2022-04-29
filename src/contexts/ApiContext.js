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

  // const getSeaConditionsInfo = async () => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     "https://run.mocky.io/v3/a2dd85a3-2760-4222-8437-3d39b0ff9777"
  //   );
  //   setBeachesInfo(res.data.districts);
  //   getStormGlassInfo(res.data.districts);
  //   setLoading(false);
  // };
  const getSeaConditionsInfo = async () => {
    setLoading(true);
    //   {
    //     id: 1,
    //     name: "Praia do Moledo",
    //     img: "https://i.ibb.co/5WjLPLY/Moledo.jpg",
    //     county: "Caminha",
    //     district: "Viana do Castelo",
    //     latitude: 41.85043260992245,
    //     longitude: -8.866332833199627,
    //     facingDirection: ["W"],
    //     perfectWindDirectionSurf: ["E"],
    //     description:
    //       "Moledo in North Portugal is an exposed beach break that has reasonably consistent surf and can work at any time of the year. The best wind direction is from the east. Most of the surf here comes from groundswells and the ideal swell direction is from the west. The beach break offers both left and right hand waves. Best around high tide. Rarely crowded here. Dangerous rips are a hazard of surfing here.",
    //     services: [
    //       "lifeguard",
    //       "restaurants",
    //       "showers",
    //       "accessibility",
    //       "transportation",
    //       "free parking",
    //       "wc",
    //       "first Aid",
    //     ],
    //   },
    //   {
    //     id: 2,
    //     name: "Praia da Arda",
    //     img: "https://i.ibb.co/6s1Xh9H/Praia-de-Afife-Viana-do-Castelo.jpg",
    //     county: "Viana do Castelo",
    //     district: "Viana do Castelo",
    //     latitude: 41.77579596263613,
    //     longitude: -8.871934071999847,
    //     facingDirection: ["W"],
    //     perfectWindDirectionSurf: ["E"],
    //     description:
    //       "It's an Oceanic Beach in the northern hemisphere bathed by the Atlantic Ocean, located on the coast of Portugal - Iberian Peninsula - in the municipality of Viana do Castelo. Praia da Arda Beach, also known as Praia do Bico Beach, has a white sand that extends over 1,2 Km, making it one of Viana do Castelo county most beautiful sites. Going south one can find submerged rocky formations by the Ribeira do Bico1 or Ribeira da Fonte Arenosa2 mouth.",
    //     services: [
    //       "lifeguard",
    //       "restaurants",
    //       "showers",
    //       "accessibility",
    //       "transportation",
    //       "free parking",
    //       "wc",
    //       "first aid",
    //     ],
    //   },
    // ];
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
      setSeaInfo((state) => {
        state = [...state, res.data.hours[38]];
        return state;
      });
    });
  };

  // const stateChanges = (seaInfo) => {
  //   console.log(seaInfo);
  // };

  useEffect(() => {
    getWeatherInfo();
    getSeaConditionsInfo();
    // stateChanges(seaInfo);
  }, []);

  if (loading) return "...Loading...";
  return (
    <ApiContext.Provider
      value={{ weatherInfo, districtInfo, seaInfo, setSeaInfo, beachesInfo }}
    >
      {children}
    </ApiContext.Provider>
  );
};
