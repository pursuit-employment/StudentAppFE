import {useLocation} from  'react-router-dom';
import {useState, useEffect} from 'react';

import './StudentCard.scss';

const studentObj = {
    firstName: '',
    lastName: '',
    skill: '', 
    company: '',
    email: '',
    city: '',
    pic: ''
}

const StudentCard = ({studentInfo}) => {

    let { state } = useLocation();
    console.log(state?.student)

    const [student, setStudent] = useState(studentInfo || state?.student || studentObj );
    const [loading, setLoading] = useState(!student.firstName );

    useEffect(() => {
        if(!student.firstName){
            fetch('')
            .then(response => response.json())
            .then(data => {
                setStudent(data);
                setLoading(false);
            })
        }
    }, [])


    const {firstName, lastName, email, city, company, skill, pic, grades} =  student;


    return (
        <div className="studentCard">
            {loading && <div>loading...</div>}
            {!loading && 
            <>
               <div className="studentCard__profileImage">
                    <img src={pic} alt="student profile image" />
                </div>
                <div className="studentCard__studentInfo">
                    <div className="studentCard__name">{firstName} {lastName}</div>
                    <div className="studentCard__studentDetail"> Email: {email} </div>
                    <div className="studentCard__studentDetail"> Company: {company} </div>
                    <div className="studentCard__studentDetail"> Skill: {skill} </div>
                    <div className="studentCard__studentDetail"> Average: 88.875% </div>
                </div>`
            </>
            }
        </div>
    )
}

export default StudentCard;