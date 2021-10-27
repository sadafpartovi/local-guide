import "./visitor.css";
import Search from "./Search";
import { useState, useEffect } from "react";
import SuggestedCard from "./SuggestedCard";
import axios from "axios";
import FinalMap from './Map.jsx'
import Nav from '../nav/NavBar';


const Visitor = () => {
  const [places, setPlaces] = useState([]);
  const [mapShow, setMapshow] = useState(false)
  const [page, setPage] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState();
  const [city, setCity] = useState('los angeles')
  const [load, setLoad] = useState(true)

  useEffect(() => {
    handleSearch(selectedFilter, city, 'normal')
  }, [page])



  const handleSearch = async (type, city, mode) => {

    try {
      let query = `?page=${page}`;
      if (type) query += `&type=${type}`
      const { data } = await axios.post(`/search${query}`, {city});
      if (data.length < 4 ) setLoad(false);
      else setLoad(true)
      if(mode === 'normal') {
        setPlaces([...places, ...data])
      } else setPlaces(data)

    } catch (err) {
      console.log(err)
    }
  };

  const coordinate = places.map((item, key) => {
    return {lat: item.lat, lng: item.lng}
  })

  const handleLike = async (id) => {
    try {
      await axios.get(`like/${id}`);

    } catch (err) {
      console.log(err);
    }
  };

  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  // function success(pos) {
  //   var crd = pos.coords;

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // navigator.geolocation.getCurrentPosition(success, error, options);



  return (
    <>
    <Nav/>
    <div>
      <Search handleSearch={handleSearch} setMapshow={setMapshow} mapShow={mapShow} setSelectedFilter={setSelectedFilter} setCity={setCity} selectedFilter={selectedFilter} city={city} />
      <div className='d-flex justify-content-center'>
      {mapShow && <FinalMap coordinate={coordinate}/>}
      </div>


      {places.map((item, key) => (
        <SuggestedCard
          img={item.img}
          description={item.description}
          title={item.title}
          handleLike={() => handleLike(item._id)}
          like={item.like}

        />
      ))}

     {load && <div className="d-flex justify-content-center"> <button className='selectedFilter' onClick={()=> setPage(page +1)}>Load More</button> </div>}
    </div>
    </>
  );
};
export default Visitor;
