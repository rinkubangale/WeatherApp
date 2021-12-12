import React, { useContext } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import Styles from "./Search.module.css";
import { StoreContext } from "../Context/Context";

export default function Search() {
  const { data, getCityData } = useContext(StoreContext);
  // console.log(data.daily);

  return (
    <div className={Styles.searchBar}>
      <MdLocationOn />
      <input
        type="text"
        placeholder="Enter City Name"
        className={Styles.inputTag}
      />
      <MdSearch onClick={() => getCityData()} />
    </div>
  );
}
