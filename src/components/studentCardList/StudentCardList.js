import { useStudentData } from "../../providers/StudentDataProvider";
import { v4 as uuidv4 } from "uuid";
import StudentCard from "../studentCard/StudentCard";
import SearchFilter from "../searchFilter/SearchFilter";
import NoSearchResults from "../noSearchResults/NoSearchResults";
import "./StudentCardList.scss";

function StudentCardList() {
  const { studentDataArr, searchResult, setSearchResult } = useStudentData();

  return (
    <div className="studentCardList">
      <SearchFilter
        students={studentDataArr}
        setSearchResult={setSearchResult}
      />

      <section className="studentCardList_cards">
        {searchResult.length === 0 ? (
          <NoSearchResults />
        ) : (
          searchResult.map((el) => (
            <StudentCard key={uuidv4()} studentObj={el} />
          ))
        )}
      </section>
    </div>
  );
}

export default StudentCardList;
