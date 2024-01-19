import React from "react";
import ReactDOM from "react-dom/client";

const JSXHeader = () => <h2 className="title">Welcome to foodOrderApp!!🍕</h2>;

const FuncComp = () => {
  return (
    <div className="container">
      <JSXHeader />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComp />);
