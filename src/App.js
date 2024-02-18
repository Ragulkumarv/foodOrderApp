import React, { StrictMode, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "../styles.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import ContactUs from "./components/ContactUs";
// import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
// import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";

/**start of lazy load components */
const ContactUs = lazy(() => import("./components/ContactUs"));
const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
/**end of lazy load components */

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
  const [userData, setUserData] = useState();
  useEffect(() => {
    const testUser = {
      loggedInUser: "Ragul",
      email: "ragulkumarv333gmail.com",
    };
    setUserData(testUser);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ ...userData }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense>
            <RestaurantMenu />
          </Suspense>
        ),
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
