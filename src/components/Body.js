import RestaurentCard, { addVegOnlyLabel } from "./RestaurentCard";
import { swiggy_api_URL } from "../utils/staticData";
import { useEffect, useState } from "react";
import filteredData from "../utils/config";
import ShimmerLoader from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setRestaurantsData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const VegOnlyLabel = addVegOnlyLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = await fetch(swiggy_api_URL);
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
    <>
      <section className="body pt-48">
        <div className="flex justify-center pb-4 fixed w-full top-[88px] bg-white left-0 z-10">
          <div className="flex justify-center items-center appearance-none border-2 h-12 p-3 text-stone-900">
            <input
              type="text"
              className="appearance-none bg-transparent px-4 py-2 w-[800px] p-3 focus-visible:outline-none"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={() => {
                const filterData = filteredData(searchText, allRestaurants);
                setFilteredRestaurant(filterData);
              }}
            />
            <button className="flex items-center justify-center px-5">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <ShimmerLoader />
    </>
  ) : (
    <>
      <section className="body pt-48">
        <div className="flex justify-center pb-4 fixed w-full top-[88px] bg-white left-0 z-20">
          <div className="flex justify-center items-center appearance-none border-2 h-12 p-3 text-stone-900">
            <input
              type="text"
              className="appearance-none bg-transparent px-4 py-2 w-[800px] p-3 focus-visible:outline-none"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={() => {
                const filterData = filteredData(searchText, allRestaurants);
                setFilteredRestaurant(filterData);
              }}
            />
            <button className="flex items-center justify-center px-5">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="res-container flex flex-wrap gap-5 justify-center">
          {filteredRestaurant?.map((restaurent) => {
            return (
              <Link
                key={restaurent.info.id}
                to={"/restaurant/" + restaurent.info.id}
              >
                {restaurent.info?.veg ? (
                  <VegOnlyLabel respData={restaurent} />
                ) : (
                  <RestaurentCard respData={restaurent} />
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
