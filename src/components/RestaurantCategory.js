import ItemsList from "./ItemsList";
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/**Accordion Header */}
      <div className="w-auto mx-auto my-4 bg-gray-50 shadow-lg p-5">
        <div
          className="menu-title-wrap flex justify-between"
          onClick={handleClick}
        >
          <h3 className="menu-title font-bold text-lg">
            {data.title} ({data?.itemCards?.length} {"ITEMS"})
          </h3>
          <span>
            <IoIosArrowDown
              className="flex justify-center items-center mt-1"
              size={20}
            />
          </span>
        </div>

        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
