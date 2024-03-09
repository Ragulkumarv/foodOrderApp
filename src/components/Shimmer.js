import { useId } from "react";
import { Shimmer } from "react-shimmer";

export const MenuShimmer = () => {
  const uniqueId = useId();
  return (
    <div className="restaurant-menu animate-pulse">
      <div className="restaurant-summary">
        <img className="restaurant-img" />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title"></h2>
          <p className="restaurant-tags"></p>
          <div className="restaurant-details">
            <div className="restaurant-rating">
              <i className="fa-solid fa-star"></i>
              <span></span>
            </div>
            <div className="restaurant-rating-slash"></div>
            <div></div>
            <div className="restaurant-rating-slash"></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title"></h3>
            <p className="menu-count"></p>
          </div>
          <div className="menu-items-list">
            {Array(10)
              .fill("")
              .map(() => (
                <div className="menu-item" key={uniqueId}>
                  <div className="menu-item-details">
                    <h3 className="item-title"></h3>
                    <p className="item-cost"></p>
                    <p className="item-desc"></p>
                  </div>
                  <div className="menu-img-wrapper">
                    <img className="menu-item-img" />
                    <button className="add-btn"></button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ShimmerLoader = () => {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center ">
        {Array(16)
          .fill("")
          .map(() => {
            return (
              <div className="h-[10.8rem] w-[16.5rem] m-4 border-0 bg-slate-100 rounded-[10%] animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
            );
          })}
      </div>
    </>
  );
};

export default ShimmerLoader;
