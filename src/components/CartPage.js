import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../images/emptyCart.png";
import { clearCart } from "../utils/cartSlice";
import ItemsInCart from "./ItemsInCart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems");
  const deliveryCharges = cartItems.reduce((acc, cur) => {
    return acc + (cur?.card?.info?.price ?? cur?.card?.info?.defaultPrice);
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const homeBtnClick = () => {
    history("/");
  };
  return (
    <div className="pb-4 fixed w-full top-[88px] bg-white left-0 z-10 overflow-y-scroll h-5/6">
      <h1 className="text-center font-bold text-lg">Cart Items</h1>
      {cartItems?.length === 0 ? (
        <div className="flex flex-col justify-center">
          <img src={emptyCart} alt="Empty Cart" className="m-auto w-[350px]" />
          <h1 className="text-center text-xl">
            Look like you have not added anything! Go ahead & add items to cart
          </h1>
          <button
            onClick={() => homeBtnClick()}
            class="w-[130px] m-auto mt-5 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
          >
            Home
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-center m-auto">
            <ItemsInCart items={cartItems} />
          </div>
          <h1
            className="border text-center m-auto w-[50%] text-white bg-orange-400 cursor-pointer"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </h1>
          <div className="m-auto w-[50%]">
            <div className="border pt-3 ">
              <span className="font-semibold pl-10">Bill Details</span>
              <div className="flex justify-between px-10 text-gray-500">
                <div>Item Total</div>
                <div>&#x20B9;{deliveryCharges / 100}</div>
              </div>
              <div className="flex justify-between px-10 text-gray-500">
                <div>Delivery Fee | 5.4 kms</div>
                <div>&#x20B9;40</div>
              </div>
              <div className="flex justify-between px-10 text-gray-500 border-b-2 pb-3">
                <div>GST and Restaurant Charges</div>
                <div>&#x20B9;8.00</div>
              </div>
              <div className="flex justify-between px-10 font-semibold py-3">
                <div>To Pay</div>
                <div>&#x20B9;{(deliveryCharges / 100 + 48).toFixed(2)}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
