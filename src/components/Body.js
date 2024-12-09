import RestaurantCard, {PromotedRestaurantCard} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { restaurant_Card_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser,setUserName} = useContext(UserContext);

  const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(restaurant_Card_API);
    const jsonData = await data.json();
    setTopRestaurantData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  handleRating = () => {
    const topRestaurant = topRestaurantData.filter(
      (item) => item.info.avgRating > 4.5
    );
    setTopRestaurantData(topRestaurant);
  };

  searchData = () => {
    if (searchText) {
      const topRestaurant = topRestaurantData.filter((item) =>
        item.info.cuisines.some(
          (cuisine) => cuisine.toLowerCase() === searchText.toLowerCase()
        )
      );
      if (topRestaurant?.length) {
        setTopRestaurantData(topRestaurant);
      } else {
        alert("Searched Item Not Available");
        setSearchText("");
      }
    } else {
      alert("What item need to search ?");
    }
  };

  if(!onlineStatus) return <div>Check your internet connection!!</div>  

  return topRestaurantData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body-container">
      <div className="filter m-4 p-4">
        <input
          type="text"
          className="enabled:border-gray-200 border rounded-md p-2 m-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search..."
        />

        <button className="p-2 m-2 bg-green-600 rounded-md border-r-0 text-white" onClick={searchData}>
          Search
        </button>

        <button className="p-2 m-2 bg-amber-600 rounded-md border-r-0 text-white" onClick={handleRating}>
          Top Rated
        </button>
        <button
          className="p-2 m-2 bg-violet-400 rounded-md border-r-0 text-white"
          onClick={() => {
            setSearchText("");
            fetchData();
          }}
        >
          Reset Filter
        </button>
        <label>User Name: </label>
        <input type="text" className="border border-black" value={loggedInUser} 
         onChange={(e)=>setUserName(e.target.value)} />
      </div>
      <div className="flex flex-wrap">
        {topRestaurantData.map((foodItem) => (
          <Link key={foodItem.info.id} to={"/restaurants/" + foodItem.info.id}>
            {
              
              foodItem.info.avgRating > 4.3 ?(<RestaurantCardPromoted restObj={foodItem}/>) :(<RestaurantCard restObj={foodItem} />)
            }
            {/* <RestaurantCard restObj={foodItem} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
