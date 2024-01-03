export default function createReportObject(employeesList) {
  // Extract department names and employees from the employeesList
  const departmentNames = Object.keys(employeesList);
  const allEmployees = {};

  // Create a department-wise list of employees using spread syntax
  departmentNames.forEach((department) => {
    allEmployees[department] = [...employeesList[department]];
  });

  // Return the final report object
  return {
    allEmployees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
