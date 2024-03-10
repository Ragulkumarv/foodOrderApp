import { useContext, useState } from "react";
import mainLogo from "../../images/mainLogo.webp";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
import { MdOutlineHome } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const [appState, setAppState] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <header className="flex justify-between fixed w-full top-0 left-0 py-4 bg-white z-10">
      <section className="ml-10 mt-4">
        <img src={mainLogo} className="w-24 h-auto rounded-full" alt="logo" />
      </section>
      <section className="flex">
        <ul className="flex text-base p-4 m-4">
          <li className="px-4 hover:text-orange-400">
            <Link to={"/"} className="flex justify-center items-center">
              <MdOutlineHome size={20} />
              Home
            </Link>
          </li>
          <li className="px-4 hover:text-orange-400">
            <Link to={"/about"} className="flex justify-center items-center">
              <MdInfoOutline size={20} />
              About Us
            </Link>
          </li>
          <li className="px-4 hover:text-orange-400">
            <Link to={"/contact"} className="flex justify-center items-center">
              <MdCall size={20} />
              Contact
            </Link>
          </li>
          <li>
            <span className="flex justify-center items-center">
              <MdPerson size={20} />
              {loggedInUser}
            </span>
          </li>
          <li className="px-4 hover:text-orange-400 cursor-pointer">
            <div>
              <span></span>
              <span
                onClick={() =>
                  appState === "Login"
                    ? setAppState("Log-Out")
                    : setAppState("Login")
                }
              >
                <span className="flex justify-center items-center">
                  {appState === "Login" ? (
                    <MdLogin size={20} className="mr-1" />
                  ) : (
                    <MdLogout size={20} className="mr-1" />
                  )}
                  {appState}
                </span>
              </span>
            </div>
          </li>
          <li className="px-4 hover:text-orange-400">
            <Link to={"/cart"} className="flex justify-center items-center">
              <MdOutlineShoppingCart size={20} />
              Cart <span>({cartItems.length} items)</span>
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
