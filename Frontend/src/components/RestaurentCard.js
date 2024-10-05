
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resdata} = props;

    console.log(resdata);
  
    const {
    cloudinaryImageId = "",
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating = 0,
  } = resdata?.info || {};
  
    return (
  <div className="max-w-sm w-[275px] h-[350px] rounded-lg overflow-hidden m-4 p-4 shadow-lg hover:bg-gray-200">
  <img className="w-full h-[150px] object-cover rounded-lg" src={CDN_URL + cloudinaryImageId} alt="Sunset in the mountains" />
  <div className="px-6 py-4 h-[180px] overflow-hidden">
    <div className="font-bold text-xl mb-2 overflow-hidden text-ellipsis whitespace-nowrap">{name}</div>
    <p className="text-gray-700 text-base overflow-hidden text-ellipsis">{cuisines.join(", ")}</p>
    <p>{avgRating}stars</p>
  </div>
</div> 
    );
  }


  export const withPromotedLabel = (RestaurantCard) => {
     return (props) => {
      const { resdata } = props;
      const { costForTwo } = resdata?.info;
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg "> {costForTwo}</label>
          <RestaurantCard {...props}/>
        </div>
      )
     }
  }

  
  export default RestaurantCard;