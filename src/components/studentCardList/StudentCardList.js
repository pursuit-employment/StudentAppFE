import { useState, useEffect } from "react";
import axios from "axios";
import StudentCard from "../StudentCard/StudentCard";
import SearchFilter from "../SearchFilter/SearchFilter";
import NoSearchResults from "./noSearchResults/NoSearchResults.js";
import "./StudentCardList.scss";

function StudentCardList() {
  const [studentData, setStudentData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then(({ data }) => {
        setStudentData(data.students);
        setSearchResult(data.students);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="student-card-list-container">
      <SearchFilter 
      students={studentData} 
      setFunction={setSearchResult} />

      <section className="student-cards">
        {
        searchResult.length === 0 ? (
          <NoSearchResults />
        ) : (
          searchResult.map(el => 
          <StudentCard 
          key={el.id} 
          obj={el} />)
        )
        }
      </section>
    </div>
  );
}

export default StudentCardList;
