import './StudentScores.scss'

export default function StudentScores({grades, showScores}){

    return (
        <div className="studentScores">
           {showScores ? grades.map((grade, testNumber) => {
                return (
                    <p className='studentScores__details'>
                        Test {testNumber + 1}: {grade}%
                    </p>
                )
           }) : ''}
        </div>)
}