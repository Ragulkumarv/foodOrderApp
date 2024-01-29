import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../styles.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

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
      <Outlet />
    </div>
  );
};
/** Below commented part is without children */
// const appRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <ContactUs />,
//   },
// ]);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>
);
