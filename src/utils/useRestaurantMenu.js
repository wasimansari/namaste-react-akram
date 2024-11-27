import { useEffect, useState } from "react";
import { restaurant_API } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [restInfo,setRestInfo] = useState([]);

    useEffect(()=>{
        fetchRestaurantDetail();
    },[]);

    const fetchRestaurantDetail = async () => {
        const data = await fetch(restaurant_API + resId);
        const restData = await data.json();
        setRestInfo(restData);
      };

    return restInfo;
}

export default useRestaurantMenu;