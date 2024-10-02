import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { restaurant_API } from "../utils/constant";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { cloudinary_Image_Path } from "../utils/constant";

const RestaurantMenu = () => {
  const [restDetail, setRestDetail] = useState([]);
  const [restItemDetails, setRestItemDetails] = useState([]);
  // const [restItemDetails, setRestItemDetails] = useState([]);
  const { resId } = useParams();
  let totalItem;

  useEffect(() => {
    fetchRestaurantDetail();
    return ()=>{
      console.log("component will mount");
    }
  }, []);

  const fetchRestaurantDetail = async () => {
    const data = await fetch(restaurant_API + resId);
    const restaurantDetail = await data.json();

    setRestDetail(restaurantDetail?.data?.cards[2]?.card?.card?.info);
    if(restaurantDetail?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR
        ?.cards[2]?.card?.card?.itemCards && restaurantDetail?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR
        ?.cards[2]?.card?.card?.itemCards.length > 0){
        setRestItemDetails(
          restaurantDetail?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR
            ?.cards[2]?.card?.card
        );
      }
      else{
        setRestItemDetails(
          restaurantDetail?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR
            ?.cards[1]?.card?.card
        );
      }
  };
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    aggregatedDiscountInfo,
  } = restDetail;

  const { itemCards } = restItemDetails;


  return restDetail.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="menu-container">
      <div className="rest-name">
        <h1>{name}</h1>
        <div className="inner-menu-container">
          <div className="menu">
            <ul>
              <li>
                {avgRating} ({totalRatingsString})
              </li>
              <li>{costForTwoMessage}</li>
            </ul>
            <p className="cusines">{cuisines + "  "}</p>
            <div className="outlet">
              <div className="top-circle"></div>
              <div className="mid-line"></div>
              <div className="bottom-circle"></div>
            </div>
            <div className="outlet-name">
              <h4>
                Outlet<span className="area-name">{areaName}</span>
              </h4>
            </div>
            <h4 className="maxtime">{sla.slaString.toLowerCase()}</h4>
            <div className="distance">
              {sla.lastMileTravelString} | {aggregatedDiscountInfo.header}
            </div>
          </div>
        </div>
        <div className="recomm-item">
          {/* <h2>Recommended Item ({itemCards.length})</h2> */}
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          {
            itemCards && itemCards.length > 0 ?(
         
            <ul>
              {
              itemCards.map((item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name}
                  <div className="price">
                    <p
                      className={
                        item.card.info.finalPrice ? "price_strike" : ""
                      }
                    >
                      {item.card.info.price / 100}
                    </p>
                    <span className="final_price">
                      {item.card.info.finalPrice
                        ? item.card.info.finalPrice / 100
                        : ""}
                    </span>
                  </div>
                  <div className="desc-wrap">
                    <span className="description">
                      {item.card.info.description}
                    </span>
                    <img
                      alt="item-logo"
                      src={cloudinary_Image_Path + item.card.info.imageId}
                      className="item-logo"
                    />
                    <button className="add_btn">Add</button>
                  </div>
                </li>
              ))
               
            }
            </ul>
          ):(
            <h2>Recommended Item {itemCards.length}</h2>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
