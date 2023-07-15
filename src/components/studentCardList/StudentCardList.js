import {useState, useEffect} from 'react';
import SearchBar from "../searchBar/SearchBar"
import StudentCard from "../studentCard/StudentCard";

import './StudentCardList.scss';

const StudentCardList = () => {
    // set hook for student data 
    const [ students, setStudents ] = useState([]);
    const [ studentSearch, setStudentSearch] = useState('');

    useEffect(() => {
        // fetch data from https://api.hatchways.io/assessment/students
        fetch('https://api.hatchways.io/assessment/students')
        .then(response => response.json())
        .then(data => {
            // update hook with data
            setStudents(data.students);
        })
    }, []);

    function filterStudentsBySearch(student){
        const allStudentNameSearches = studentSearch.trim().split(' ')
        
        function nameStartsWithSearch(student){
            const { firstName, lastName } = student

            for(const search of allStudentNameSearches){
                const lowerCaseSearch = search.toLowerCase()
                const [lowerCaseFirstName, lowerCaseLastName] = [ firstName.toLowerCase(), lastName.toLowerCase()]

                if(lowerCaseFirstName.startsWith(lowerCaseSearch) || lowerCaseLastName.startsWith(lowerCaseSearch)) return student
            }
        }

        return nameStartsWithSearch(student)
    }

    return (
        <div className="studentCardList">
            {/* map through data  */}
            <SearchBar setStudentSearch={setStudentSearch} />
            { students.filter(filterStudentsBySearch).map(student => {
                // render a student card for every student
                return (<StudentCard student={student} />)
            })}
        </div>
    )
}

export default StudentCardList;