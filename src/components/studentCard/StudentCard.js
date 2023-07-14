import { useState } from "react";
import StudentGrades from "../studentGrades/StudentGrades";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./StudentCard.scss";

function StudentCard({ studentObj }) {
  const { company, email, firstName, grades, lastName, pic, skill } =
    studentObj;

  const [showScores, setShowScores] = useState(false);

  const averageGrades =
    grades.reduce((acc, el) => (acc += +el), 0) / grades.length;

  return (
    <div className="studentCard">
      <div className="studentCard_imageContainer">
        <img className="studentCard_image" src={pic} alt="student-pic" />
      </div>

      <section className="studentCard_info">
        <h2 className="studentCard_info_name">
          {" "}
          {firstName} {lastName}{" "}
        </h2>
        <div className="studentCard_info_details">
          <span>Email: {email}</span>
          <span>Company: {company}</span>
          <span>Skill: {skill}</span>
          <span>Average: {averageGrades}%</span>
          {showScores && <StudentGrades gradesArr={grades} />}
        </div>
      </section>

      <button
        className="studentCard__gradesButton"
        onClick={() => setShowScores(!showScores)}
      >
        {showScores ? <FaMinus /> : <FaPlus />}
      </button>
    </div>
  );
}

export default StudentCard;
