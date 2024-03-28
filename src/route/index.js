import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";

export const routes = Object.freeze({
  ROUTE_HOME: "/",
  ROUTE_DETAILS: "/about",
  ROUTE_CONTACT: "/contact",
});

export const AllRoutes = [
  {
    path: routes.ROUTE_HOME,
    page: <Home />,
  },
  {
    path: routes.ROUTE_DETAILS,
    page: <About />,
  },
  // {
  //   path: routes.ROUTE_CONTACT,
  //   page: <Contact />,
  // },
];
