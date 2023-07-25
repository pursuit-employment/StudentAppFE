import { useState, useEffect } from "react";
import axios from "axios";
import StudentCard from "../studentCard/StudentCard";
import StudentSearchBar from "../studentSearchBar/StudentSearchBar";
import "./StudentCardList.scss";

const StudentCardList = ({ student }) => {
  // set hook for student data
  const API = "https://studentappback.onrender.com";
  const [studentMasterData, setStudentMasterData] = useState([]);
  const [filteredStudentData, setFilteredStudentData] = useState([]);

  // fetch data from https://api.hatchways.io/assessment/students
  useEffect(() => {
    axios
      .get(`${API}/students`)
      .then((res) => {
        console.log("RES", res.data);
        setStudentMasterData(res.data.data);
        setFilteredStudentData(res.data.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  //   console.log("STUDENT DATA", studentData);
  return (
    <div className="studentCardList">
      <StudentSearchBar
        studentMasterData={studentMasterData}
        filteredStudentData={filteredStudentData}
        setFilteredStudentData={setFilteredStudentData}
      />
      {filteredStudentData?.map((student) => {
        return <StudentCard key={student.id} student={student} />;
      })}
    </div>
  );
};

export default StudentCardList;
