import { useState } from "react";
import "./StudentCard.scss";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

const StudentCard = ({ student }) => {
  const { firstName, lastName, email, city, company, skill, pic, grades } =
    student;
  const [showGrades, setShowGrades] = useState(false);

  function getAverageGrade(grades) {
    let total = 0;
    grades.forEach((grade) => {
      total += Number(grade);
    });
    return total / grades.length;
  }

  return (
    <div className="studentCard">
      <div className="studentCard__profileImage">
        <img src={pic} alt="student profile image" />
      </div>
      <div className="studentCard__studentInfo">
        <div className="studentCard__nameWrapper">
          <div className="studentCard__name">
            {firstName} {lastName}
          </div>
          <button
            className="studentCard__toggle"
            value={showGrades}
            onClick={() => setShowGrades(!showGrades)}
          >
            {showGrades ? (
              <img src={minus} alt="minus" />
            ) : (
              <img src={plus} alt="plus" />
            )}
          </button>
        </div>

        <div className="studentCard__studentDetail"> Email: {email} </div>
        <div className="studentCard__studentDetail"> Company: {company} </div>
        <div className="studentCard__studentDetail"> Skill: {skill} </div>
        <div className="studentCard__studentDetail">
          Average: {getAverageGrade(grades)}%
        </div>
        <br />
        <div className="studentCard__grades">
          {showGrades &&
            grades.map((grade, i) => (
              <div className="studentCard__grade" key={i}>
                Test {i + 1}: &nbsp; &nbsp; &nbsp; &nbsp;{grade}%
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
