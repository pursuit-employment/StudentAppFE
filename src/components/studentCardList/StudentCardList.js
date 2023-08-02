import {useState, useEffect} from 'react';

import StudentCard from "../studentCard/StudentCard";

import './StudentCardList.scss';

const StudentCardList = () => {

    // set hook for student data 
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => {
            setTimeout(function(){
                if(true || data.status === 403){
                    throw {status: 'error', message: 'An error occurred.'}
                } else {
                    setError(false);
                    setStudents(data.students);
                    setLoading(false);
                }
            }, 2000)
            
        }).catch(error => {
            setError(error);
            setLoading(false)
        })
    }, []);
    

    return (
        <div className={`studentCardList ${error &&  'studentCardList--error'}`}>
            {!loading && students.length > 0 && !error && students.map(student => {
                // render a student card for every student
                return (<StudentCard student={student} />)
            })}

            {loading && <div className="studentCardList__empty">Loading...</div>}

            {!loading && !error && students.length === 0 && <div className="studentCardList__empty">No results : (</div>}

             {!loading && error && <div className="studentCardList__empty">{error.message}</div>}
        </div>
    )
}

export default StudentCardList;