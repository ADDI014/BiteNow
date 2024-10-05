import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurentData from "../utils/useRestaurentData";

const Body = () => {

  const {filteredRestaurent , listofRestaurent , setfilteredRestaurent } = useRestaurentData();
  const [searchText , setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus == false) return <h1>Something went wrong Looks like you are offline</h1>

  if(listofRestaurent.length === 0 ) return <Shimmer/>;

    return  (
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
          setfilteredRestaurent(filteredData);
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