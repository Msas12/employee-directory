import React from "react";

const EmployeeTableBody = (props) => {
  return (
    <tbody>
      {props.employees.map((employee) => (
        <tr key={employee.id.value}>
          <td>
            <img src={employee.picture.medium} alt="employee" />
          </td>
          <td>{`${employee.name.first} ${employee.name.last}`}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default EmployeeTableBody;
