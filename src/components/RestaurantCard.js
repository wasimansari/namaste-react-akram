
const RestaurantCard = (props) => {
    const { restObj } = props;
    const {name,image,cuisine,rating}=restObj?.info;
    return (
      <div className="rest-card">
        <img
          alt="rest-logo"
          src={image.url}
          className="rest-logo"
        />
        <h3>{name}</h3>
        <h4>Rating : {rating.aggregate_rating}</h4>
        <h4>Review : {rating.rating_subtitle}</h4>
        {
          cuisine.map((item,index)=><span key={index}>{item.name}</span>)
        }
      </div>
    );
  };

  export default RestaurantCard