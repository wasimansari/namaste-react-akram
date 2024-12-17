//import common from "../utils/constant";
import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constant" // name export to import here
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  

  const cartItems = useSelector((store)=>store.cart.items) // this component subscribe the store using selector
  console.log("store item are : ", cartItems)

  // console.log(data.loggedInUser);
    return (
      <div className="flex justify-between bg-gray-100 shadow-lg">
        <img
          className="w-[90px]"
          src={LOGO_URL}
        />
        <div className="nav-item">
          <ul className="flex p-4 m-4">
          <li className="px-4 py-2">
              <Link to="/">Online Status<span className={onlineStatus?'online':'offline'}></span></Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/service">Service</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/product">Product</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <li className="px-4 py-2 hover:bg-violet-300 rounded-sm">
              <button className="login-btn" onClick={()=>
                loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login")
              }>{loginBtn}</button>
            </li>
            <li className="px-4 py-2 font-bold">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };
 
  export default Header;