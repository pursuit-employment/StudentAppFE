import { useState } from "react";
import "./SearchFilter.scss";

function SearchFilter({ setFunction, students }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchBar(e) {
    const searchValue = e.target.value;
    setSearchInput(searchValue);

    if (!searchValue) {
      setFunction(students);
    } else {
      const searchInputValuesArr = searchValue.toLowerCase().split(" ");
      filterStudents(searchInputValuesArr, students, setFunction);
    }
  }

  // Handle Student Filter function
  function filterStudents(inputArr, studentArr, setFunction) {
    const filteredStudents = studentArr.filter((student) => {
      const first = student.firstName;
      const last = student.lastName;
      const fullName = `${first} ${last}`.toLowerCase();
      const fullNameIncludesSearchValue = inputArr.every((el) =>
        fullName.includes(el)
      );
      if (fullNameIncludesSearchValue) {
        return student;
      }
    });
    setFunction(filteredStudents);
  }

  return (
    <label className="searchBar">
      <input
        type="text"
        placeholder="Search by name"
        className="searchBar_input"
        onChange={(event) => handleSearchBar(event)}
      />
    </label>
  );
}

export default SearchFilter;
