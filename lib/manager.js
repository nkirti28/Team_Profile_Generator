const Employee = require("./Employee");

// Define Manager class using class declaration - manager constructor extends employee constructor
class Manager extends Employee {
  // Initializes object created with class
  constructor(name, id, email, officeNumber) {
    //calling employee constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // returning Department from input
  getOfficeNumber() {
    return this.officeNumber;
  }
  // override employee role to manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
