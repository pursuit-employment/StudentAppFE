import { useStudentData } from "../../providers/StudentDataProvider";
import { v4 as uuidv4 } from "uuid";
import StudentCard from "../studentCard/StudentCard";
import SearchFilter from "../searchFilter/SearchFilter";
import NoStudentsDisplayed from "../noSearchResults/NoStudentsDisplayed";
import "./StudentCardList.scss";

function StudentCardList() {
  const { studentDataArr, searchResult, setSearchResult, loadingData } =
    useStudentData();

  return (
    <div className="studentCardList">
      <SearchFilter
        students={studentDataArr}
        setSearchResult={setSearchResult}
      />

      {loadingData ? (
        <NoStudentsDisplayed message={"Loading...."} />
      ) : 
      searchResult.length > 0 ? (
        <section className="studentCardList_cards">
          {searchResult.map((el) => (
            <StudentCard key={uuidv4()} studentObj={el} />
          ))}
        </section>
      ) : (
        <NoStudentsDisplayed message={"Student Not Found"} />
      )}
    </div>
  );
}

export default StudentCardList;
