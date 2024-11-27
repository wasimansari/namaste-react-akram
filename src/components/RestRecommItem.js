import { cloudinary_Image_Path } from "../utils/constant";
const RestRecommItem=(props)=>{
    // const {recomItemList} = props.recommItem;
    const { itemList } = props.recommItem
    console.log("props is" ,props.recommItem.itemCards);
    console.log("item is : ",itemList)
    return(
        <div>
            <div className="recomm-item">
          {props?.recommItem?.itemCards?.length > 0 ? (
            <ul>
              <h2>Recommended Item ({props?.recommItem?.itemCards?.length})</h2>
              {props?.recommItem?.itemCards.map((item) => (
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
        </div>
        </div>
    )
}

export default RestRecommItem;