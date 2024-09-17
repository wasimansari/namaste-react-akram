//import common from "../utils/constant";
import {LOGO_URL} from "../utils/constant" // name export to import here

const Header = () => {
    return (
      <div className="header">
        <img
          className="logo"
          src={LOGO_URL}
        />
        <div className="nav-item">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
 
  export default Header;