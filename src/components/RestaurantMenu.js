import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/staticData";
import { MenuShimmer } from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      // const menuItemsData = json?.data?.cards
      //   .find((x) => x.groupedCard)
      //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      //   ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY);
      // ?.map((x) => x.itemCards)
      // .flat()
      // .map((x) => x.card?.info) || [];

      // const uniqueMenuItems = [];
      // menuItemsData.forEach((item) => {
      //   if (!uniqueMenuItems.find((x) => x.id === item.id)) {
      //     uniqueMenuItems.push(item);
      //   }
      // });
      const menuItemsData =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) => c.card?.["card"]?.["@type"] === MENU_ITEM_TYPE_KEY
        );
      setMenuItems(menuItemsData);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu w-auto min-h-[80dvh] mt-20 ">
      <div className="restaurant-summary flex justify-center items-center h-[200px] bg-slate-700 text-white">
        <img
          className="restaurant-img w-64 h-[200px] rounded-md"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details flex flex-col m-5 basis-[520px]">
          <h2 className="restaurant-title text-[40px] font-light max-w-[540px]">
            {restaurant?.name}
          </h2>
          <p className="restaurant-tags max-w-[540px] whitespace-nowrap text-inherit text-sm opacity-70">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="restaurant-details max-w-[340px] flex justify-between items-center text-base font-semibold text-inherit mt-[18px] pb-[10px]">
            <div
              className="restaurant-rating flex items-center rounded-md bg-green-700 "
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "bg-red-700" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              {/* <i className="fa-solid fa-star"></i> */}
              <span className="w-8 flex justify-center">
                {restaurant?.avgRating}
              </span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content flex justify-center">
        <div className="menu-items-container mt-[30px] w-[800px]">
          {menuItems?.map((category, index) => (
            // controlled component
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
