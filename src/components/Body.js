import RestaurentCard from "./RestaurentCard";
import { API_URL } from "../utils/staticData";
import { useEffect, useState } from "react";
import filteredData from "../utils/config";
import ShimmerLoader from "./ShimmerLoader";

const Body = () => {
  const [allRestaurants, setRestaurantsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = await fetch(API_URL);
      const data = await url.json();
      setRestaurantsData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(data, "success");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return filteredRestaurant?.length === 0 ? (
    <ShimmerLoader />
  ) : (
    <>
      <section className="body">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={() => {
              const filterData = filteredData(searchText, allRestaurants);
              setFilteredRestaurant(filterData);
            }}
          />
        </div>
        <div className="res-container">
          {filteredRestaurant?.map((restaurent) => {
            return (
              <RestaurentCard respData={restaurent} key={restaurent.info.id} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
