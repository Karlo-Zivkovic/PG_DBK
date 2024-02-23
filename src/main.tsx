import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Naslovnica from "./pages/Naslovnica";
import Dokumenti from "./pages/Dokumenti";
import AboutUs from "./pages/AboutUs";
import Fotogalerije from "./pages/Fotogalerije";
import Kontakt from "./pages/Kontakt";
import BlogItem from "./components/BlogItem";
import GaleryItem from "./components/GaleryItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/naslovnica" replace />,
      },
      {
        path: "naslovnica",
        element: <Naslovnica />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "fotogalerije",
        element: <Fotogalerije />,
      },
      {
        path: "dokumenti",
        element: <Dokumenti />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
      {
        path: "atmosferaUGimnaziji",
        element: <GaleryItem />,
      },

      {
        path: "covidBlog",
        element: <BlogItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
