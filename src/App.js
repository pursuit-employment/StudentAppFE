import StudentDataProvider from './Providers/StudentDataProvider';
import StudentCardList from './Components/StudentCardList/StudentCardList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <StudentDataProvider>
        <StudentCardList />
      </StudentDataProvider>
      
    </div>
  );
}

export default App;
