import { ASSET_PATH } from "../utils/staticData";

const RestaurentCard = (props) => {
  const { respData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, locality } =
    respData?.info;
  return (
    <section className="card-container">
      <img src={ASSET_PATH + cloudinaryImageId} alt="res-logo" />
      <h1 className="res-name">{name}</h1>
      <div className="ratings-eta">
        <span>{avgRating}</span>&nbsp; • &nbsp;<span>{sla?.slaString}</span>
      </div>
      <div className="cuisine">{cuisines.join(", ")}</div>
      <div className="location">{locality}</div>
    </section>
  );
};
export default RestaurentCard;
