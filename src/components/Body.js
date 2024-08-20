import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockData";

import {useState} from "react";





const Body = () => {

  //local state variable
  const [listofRestaurent, setlistofRestaurent ] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" 
          onClick={() => {
          const filteredData = listofRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          setlistofRestaurent(filteredData);
        }}>Top Rated restaurent</button>
        </div>
        <div className="res-container"> 
        {listofRestaurent.map((restaurent) => (
            <RestaurantCard key={restaurent.info.id} resdata={restaurent} />
          ))}
        </div>
      </div>
    );
  }




  export default Body;