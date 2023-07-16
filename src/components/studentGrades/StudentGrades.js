import { v4 as uuidv4 } from 'uuid';
import "./StudentGrades.scss"

function StudentGrades({gradesArr}) {
    return (
        <div className='studentCardGrades'>
            {
                gradesArr.map((el,i) => 
                <section
                key={uuidv4()}
                className="studentCardGrades__List">
                    <span>Test {i+1}:</span>
                    <span>{el}%</span>
                </section> 
                )
            }
        </div>
    );
}

export default StudentGrades;