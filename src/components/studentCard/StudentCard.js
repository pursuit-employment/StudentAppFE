import { useState } from "react";
import "./StudentCard.scss";

const StudentCard = ({ student }) => {
  const { firstName, lastName, email, city, company, skill, pic, grades } =
    student;
  const studentGrades = [...student.grades];

  const [toggleShowAllStudentScoresBool, setToggleShowAllStudentScoresBool] =
    useState(false);

  const toggleShowAllStudentScores = () => {
    setToggleShowAllStudentScoresBool(!toggleShowAllStudentScoresBool);
  };

  const calculateStudentGradeAverages = (studentGrades) => {
    const studentGradesTotal = studentGrades?.reduce((acc, curr) => {
      return (acc += Number(curr));
    }, 0);
    const studentGradesAverage = studentGradesTotal / studentGrades.length;
    return studentGradesAverage?.toFixed(2);
  };

  return (
    <div className="studentCard">
      <div className="studentCard__profileImage">
        <img src={pic} alt="student profile image" />
      </div>
      <div className="studentCard__studentInfo">
        <div className="studentCard__nameAndToggleAllScoresIconContainer">
          {" "}
          <div className="studentCard__name">
            {firstName} {lastName}
          </div>
          <button
            className="studentCard__showOrCollapseAllScoresIcon"
            onClick={toggleShowAllStudentScores}>
            {toggleShowAllStudentScoresBool ? (
              <span class="material-symbols-outlined">-</span>
            ) : (
              <span class="material-symbols-outlined">+</span>
            )}
          </button>
        </div>

        <div className="studentCard__studentDetail"> Email: {email} </div>
        <div className="studentCard__studentDetail"> Company: {company} </div>
        <div className="studentCard__studentDetail"> Skill: {skill} </div>
        <div className="studentCard__studentDetail">
          {" "}
          Average: {calculateStudentGradeAverages(studentGrades)}%{" "}
        </div>

        {toggleShowAllStudentScoresBool && (
          <div className="studentCard__allScores">
            {grades.map((grade, idx) => {
              const renderedIdx = idx + 1;
              return (
                <div className="studentCard__score">
                  <div className="studentCard__renderedIndex">
                    {`Grade ${renderedIdx}:`}{" "}
                  </div>{" "}
                  <div className="studentCard__scoreSpacer" />
                  <div className="studentCard__grade">{`${grade}%`}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
