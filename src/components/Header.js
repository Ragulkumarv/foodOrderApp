import { useState } from "react";
import logo from "../../images/logo.webp";

const Header = () => {
  const [appState, setAppState] = useState("Login");
  return (
    <header className="header">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      <section className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
