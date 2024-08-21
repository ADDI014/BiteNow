import RestaurantCard from "./RestaurentCard";

import Shimmer from "./Shimmer";
import {useState , useEffect} from "react";





const Body = () => {
  //local state variable
  const [listofRestaurent, setlistofRestaurent ] = useState([]);
  const [filteredRestaurent , setfilteredRestaurent] = useState([]);

  const [searchText , setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  } , [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=30.7046486&lng=76.71787259999999");

    const json = await data.json();
    const restaurants = json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

    setlistofRestaurent(restaurants);
    setfilteredRestaurent(json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  }

  //conditional rendering
  // if(listofRestaurent.length == 0){
  //   return <Shimmer/>
  // }

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
            <RestaurantCard key={restaurent.info.id} resdata={restaurent} />
          ))}
        </div>
      </div>
    );
  }


  export default Body;