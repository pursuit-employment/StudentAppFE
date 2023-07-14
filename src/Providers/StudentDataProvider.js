import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

export const StudentData = createContext();
export function useStudentData() {
  return useContext(StudentData);
}

function StudentDataProvider({ children }) {
  const [studentDataArr, setStudentDataArr] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then(({ data }) => {
        setStudentDataArr(data.students);
        setSearchResult(data.students);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <StudentData.Provider
      value={{
        studentDataArr,
        setStudentDataArr,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </StudentData.Provider>
  );
}

export default StudentDataProvider;
