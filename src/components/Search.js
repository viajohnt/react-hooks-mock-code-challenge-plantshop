import React from "react";

function Search(props) {
  
  function handleChange(event){
    props.setSearch(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={props.search}
      />
    </div>
  );
}

export default Search;
