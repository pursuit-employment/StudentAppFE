import { useState } from "react";
import "./SearchFilter.scss";

function SearchFilter({ setFunction, students }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchBar(e) {
    const searchValue= e.target.value;
    setSearchInput(searchValue);
// More descriptive step by step labeling and variables
    if (!searchValue) {
      setFunction(students);
    } else {
        // const splitSearchValue = searchValue.split(" ")
        const onlyLettersVal = searchValue
        .split("")
        .filter((el) => /[a-z]/gi.test(el))
        .join("");
      // filters out symbols for val
    //   const onlyLettersVal = searchValue
    //     .split("")
    //     .filter((el) => /[a-z]/gi.test(el))
    //     .join("");
      filterStudents(onlyLettersVal, students, setFunction);
    }
  }

  // Handle Filter function
  function filterStudents(val, arr, setFunction) {
    const filteredStudents = arr.filter((el) => {
      const first = el.firstName;
      const last = el.lastName;
      const regex = new RegExp(val, "gi");

      if (regex.test(first) || regex.test(last) || regex.test(`${first}${last}`)) {
        return el;
      }
      
    });
    setFunction(filteredStudents);
  }

  return (
    <label className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        className="search-filter-searchbar"
        onChange={(event) => handleSearchBar(event)}
      />
    </label>
  );
}

export default SearchFilter;
