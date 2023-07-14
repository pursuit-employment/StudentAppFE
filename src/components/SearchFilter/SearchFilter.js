import { useState } from "react";
import { handleSearchBar } from "./Functions/SearchFilterFunctions";
import "./SearchFilter.scss";

function SearchFilter({ setSearchResult, students }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <label className="searchBar">
      <input
        type="text"
        value={searchInput}
        placeholder="Search by name"
        className="searchBar_input"
        onChange={(event) => handleSearchBar(event, setSearchInput, setSearchResult, students)}
      />
    </label>
  );
}

export default SearchFilter;
