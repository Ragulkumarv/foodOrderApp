import { useId, useState } from "react";
import { ITEM_IMG_CDN_URL } from "../utils/staticData";

const ItemsList = ({ menuItems }) => {
  const [showItems, setShowItems] = useState(false);
  const handleShowItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div key={useId()}>
      {menuItems.map((cats) => (
        <div key={cats?.id}>
          <div
            className="menu-title-wrap p-5 "
            onClick={() => handleShowItems()}
          >
            <h3 className="menu-title font-bold text-lg">
              {cats.title} ({cats?.itemCards?.length} {"ITEMS"})
            </h3>
          </div>
          {showItems ? (
            <div className="menu-items-list flex flex-col justify-center shadow-2xl">
              {cats?.itemCards?.map((item) => (
                <div
                  key={item?.card?.info?.id}
                  className="menu-item flex justify-between m-h-[250px] p-5 border-b-2"
                >
                  <div className="menu-item-details flex flex-col self-start overflow-hidden">
                    <h3 className="item-title w-3/5">
                      {item?.card?.info?.name}
                    </h3>
                    <p className="item-cost text-base font-normal mt-1 w-2/5 text-black">
                      {item?.card?.info?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.card?.info?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc w-3/5 text-base mt-[14px] leading-5 tracking-[-0.3] text-gray-500">
                      {item?.card?.info?.description}
                    </p>
                  </div>
                  <div className="menu-img-wrapper flex justify-center flex-col items-end overflow-hidden w-[200px]">
                    {item?.card?.info?.imageId && (
                      <img
                        className="menu-item-img w-[100px] h-[100px] rounded-md"
                        src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                        alt={item?.card?.info?.name}
                      />
                    )}
                    <button className="add-btn w-[100px] h-[40px] text-sm shadow-2xl rounded-md bg-white text-green-600 border">
                      {" "}
                      ADD +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
