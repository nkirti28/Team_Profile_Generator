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
  // // Method which prints all of information of Manager
  // PrintManagerInfo() {
  //   console.log(`Engineer's Name : ${this.Name}`);
  //   console.log(`Engineer's ID : ${this.Id}`);
  //   console.log(`Engineer's Email : ${this.Email}`);
  //   console.log(`Engineer's GithubUserName : ${this.githubUsername}`);
  // }
}
//creates Manager using constructor with static info
//const manager = new Manager("Mr.CD", 08, "mrcd@gmail.com", "mrcd25");

//call PrintManagerInfo() method
//engineer.PrintManagerInfo();

module.exports = Manager;
