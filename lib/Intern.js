//Import Employee.js - Employee class
const Employee = require("./Employee");
// Define Intern class -engineer constructor extends employee constructor
class Intern extends Employee {
  // Initializes object created with class
  constructor(empName, empID, empEmail, school) {
    //calling employee constructor
    super(empName, empID, empEmail);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  // override employee role to engineer
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
