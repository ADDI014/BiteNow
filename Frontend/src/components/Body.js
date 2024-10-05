import RestaurantCard , {withPromotedLabel} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurentData from "../utils/useRestaurentData";
import UserContext from "../utils/UserContext";
import Home from './Home';


const Body = () => {

  const {filteredRestaurent , listofRestaurent , setfilteredRestaurent } = useRestaurentData();
  const [searchText , setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  if(onlineStatus == false) return <h1>Something went wrong Looks like you are offline</h1>

  const {loggedInUser , setUserName} = useContext(UserContext);

  if(listofRestaurent.length === 0 ) return <Shimmer/>;

    return  (
      <div className="body">
        <div className=" flex">
          <div className="m-4 p-4">        
    <form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required value={searchText}  onChange={(e) => setSearchText(e.target.value)} />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
              //filter the restaurent card and update the UI 
              //searchText
              const filteredRestaurentData = listofRestaurent.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurent(filteredRestaurentData);
            }}>Search</button>
    </div>
</form>

          </div>
        <div className=" m-4 p-4 flex items-center">
        <button className="px-4 py-1 bg-gray-100 rounded-lg" 
          onClick={() => {
          const filteredData = listofRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          setfilteredRestaurent(filteredData);
        }}>Top Rated restaurent</button>
        </div>
        {/* <div className=" m-4 p-4 flex items-center">
          <label>userName :</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div> */}

      
        </div>
        <div>
          <Home/>
        </div>
        <div className="flex flex-wrap"> 
        {filteredRestaurent.map((restaurent) => (
            <Link key={restaurent.info.id} to={"/restaurent/"+restaurent.info.id}>
              {
                restaurent.info.promoted ? <RestaurantCardPromoted resdata={restaurent}/> :   <RestaurantCard resdata={restaurent} />
              }
             </Link> 
          ))} 
        </div>
      </div>
    );
  }


  export default Body;


  