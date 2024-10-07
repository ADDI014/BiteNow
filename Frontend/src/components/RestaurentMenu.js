import {useState} from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams} from "react-router-dom";
// import apiData from "../utils/apiData";

const RestaurentMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurentMenu(resId);
    const [showIndex , setShowIndex] = useState(null);
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const categories = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return resInfo == null ? (
        <Shimmer />
    ) : (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category , index) => (
                <ResCategory data={category?.card?.card} 
                key={category?.card.card.title} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(showIndex === index ? null : index)}    //set the show index for children
                />
            ))}
        </div>
    );
}
export default RestaurentMenu;



