//Import Employee.js - Employee class
const Employee = require("./Employee");
// Define Engineer class -engineer constructor extends employee constructor
class Engineer extends Employee {
  // Initializes object created with class
  constructor(empName, empID, empEmail, empGitHub) {
    //calling employee constructor
    super(empName, empID, empEmail);
    this.empGitHub = empGitHub;
  }
  getGitHubName() {
    return this.empGitHub;
  }
  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
