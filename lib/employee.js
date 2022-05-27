// Define Engineer class
class Employee {
  // Initializes object created with class
  constructor(empName, empID, empEmail) {
    this.empName = empName;
    this.empID = empID;
    this.empEmail = empEmail;
  }

  getName() {
    return this.empName;
  }
  getId() {
    return this.empID;
  }
  getEmail() {
    return this.empEmail;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
