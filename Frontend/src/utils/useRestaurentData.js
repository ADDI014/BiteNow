import {useState , useEffect} from "react";
import { HOME_API } from "./constants";
import apiData from "./apiData";


const useHomeAPI = () =>{

const [listofRestaurent, setlistofRestaurent ] = useState([]);
  const [filteredRestaurent , setfilteredRestaurent] = useState([]);
    useEffect(() => {
        loadData();
    },[]);

    // const fetchData =async () =>{
    //     try{
    //         const data = await fetch(HOME_API);
    //         console.log(data);
    //         const json = await data.json();

    //         console.log(json);
    //         const restaurant = json?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    
    //         setlistofRestaurent(restaurant);
    //         setfilteredRestaurent(restaurant); 
    //     }
    //     catch (error) {
    //         console.error("Error fetching restaurant data: ", error);
    //       }
    // }

    const loadData = () => {
        try {
            const restaurant = apiData?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

            setlistofRestaurent(restaurant || []);
            setfilteredRestaurent(restaurant || []);
        }
        catch (error) {
            console.error("Error loading restaurant data: ", error);
          }
    }

    return {filteredRestaurent ,listofRestaurent,  setfilteredRestaurent};
}


export default useHomeAPI;