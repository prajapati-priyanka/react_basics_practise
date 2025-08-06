import RestaurantCard from "../RestaurantCard";
import "./Main.css";

const Main = () => {
  return (
    <main className="main-container">
      <h3 className="main-heading">Restaurants Available to Serve Now</h3>
      <section className="res-card-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </section>
    </main>
  );
};

export default Main;
