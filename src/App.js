import StudentDataProvider from "./providers/StudentDataProvider.js";
import StudentCardList from "./components/studentCardList/StudentCardList";
import "./App.scss";

function App() {
  return (
    <div className="App centeredGrid">
      <StudentDataProvider>
        <StudentCardList />
      </StudentDataProvider>
    </div>
  );
}

export default App;
