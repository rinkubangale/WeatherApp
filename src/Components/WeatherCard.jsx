import React from "react";

export default function WeatherCard({ props }) {
  // console.log(props);

  return (
    <div>
      <div>Mon</div>
      <div>
        {props.temp.max} {props.temp.min}
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${props.weather[0].icon}.png`}
        alt=""
      />
      <div>{props.weather[0].main}</div>
    </div>
  );
}
