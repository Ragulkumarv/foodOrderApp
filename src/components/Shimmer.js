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
  const uniqueId = useId();
  return (
    <>
      <section className="body">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants and food"
          />
        </div>
        <div className="res-container">
          {Array(16)
            .fill("")
            .map(() => {
              return <Shimmer key={uniqueId} width={330} height={210} />;
            })}
        </div>
      </section>
    </>
  );
};

export default ShimmerLoader;
