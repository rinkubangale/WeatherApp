import React, { useContext, useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { StoreContext } from "../Context/Context";

export default function WeeklyReport() {
  const [weather, setWeather] = useState([]);
  const { data } = useContext(StoreContext);
  useEffect(() => {
    setWeather(data.daily);
    // console.log(data.daily);
  }, [data]);

  console.log(weather);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "30px"
      }}
    >
      {weather &&
        weather.map((e, i) => {
          return <WeatherCard key={i} props={e} />;
        })}
    </div>
  );
}
