import './StudentCard.scss';
import { useState } from 'react'
import StudentScores from '../studentScores/StudentScores';

const StudentCard = ({student}) => {

    const {firstName, lastName, email, company, skill, pic, grades} = student;
    let [ showScores, setShowScores ] = useState(false)

    function handleToogle(){
        setShowScores(!showScores)
    }

    return (
        <div className="studentCard">
            <div className="studentCard__profileImage">
                <img src={pic} alt="student profile image" />
            </div>
            <div className='studentCard__studentInfoContainer'>
                <div className="studentCard__studentInfo">
                    <div className="studentCard__name">{firstName} {lastName}</div>
                    <div className="studentCard__studentDetail"> Email: {email} </div>
                    <div className="studentCard__studentDetail"> Company: {company} </div>
                    <div className="studentCard__studentDetail"> Skill: {skill} </div>
                    <div className="studentCard__studentDetail"> Average: 88.875% </div>
                    <div className="studentCard__studentDetail__scores">
                        <StudentScores grades={grades} showScores={showScores} />
                    </div>
                </div>
                <span className="studentCard__scoreButton" onClick={handleToogle}>{ showScores ? '➖' : '➕'}</span>
            </div>
        </div>
    )
}

export default StudentCard;