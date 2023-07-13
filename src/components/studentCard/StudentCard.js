import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa'
import "./StudentCard.scss";

const StudentCard = ({ student }) => {
  const [showScores, setShowScores] = useState(false);

  const { firstName, lastName, company, email, skill, pic, grades } = student;
  return (
    <div className="studentCard">
      <div className="studentCard__profileImage">
        <img src={pic} alt="student profile" />
      </div>
      <div className="studentCard__studentInfo">
        <div className="studentCard__name">
          {firstName} {lastName}
        </div>
        <div className="studentCard__studentDetail">Email: {email}</div>
        <div className="studentCard__studentDetail">Company: {company}</div>
        <div className="studentCard__studentDetail">Skill: {skill}</div>
        <div className="studentCard__studentDetail">
          Average: {grades.reduce((acc, e) => +e + acc, 0) / grades.length}%
        </div>
        <div className="studentCard__studentDetail">
          {showScores &&
            grades.map((e, i) => (
              <p>
                Test {i + 1}:<span>{e}%</span>
              </p>
            ))}
        </div>
      </div>
      <button
        className="studentCard__button"
        onClick={() => setShowScores(!showScores)}
      >
        {showScores ? <FaMinus/> : <FaPlus />}
      </button>
    </div>
  );
};

export default StudentCard;
