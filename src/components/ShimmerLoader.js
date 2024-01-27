import { useId } from "react";
import { Shimmer } from "react-shimmer";

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
