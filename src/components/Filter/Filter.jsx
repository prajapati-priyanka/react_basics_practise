import { useState } from "react";
import "./Filter.css";

const Filter = ({searchText, handleSearchText, handleSearch,filterTopRatedRes}) => {
 
  return (
    <section className="filter-container flex">
      <div className="search-container">
        <input type="search"  value={searchText} onChange={handleSearchText} />
        <button className="btn" onClick = {handleSearch}>Search</button>
      </div>
      <button className="btn" onClick={filterTopRatedRes}>Top Rated Restaurant</button>
    </section>
  );
};

export default Filter;
