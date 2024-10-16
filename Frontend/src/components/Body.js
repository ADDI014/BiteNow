import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
// import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useRestaurentData from "../utils/useRestaurentData";
// import UserContext from "../utils/UserContext";
import Home from "./Home";

const Body = () => {
  const { filteredRestaurent, listofRestaurent, setfilteredRestaurent } = useRestaurentData();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


  // const { loggedInUser, setUserName } = useContext(UserContext);
  console.log(listofRestaurent);

  if (listofRestaurent.length === 0) return <Shimmer />;

  return (
    <div className="body  mt-32">
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredData = listofRestaurent.filter(
                (res) => res?.info?.avgRating > 4
              );
              setfilteredRestaurent(filteredData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div>
        <Home />
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurent.map((restaurent) => (
          <Link key={restaurent?.info?.id} to={"/restaurent/" + restaurent?.info?.id}>
            {restaurent?.info?.promoted ? (
              <RestaurantCardPromoted resdata={restaurent} />
            ) : (
              <RestaurantCard resdata={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
