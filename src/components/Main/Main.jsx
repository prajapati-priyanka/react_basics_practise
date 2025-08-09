import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import "./Main.css";
import axios from "axios";
import Filter from "../Filter/Filter";

const Main = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // set search text
  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  // when search btn called
  const handleSearch = () => {
    const filteredRes = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredRes);
    // setListOfRestaurants(filteredRes);
  };

  // fetch cards data
  const fetchData = async () => {
    const response = await axios.get(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const { data, status } = response;
    if (status === 200) {
      const responseData =
        data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(responseData);
      setFilteredRestaurants(responseData);
    }
  };

  const filterTopRatedRes = ()=>{
    const filteredTopRatedRes = listOfRestaurants.filter(res => res.info.avgRating > 4.2)
    setFilteredRestaurants(filteredTopRatedRes);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main-container">
      <h3 className="main-heading">Restaurants Available to Serve Now</h3>
      <Filter
        searchText={searchText}
        handleSearchText={handleSearchText}
        handleSearch={handleSearch}
        filterTopRatedRes= {filterTopRatedRes}
      />
      <section className="res-card-container">
        {filteredRestaurants?.map((card) => (
          <RestaurantCard key={card?.info?.id} resData={card.info} />
        ))}
      </section>
    </main>
  );
};

export default Main;
