import { Routes, Route } from "react-router-dom";

import './App.scss';

import StudentCardList from './components/studentCardList/StudentCardList';

// PAGES
import StudentDetail from "./pages/StudentDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={ <StudentCardList />} />
        <Route path='student/:id' element={<StudentDetail />} />
        <Route path='hello' element={<div>Hello from the hello route!</div>} />
        <Route path='*' element={<div>nothing is found here!</div>} />
      </Routes>
    </div>
  );
}

export default App;
