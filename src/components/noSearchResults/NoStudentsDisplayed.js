import "./NoStudentsDisplayed.scss"

function NoStudentsDisplayed({message}) {
    return (
        <div className='noStudentsDisplayed'>
            <span>{message}</span>
        </div>
    );
}

export default NoStudentsDisplayed;