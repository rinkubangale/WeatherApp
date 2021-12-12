import React, { createContext, useState } from "react";
import axios from "axios";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  const getCityData = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${"Nagpur"}&appid=1097f24e176a83ff002e505c4055f8d6`
      )
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = { data, setData, getCityData };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export { StoreContextProvider, StoreContext };
