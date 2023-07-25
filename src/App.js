import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import StudentCardList from "./components/studentCardList/StudentCardList";

function App() {
  return (
    <div>
      <StudentCardList />
    </div>
  );
}

export default App;
