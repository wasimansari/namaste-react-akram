import React, { lazy, Suspense, useEffect, useState } from "react";
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
// import Grocery from "./components/Grocery";

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=>import("./components/Grocery"));


const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    //make api call and send to username and password and get response like below object
    const data = {
      name:"Wasim Akram"
    }
    setUserName(data.name);
  },[]);


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
    {/* <UserContext.Provider value={{loggedInUser:"Ansari"}}> */}
      <Header />
      {/* </UserContext.Provider> */}
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
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
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/grocery',
          element:<Suspense fallback={<h1>Loadding....</h1>}><Grocery/></Suspense>
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
