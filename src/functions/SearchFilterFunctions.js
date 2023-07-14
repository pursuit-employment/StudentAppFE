// Handle Student Search Bar -> set input state, call filtering function for results
function handleSearchBar(e, setInputFunction, setSearchResultsFunction, studentDataArr) {
    const searchValue = e.target.value;
    setInputFunction(searchValue);

    if (!searchValue) {
      setSearchResultsFunction(studentDataArr);
    } else {
      const searchInputValuesArr = searchValue.toLowerCase().split(" ");
      filterStudents(searchInputValuesArr, studentDataArr, setSearchResultsFunction);
    }
  }

   // Handle Student Filter function
   function filterStudents(inputArr, studentDataArr, setFunction) {
    const filteredStudents = studentDataArr.filter((student) => {
      const first = student.firstName;
      const last = student.lastName;
      const fullName = `${first} ${last}`.toLowerCase();
      const fullNameIncludesSearchValue = inputArr.every((el) =>
        fullName.includes(el)
      );
      if (fullNameIncludesSearchValue) {
        return student;
      }
    });
    setFunction(filteredStudents);
  }

  module.exports = {
    handleSearchBar,
    filterStudents,
  }