import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { restaurant_Card_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    const topRestaurant = topRestaurantData.filter((item) =>
      item.info.cuisines.some(
        (cuisine) => cuisine.toLowerCase() === searchText.toLowerCase()
      )
    );
    setTopRestaurantData(topRestaurant);
  };

  return topRestaurantData.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body-container">
      <div className="filter">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search..."
        />

        <button className="search-btn" onClick={searchData}>
          Search
        </button>

        <button className="filter-btn" onClick={handleRating}>
          Top Rated
        </button>
        <button
          className="reset-filter-btn"
          onClick={() => {
            setSearchText("");
            fetchData();
          }}
        >
          Reset Filter
        </button>
      </div>
      <div className="rest-container">
        {
          topRestaurantData.map((foodItem) => (
            <Link
              key={foodItem.info.id}
              to={"/restaurants/" + foodItem.info.id}
            >
              <RestaurantCard restObj={foodItem} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
