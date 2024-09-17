import RestaurantCard from "./RestaurantCard"
import foodListData from "../utils/mockData"
import { useState } from "react";

const Body = () => {
  console.log('useState');
    const [topRestaurantData, setTopRestaurantData] = useState(foodListData);
    handleRating=()=>{  
      const topRestaurant = foodListData.filter(item=>item.info.rating.aggregate_rating > 4);
      setTopRestaurantData(topRestaurant);
    }

    return (
      <div className="body-container">
        <div className="filter">
            <button className="filter-btn" onClick={handleRating}>
                Top Rated
            </button>
        </div>
        <div className="rest-container">
          {
          topRestaurantData.map(foodItem => <RestaurantCard key={foodItem.info.resId} restObj={foodItem} />)
          }

        </div>
      </div>
    );
  };

  export default Body;