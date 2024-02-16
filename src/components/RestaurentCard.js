import { ASSET_PATH } from "../utils/staticData";
import { MdStars } from "react-icons/md";

const RestaurentCard = (props) => {
  const { respData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, locality } =
    respData?.info;
  return (
    <section className="card-container w-[280px] h-[400px] p-1 ">
      <img
        src={ASSET_PATH + cloudinaryImageId}
        alt="res-logo"
        className="w-full h-1/2 object-fill mb-3 rounded-2xl hover:scale-90"
      />
      <h1 className="text-lg font-bold font-sans">{name}</h1>
      <div className="flex text-base font-bold">
        <span className="flex">
          <MdStars
            color={avgRating > 4.3 ? "Green" : "Orange"}
            size={20}
            className="mr-1 mt-[2px]"
          />
          {avgRating}
        </span>
        &nbsp; • &nbsp;<span>{sla?.slaString}</span>
      </div>
      <div className="cuisine text-base text-gray-400">
        {cuisines.join(", ")}
      </div>
      <div className="location text-base text-gray-400">{locality}</div>
    </section>
  );
};

export const addVegOnlyLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black rounded-lg w-auto text-white text-xs m-1 p-2 z-[1]">
          VegOnly
        </label>
        <RestaurentCard {...props} />
      </>
    );
  };
};
export default RestaurentCard;
