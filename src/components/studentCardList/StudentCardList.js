import { useStudentData } from "../../Providers/StudentDataProvider";
import { v4 as uuidv4 } from "uuid";
import StudentCard from "../StudentCard/StudentCard";
import SearchFilter from "../SearchFilter/SearchFilter";
import NoSearchResults from "./noSearchResults/NoSearchResults.js";
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
