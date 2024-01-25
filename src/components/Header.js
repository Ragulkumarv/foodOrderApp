import logo from "../../images/logo.webp";

const Header = () => {
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
        </ul>
      </section>
    </header>
  );
};

export default Header;
