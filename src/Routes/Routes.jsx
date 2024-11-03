import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home";
import Cofees from "../Page/Cofees";
import Drashbroad from "../Page/Drashbroad";
import CofeeCard from "../Componets/CofeeCard";
// Custom error component

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <>Error Page</>,  // Use a custom error page
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"), // Adjusted path
        children: [
          {
            path: "/", // Removed leading slash for nested path
            element: <CofeeCard />,
            loader:()=>fetch("/coffees.json")
          },
          {
            path: "/category/:category", // Removed leading slash for nested path
            element: <CofeeCard />,
            loader:()=>fetch("/coffees.json")
          },
        ],
      },
      {
        path: "coffees",
        element: <Cofees />,
      },
      {
        path: "dashboard",
        element: <Drashbroad />,
      },
    ],
  },
]);

export default routes;
