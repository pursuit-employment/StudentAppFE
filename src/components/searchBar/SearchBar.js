import { useEffect } from "react";
import "./SearchBar.scss";

export default function SearchBar({
  setFilteredStudents,
  students,
  searchBarInput,
  setSearchBarInput,
}) {
  useEffect(() => {
    setFilteredStudents(students);

    if (searchBarInput !== "") {
      const searchBarInputs = searchBarInput.split(" ");
      setFilteredStudents(
        students.filter(({ firstName, lastName }) => {
          const fullName = firstName + " " + lastName;
          return searchBarInputs.every((e) =>
            fullName.toLowerCase().includes(e)
          );
        })
      );
    }
  }, [searchBarInput]);

  const changeInput = (event) => {
    setSearchBarInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search by name"
        value={searchBarInput}
        onChange={changeInput}
      />
    </div>
  );
}
