import "./Main/Main.css";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,avgRating,sla:{slaString}, cuisines,locality} = resData;
    console.log("resData", resData);
  return (
    <div className="res-card">
      <figure className="res-image">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/24/8dcf7245-861c-4c67-8d4c-a73927422e62_946888.jpg" />
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
