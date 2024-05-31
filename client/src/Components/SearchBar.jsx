import React from "react";
import { useSearchBar } from "../Context/SearchBarContext";

const SearchBar = () => {
    const { searchBarTerm, setSearchBarTerm } = useSearchBar();

    return (
        <input
            type="text"
            value={searchBarTerm}
            onChange={(e) => setSearchBarTerm(e.target.value)}
            placeholder="Search products..."
            className=" p-2 w-80 mt-2 text-black  bg-blue-100"
        />
    );
};

export default SearchBar;
