import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../styles.scss";

/*
header
 ~ logo
 ~ nav items
body
 ~ search
  ~ resto container
    ~ resto card
    ~ resto name, rating , price, cusine
footer
 ~ copyright
 ~ contact
 ~ address
 ~ location
*/

const App = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
