import React from "react";

const Search = ({ searchedString, callbackSearch }) => {
    return (
        <>
            <label htmlFor="search">Search a food in the list</label>
            <input
                type="text"
                name="search"
                placeholder="Search a food"
                className="input"
                value={searchedString}
                onChange={(e) => callbackSearch(e.target.value)}
            />
        </>
    );
};

export default Search;