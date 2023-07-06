import './StudentCard.scss';

const StudentCard = ({student}) => {

    const {firstName, lastName, email, city, company, skill, pic, grades} = student;

    // use grades to calculate average
    // render average below

    return (
        <div className="studentCard">
            <div className="studentCard__profileImage">
                <img src={pic} alt="student profile image" />
            </div>
            <div className="studentCard__studentInfo">
                <div className="studentCard__name">{firstName} {lastName}</div>
                <div className="studentCard__studentDetail"> Email: {email} </div>
                <div className="studentCard__studentDetail"> Company: {company} </div>
                <div className="studentCard__studentDetail"> Skill: {skill} </div>
                <div className="studentCard__studentDetail"> Average: 88.875% </div>
            </div>
        </div>
    )
}

export default StudentCard;