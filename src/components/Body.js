import RestaurentCard from "./RestaurentCard";
import { resDataObj } from "../utils/staticData";
import { useState } from "react";
import filteredData from "../utils/config";

const Body = () => {
  const [resData, setResData] = useState(resDataObj);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState(resDataObj);

  return (
    <section className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={() => {
            const filterData = filteredData(searchText, resData);
            setFilteredRes(filterData);
          }}
        />
      </div>
      <div className="res-container">
        {filteredRes.map((restaurent) => {
          return (
            <RestaurentCard respData={restaurent} key={restaurent.info.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Body;
