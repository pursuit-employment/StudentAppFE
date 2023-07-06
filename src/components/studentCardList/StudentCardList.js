import {useState, useEffect} from 'react';

import StudentCard from "../studentCard/StudentCard";

import './StudentCardList.scss';

const StudentCardList = () => {

    // set hook for student data 
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // fetch data from https://api.hatchways.io/assessment/students
        fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => {
            // update hook with data
            setStudents(data.students);
        })
    }, []);
    

    return (
        <div className="studentCardList">
            {/* map through data  */}
            {students.map(student => {
                // render a student card for every student
                return (<StudentCard student={student} />)
            })}
        </div>
    )
}

export default StudentCardList;