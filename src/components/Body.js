import RestaurantCard from "./RestaurentCard";

import Shimmer from "./Shimmer";
import {useState , useEffect} from "react";

import { Link } from "react-router-dom";

import { HOME_API } from "../utils/constants";

const Body = () => {
  //local state variable
  const [listofRestaurent, setlistofRestaurent ] = useState([]);
  const [filteredRestaurent , setfilteredRestaurent] = useState([]);

  
  const [searchText , setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  } , [])

  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const json = await data.json();
    const restaurant = json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

    setlistofRestaurent(restaurant);
    setfilteredRestaurent(json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  }

    return listofRestaurent.length == 0 ? <Shimmer/> :  (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="Search-box" value={searchText}  onChange={(e) => setSearchText(e.target.value)} ></input>
            <button onClick={() => {
              //filter the restaurent card and update the UI 
              //searchText
              console.log(searchText);
              const filteredRestaurentData = listofRestaurent.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurent(filteredRestaurentData);
            }}>Search</button>
          </div>
        <button className="filter-btn" 
          onClick={() => {
          const filteredData = listofRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          setlistofRestaurent(filteredData);
        }}>Top Rated restaurent</button>
        </div>
        <div className="res-container"> 
        {filteredRestaurent.map((restaurent) => (
            <Link key={restaurent.info.id} to={"/restaurent/"+restaurent.info.id}><RestaurantCard resdata={restaurent} /></Link> 
          ))}
        </div>
      </div>
    );
  }


  export default Body;