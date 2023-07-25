import "./NoStudentsDisplayed.scss"

function NoStudentsDisplayed({message}) {
    return (
        <div className='noSearchResults'>
            <span>{message}</span>
        </div>
    );
}

export default NoStudentsDisplayed;