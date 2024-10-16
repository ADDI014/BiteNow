import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import useRestaurentData from '../utils/useRestaurentData';
import RestaurantCard from './RestaurentCard';
import { Link } from 'react-router-dom';

const Search = () => {
  const { filteredRestaurent, listofRestaurent, setfilteredRestaurent } = useRestaurentData();
  const [searchText, setSearchText] = useState("");

  return (
    <div className="mt-32 min-h-screen flex flex-col items-center pb-20">
      {/* Search bar - hidden on small screens */}
      <div className="hidden md:flex w-full max-w-lg border rounded-full focus-within:shadow pl-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Filter the restaurant card and update the UI
            const filteredRestaurantData = listofRestaurent.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurent(filteredRestaurantData);
          }}
          className="flex items-center w-full"
        >
          <input
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Product here"
            className="w-full outline-none px-2 py-1"
          />
          <button type="submit" className="text-lg h-8 bg-orange-500 flex items-center justify-center rounded-r-full text-white px-4">
            <GrSearch />
          </button>
        </form>
      </div>

      {/* Restaurant cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {filteredRestaurent.map((restaurent) => (
          <Link key={restaurent?.info?.id} to={`/restaurent/${restaurent?.info?.id}`}>
            <RestaurantCard resdata={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
