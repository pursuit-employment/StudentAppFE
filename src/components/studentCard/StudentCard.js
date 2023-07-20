import { useState } from "react";
import "./StudentCard.scss";
import AddIcon from "@mui/icons-material/Add";

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
                <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM152 232H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
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
