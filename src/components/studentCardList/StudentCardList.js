import {useState, useEffect} from 'react';

import StudentCard from "../studentCard/StudentCard";

import './StudentCardList.scss';

const StudentCardList = ({onSearch}) => {

    // set hook for student data 
    const [students, setStudents] = useState([]);
    const [searchStudents, setSearchStudents] = useState("")

    useEffect(() => {
        // fetch data from https://api.hatchways.io/assessment/students
        fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => {
            // update hook with data
            setStudents(data.students);
        })
    }, []);
    
    const handleSearch = (e) => {
        setSearchStudents(e.target.value);
    }

    const filteredStudents = students.filter(student => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return fullName.toLowerCase().includes(searchStudents.toLowerCase());
      });

    return (
        <div className='searchbar'>
            <input 
                type="text" 
                placeholder="search"
                value={searchStudents}
                onChange={handleSearch}/>
        
            <div className="studentCardList">
            {/* map through data  */}
            {filteredStudents.map(student => {
                // render a student card for every student
                return (<StudentCard student={student} />)
            })}
            </div>
        </div>
    )
}

export default StudentCardList;