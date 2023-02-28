import React from "react";
import { SearchIcon } from "../../lib/helpers/Icons";
import { useDispatch } from "react-redux";
import { search } from "./Store/hotelDataSlice";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const HandleSearch = (e) => {
    dispatch(search(e.target.value));
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex  items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-gray-50 "
          placeholder="Search for a hotel..."
          onChange={(e) => HandleSearch(e)}
        />
      </div>
    </div>
  );
};
