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
            onClick={toggleShowAllStudentScores}
            className="studentCard__showOrCollapseAllScoresIcon">
            {toggleShowAllStudentScoresBool ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {" "}
                Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com
                License - https://fontawesome.com/license (Commercial License)
                Copyright 2023 Fonticons, Inc.
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
              </svg>
            ) : (
              <svg
                className="studentCard__showOrCollapseAllScoresIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
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
