import "./Main/Main.css";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,avgRating,sla:{slaString}, cuisines,locality,cloudinaryImageId} = resData;
    // console.log("resData", resData);
  return (
    <div className="res-card">
      <figure className="res-image">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} />
      </figure>
      <div className="res-body">
        <p className="res-name">{name}</p>
        <span className="res-rating">{avgRating}</span> *{" "}
        <span className="res-delivery-time">{slaString}</span>
        <p className="res-cuisines">
          {cuisines.join(",")}
        </p>
        <p className="res-address">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
