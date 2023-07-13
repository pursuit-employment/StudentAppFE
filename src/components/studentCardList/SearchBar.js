import { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ students, setFilteredStudents }) => {

  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();

    setFilterValue(inputValue);


    const filtered = students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(inputValue) || student.lastName.toLowerCase().includes(inputValue)
    );

    setFilteredStudents(filtered);
  };

  return (
    <div className= 'searchBar'>

      <input
        type='text'
        value={filterValue}
        placeholder='Search by name'
        onChange={handleInputChange}
        className={filterValue ? 'hasValue' : ''}
      />
    </div>
  );
};

export default SearchBar;
