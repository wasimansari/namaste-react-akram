//import common from "../utils/constant";
import { useState } from "react";
import {LOGO_URL} from "../utils/constant" // name export to import here
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <img
          className="logo"
          src={LOGO_URL}
        />
        <div className="nav-item">
          <ul>
          <li>
              <Link to="/">Online Status<span className={onlineStatus?'online':'offline'}></span></Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <button className="login-btn" onClick={()=>
                loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login")
              }>{loginBtn}</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
 
  export default Header;