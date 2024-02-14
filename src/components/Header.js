import { useState } from "react";
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [appState, setAppState] = useState("Login");
  return (
    <header className="flex justify-between">
      <section className="m-4 ml-10">
        <img src={logo} className="w-24 h-auto rounded-full" alt="logo" />
      </section>
      <section className="flex">
        <ul className="flex text-base p-4 m-4">
          <li className="px-4 hover:text-orange-400">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 hover:text-orange-400">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 hover:text-orange-400">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4 hover:text-orange-400">Cart</li>
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
                {appState}
              </span>
            </div>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
