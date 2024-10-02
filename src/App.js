import React from "react";
import ReactDOM from "react-dom/client";
import { zomato } from "../zomato.json";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:'/service',
          element:<Service/>
        },
        {
          path:'/product',
          element:<Product/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/restaurants/:resId',
          element:<RestaurantMenu/>
        }
    ],
    errorElement:<Error/>
  },
  
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)
