const Employee = require("./Employee");

// Define Manager class using class declaration - manager constructor extends employee constructor
class Manager extends Employee {
  // Initializes object created with class
  constructor(name, id, email, githubUsername) {
    //calling employee constructor
    super(name, id, email);
    this.githubUsername = githubUsername;
  }
  // returning github from input
  getGitHubName() {
    return this.githubUsername;
  }
  // override employee role to manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
