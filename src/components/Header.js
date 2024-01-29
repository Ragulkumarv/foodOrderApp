import { useState } from "react";
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [appState, setAppState] = useState("Login");
  return (
    <header className="header">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      <section className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <li>
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
