import React from "react";

function Search({ setSearchitem }) {
    const handleInputChange = (e) => {
        setSearchitem(e.target.value);
    };

    return (
        <div className="search-section">
        <input
            type="text"
            placeholder="Search for books"
            onChange={handleInputChange} // Handle input change to update search
        />
        </div>
    )
}

export default Search;
