import {useState , useEffect} from "react";
import { HOME_API } from "./constants";


const useHomeAPI = () =>{

const [listofRestaurent, setlistofRestaurent ] = useState([]);
  const [filteredRestaurent , setfilteredRestaurent] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData =async () =>{
        const data = await fetch(HOME_API);
        console.log(data);
        const json = await data.json();
        const restaurant = json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

        setlistofRestaurent(restaurant);
        setfilteredRestaurent(restaurant);
    }

    return {filteredRestaurent ,listofRestaurent,  setfilteredRestaurent};
}


export default useHomeAPI;