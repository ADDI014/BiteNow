import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();
  
        console.log(json);

        setResInfo(json.data);
    };

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    console.log(itemCards);

    return resInfo == null ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h2>{costForTwoMessage}</h2>
            <h2>BreakFast</h2>
            <ul>
              {itemCards.map(item => 
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -
                 Rs. {item?.card?.info?.price / 100}
                </li>)}
            </ul>
        </div>
    );
}

export default RestaurentMenu;
