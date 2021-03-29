import React from "react";
import JumboTron from "./components/JumboTron";
import EmployeeTable from "./components/EmployeeTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <JumboTron />
      <EmployeeTable />
    </div>
  );
}

export default App;
