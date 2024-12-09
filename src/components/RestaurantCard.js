import { cloudinary_Image_Path } from "../utils/constant";

const RestaurantCard = (props) => {
    const { restObj } = props;
    const {name,cuisines,cloudinaryImageId,areaName,avgRating}=restObj?.info;

    return (
      <div className="p-3 m-2 w-[250px] bg-gray-100 hover:bg-gray-300 rounded-md">
        <img
          alt="rest-logo"
          src={cloudinary_Image_Path+cloudinaryImageId}
          className=""
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

  export const PromotedRestaurantCard = (RestaurantCard)=>{
    return (props)=>{
      const { restObj } = props;
    const {name,cuisines,cloudinaryImageId,areaName,avgRating}=restObj?.info;
      return(
        <div>
            <label className="absolute mt-4 ml-2 px-1 rounded-sm text-orange-600 bg-gray-100 hover:bg-gray-300">{avgRating}</label>
            <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard