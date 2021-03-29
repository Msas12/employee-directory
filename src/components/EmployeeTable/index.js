import React from "react";
import Table from "react-bootstrap/Table";
import EmployeeTableBody from "../EmployeeTableBody";

const EmployeeTable = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <EmployeeTableBody employees={props.employees} />
    </Table>
  );
};

export default EmployeeTable;
