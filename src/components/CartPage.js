import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems");
  return (
    <div>
      <h1 className="text-center font-bold text-base">Cart Items</h1>
      <div className="flex justify-center ">
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
