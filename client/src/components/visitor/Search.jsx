import "./visitor.css";
// import { useState, useEffect } from "react";

const Search = ({handleSearch, setMapshow, mapShow, setCity, setSelectedFilter, selectedFilter, city}) => {

  const submitForm = (e) => {
    e.preventDefault();
    handleSearch(selectedFilter, city, 'type')
  }
  const selectType = (type) => {
    if (type === selectedFilter) {
      setSelectedFilter(undefined)
      handleSearch(undefined, city, 'type')
    } else {

      setSelectedFilter(type)
      handleSearch(type, city, 'type')
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center searchContainer">
        <form onSubmit={(e) => submitForm(e)} className="d-inline-flex align-items-center justify-content-between search-nav-form p-1 mt-4 mx-auto searchBar">
          <input placeholder="Search" className="mx-2 py-2 " onChange={(e) => setCity(e.target.value)}/>
          <i className="fa fa-search p-2 magnifyingGlass" style={{ fontSize: "20px" }}></i>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <button className={selectedFilter === 'restaurant' ?'selectedFilter' : 'filterBtn'} onClick={() => selectType("restaurant")}>
          Resturant
        </button>
        <button className={selectedFilter === 'musuem' ?'selectedFilter' : 'filterBtn'} onClick={() => selectType("musuem")}>Musuem</button>
        <button className={selectedFilter === 'beach' ?'selectedFilter' : 'filterBtn'} onClick={() => selectType("beach")}>Beach</button>
        <button className={selectedFilter === 'park' ?'selectedFilter' : 'filterBtn'} onClick={() => selectType("park")}>Park</button>
          <button onClick={() => setMapshow(!mapShow)}className='map'><i className='fa fa-map-marker'></i></button>


      </div>
    </div>
  );
};
export default Search;
