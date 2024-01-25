const RestaurentCard = (props) => {
  const { respData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    locality,
  } = respData?.info;
  return (
    <section className="card-container">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h1 className="res-name">{name}</h1>
      <div className="ratings-eta">
        <span>{avgRating}</span>
        <span>{deliveryTime}</span>
      </div>
      <div className="cuisine">{cuisines.join(", ")}</div>
      <div className="location">{locality}</div>
    </section>
  );
};
export default RestaurentCard;
