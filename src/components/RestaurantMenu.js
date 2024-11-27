import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { restaurant_API } from "../utils/constant";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { cloudinary_Image_Path } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHeadingDetail from "./RestaurantHeadingDetail";
import RestRecommItem from "./RestRecommItem";

const RestaurantMenu = () => {
  let restHeading = [];
  let recomItemList = [];
  let restRolls = [];
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //custome hook

  restHeading.push(resInfo?.data?.cards[2]?.card?.card?.info);

  restRolls.push(
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card
  );
  if (
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards &&
    resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards.length > 0
  ) {
    recomItemList.push(
      resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
  } else {
    recomItemList.push(
      resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
    if(recomItemList[0]?.categories?.length > 0){
      recomItemList=[];
      resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.categories.forEach(item=>{
          recomItemList.push(item); 
        })
    }
  }
  // console.log("Recommended List",recomItemList)

  return resInfo.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="menu-container">
      <div className="rest-name">
        <h1>{restHeading[0].name}</h1>
        <RestaurantHeadingDetail restHeadingDetails={restHeading[0]}/>
        {/* <div className="recomm-item">
          {recomItemList[0]?.itemCards?.length > 0 ? (
            <ul>
              <h2>Recommended Item ({recomItemList[0].itemCards.length})</h2>
              {recomItemList[0].itemCards.map((item) => (
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
              ))}
            </ul>
          ) : (
            <h2>{recomItemList[0]?.itemCards?.length ? `Recommended Item ${recomItemList[0]?.itemCards?.length}`:""}</h2>
          )}
        </div> */}
        <RestRecommItem recommItem={recomItemList[0]}/> 
          <div className="restRolls">
          {restRolls[0]?.itemCards?.length > 0 ? (
            <ul>
              <h2>
            {restRolls[0].title} ({restRolls[0].itemCards.length})
          </h2>
              {restRolls[0].itemCards.map((item) => (
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
              ))}
            </ul>
          ) : (
            <h2>{restRolls[0]?.itemCards?.length > 0 ?restRolls[0]?.title + `(${restRolls[0]?.itemCards?.length})` : " "}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
