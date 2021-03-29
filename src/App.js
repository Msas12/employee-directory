import React, { useEffect, useState } from "react";
import JumboTron from "./components/JumboTron";
import EmployeeTable from "./components/EmployeeTable";
import API from "./utils/API";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.getEmployee().then((res) => {
      setEmployeeState(res.data.results);
      console.log(res.data.results);
      console.log(employeeState);
    });
  }, []);

  return (
    <div className="App">
      <JumboTron />
      <EmployeeTable employees={employeeState} />
    </div>
  );
}

export default App;
