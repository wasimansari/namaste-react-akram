import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { restaurant_API } from "../utils/constant";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { cloudinary_Image_Path, itemCategory } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantHeadingDetail from "./RestaurantHeadingDetail";
import RestRecommItem from "./RestRecommItem";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); //custome hook

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => cat.card?.card?.["@type"] === itemCategory
    );

  if (!resInfo || !resInfo?.data?.cards?.[2]?.card?.card?.info)
    return <ShimmerUi />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  // const {itemCards} = resInfo?.card[2]?.groupedCard.cardGroupMap?.REGULAR?.card[1]?.card?.card;
  //console.log(resInfo?.card[2]?.groupedCard.cardGroupMap?.REGULAR?.cards);

  // restHeading.push(resInfo?.data?.cards[2]?.card?.card?.info);
  // console.log(resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR)
  // restRolls.push(
  //   resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
  //     ?.card
  // );
  // if (
  //   resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.itemCards &&
  //   resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.itemCards.length > 0
  // ) {
  //   recomItemList.push(
  //     resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card
  //   );
  // } else {
  //   recomItemList.push(
  //     resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //       ?.card
  //   );
  //   if(recomItemList[0]?.categories?.length > 0){
  //     recomItemList=[];
  //     resInfo?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //       ?.card?.categories.forEach(item=>{
  //         recomItemList.push(item);
  //       })
  //   }
  // }

  return resInfo.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      {/* 
          categories accordion
          RestaurantCategory is a controlled component because it control itemList compnent with the help of 
          props showitem to expand and collapse 
       */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
      {/* <div className="rest-name">
        <h1 className="font-bold my-8 text-2xl" >{restHeading[0].name}</h1>
        <RestaurantHeadingDetail restHeadingDetails={restHeading[0]}/>
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
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
