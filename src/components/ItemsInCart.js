import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { ITEM_IMG_CDN_URL } from "../utils/staticData";
import { MdDelete } from "react-icons/md";

const ItemsInCart = ({ items }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="w-[50%]">
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="menu-items-list flex flex-col justify-center shadow-lg">
            <div
              key={item?.card?.info?.id}
              className="menu-item flex justify-between m-h-[250px] p-5 border-b-2"
            >
              <div className="menu-item-details flex flex-col self-start overflow-hidden">
                <h3 className="item-title w-3/5">{item?.card?.info?.name}</h3>
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
              <div className="menu-img-wrapper flex justify-center flex-col items-end overflow-hidden w-[300px]">
                {item?.card?.info?.imageId && (
                  <img
                    className="menu-item-img w-[100px] h-[100px] rounded-md"
                    src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                  />
                )}
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="add-btn w-[100px] h-[40px] text-sm shadow-2xl rounded-md bg-white text-green-600 border flex justify-center items-center"
                >
                  REMOVE <MdDelete size={18} color="grey" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsInCart;
