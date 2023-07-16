import React, { useEffect, useState } from 'react';
import './SearchBar.scss';
function SearchBar({ students, filter, setFilter }) {
  const handleSearch = (e) => {
    const searchInput = e.target.value;

    if (searchInput) {
      const filterThrough = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return fullName.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilter(filterThrough);
    }
  };
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search Here..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
