import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../searchBar/SearchBar.js";
import StudentCard from "../studentCard/StudentCard.js";

import "./StudentCardList.scss";

const StudentCardList = () => {
  // set hook for student data
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchBarInput, setSearchBarInput] = useState("");

  // fetch data from https://api.hatchways.io/assessment/students
  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then(({ data }) => {
        setFilteredStudents(data.students);
        setStudents(data.students);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="studentCardList">
      <SearchBar
        setFilteredStudents={setFilteredStudents}
        students={students}
        searchBarInput={searchBarInput}
        setSearchBarInput={setSearchBarInput}
      />
      {filteredStudents.length === 0 && searchBarInput !== "" && (
        <div className="studentCardList__noSearchResults">NO SEARCH RESULTS</div>
      )}
      {filteredStudents.length > 0 &&
        filteredStudents.map((e) => <StudentCard key={e.id} student={e} />)}
    </div>
  );
};

export default StudentCardList;
