import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const { data, status } = response;
    if (status === 200) {
      const responseData =
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(responseData);
    }
  };
  useEffect(() => {
    console.log("useEffect is called")
    fetchData();
  }, []);


  console.log("before return;")
  return (
    <main className="main-container">
      <h3 className="main-heading">Restaurants Available to Serve Now</h3>
      <section className="res-card-container">
        {listOfRestaurants?.map((card) => (
          <RestaurantCard key={card?.info?.id} resData={card.info} />
        ))}
      </section>
    </main>
  );
};

export default Main;
