import * as React from "react";
import type { RouteObject } from "react-router-dom";
import {Layout, Home, About, NoMatch, Dashboard} from "./pages/layout"

let routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About />},
      { path: "/dashboard", element: <Dashboard />},
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export { routes};
