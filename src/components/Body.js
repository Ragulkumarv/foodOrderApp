import RestaurentCard from "./RestaurentCard";
import { resDataObj } from "../utils/StaticData";

const Body = () => {
  return (
    <section className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food"
        />
      </div>
      <div className="res-container">
        {resDataObj.map((restaurent) => {
          return (
            <RestaurentCard respData={restaurent} key={restaurent.info.id} />
          );
        })}
      </div>
    </section>
  );
};

export default Body;
