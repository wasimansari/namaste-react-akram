import { cloudinary_Image_Path } from "../utils/constant";

const RestaurantCard = (props) => {
    const { restObj } = props;
    const {name,cuisines,cloudinaryImageId,areaName,avgRating}=restObj?.info;

    return (
      <div className="rest-card">
        <img
          alt="rest-logo"
          src={cloudinary_Image_Path+cloudinaryImageId}
          className="rest-logo"
        />
        <h3>{name}</h3>
        <h4>Rating : {avgRating}</h4> 
        <h4>Address : {areaName}</h4> 
        {
          cuisines.slice(0, 2).map((item,index)=><span key={index}>{item}</span>)
        }
      </div>
    );
  };

  export default RestaurantCard