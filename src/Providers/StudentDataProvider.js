import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

export const StudentData = createContext();
export function useStudentData() {
  return useContext(StudentData);
}
const API = process.env.REACT_APP_API_URL

function StudentDataProvider({ children }) {
  const [studentDataArr, setStudentDataArr] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    axios
      .get(`${API}/students`)
      .then(({ data }) => {
        setStudentDataArr(data);
        setSearchResult(data);
        setLoadingData(false)
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
        loadingData
      }}
    >
      {children}
    </StudentData.Provider>
  );
}

export default StudentDataProvider;
