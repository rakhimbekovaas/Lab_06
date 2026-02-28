import { createBrowserRouter, RouterProvider }
 from "react-router-dom";
 import React from "react";
 import ReactDom from "react-dom/client"
 import Layout from "./Layout";
 import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import NotFound from "./NotFound";

// task_2

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDom.createRoot (
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);