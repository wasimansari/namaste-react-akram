const RestaurantHeadingDetail=(props)=>{
    // console.log("Props",props);
    const {
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        areaName,
        sla,
        aggregatedDiscountInfo
    } = props.restHeadingDetails
    return (
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
                Outlet
                <span className="area-name">{areaName}</span>
              </h4>
            </div>
            <h4 className="maxtime">
              {sla.slaString.toLowerCase()}
            </h4>
            <div className="distance">
              {sla.lastMileTravelString} |{" "}
              {aggregatedDiscountInfo.header}
            </div>
          </div>
        </div>
    )
}

export default RestaurantHeadingDetail;