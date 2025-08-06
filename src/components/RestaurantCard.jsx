import "./Main/Main.css";
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <figure className="res-image">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/24/8dcf7245-861c-4c67-8d4c-a73927422e62_946888.jpg" />
      </figure>
      <div className="res-body">
        <p className="res-name">Apni Chopati</p>
        <span className="res-rating">3.6</span> *{" "}
        <span className="res-delivery-time">40-45 mins</span>
        <p className="res-cuisines">
          Pizzas, Italian Pastas, Desserts, North India
        </p>
        <p className="res-address">Hinjewadi Chowk, Pune</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
