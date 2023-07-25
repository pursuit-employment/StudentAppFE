import { useStudentData } from "../../providers/StudentDataProvider";
import { v4 as uuidv4 } from "uuid";
import StudentCard from "../studentCard/StudentCard";
import SearchFilter from "../searchFilter/SearchFilter";
import NoStudentsDisplayed from "../noSearchResults/NoStudentsDisplayed";
import "./StudentCardList.scss";

function StudentCardList() {
  const { studentDataArr, searchResult, setSearchResult, loadingData } = useStudentData();

  return (
    <div className="studentCardList">
      <SearchFilter
        students={studentDataArr}
        setSearchResult={setSearchResult}
      />

      <section className="studentCardList_cards">
        {loadingData ?
          <NoStudentsDisplayed message={"Loading...."} /> :

          searchResult.length > 0  ? 
          searchResult.map((el) => ( 
          <StudentCard key={uuidv4()} studentObj={el} />
          )) :
          <NoStudentsDisplayed message={"Student Not Found"} />
        }
      </section>
    </div>
  );
}

export default StudentCardList;
