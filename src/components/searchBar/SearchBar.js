import './SearchBar.scss'

export default function SearchBar({setStudentSearch}){

    function handleChange(search){
        
        const StudentSearchValue = search.target.value
        setStudentSearch(StudentSearchValue)
    }

    return (
        <div className="searchBar">
            <input
                type="search"
                onChange={handleChange}
                className="searchBar__input"
                placeholder="Search by name"
            />
        </div>)

}