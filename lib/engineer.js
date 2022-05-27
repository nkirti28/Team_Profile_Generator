// Define Engineer class
class Engineer {
  // Initializes object created with class
  constructor(empName, empID, empEmail, empGitHub) {
    this.empName = empName;
    this.empID = empID;
    this.empEmail = empEmail;
    this.empGitHub = empGitHub;
  }
  // Method which prints all of information of Engineer
  PrintEngineerInfo() {
    console.log(`Engineer's Name : ${this.empName}`);
    console.log(`Engineer's ID : ${this.empID}`);
    console.log(`Engineer's Email : ${this.empEmail}`);
    console.log(`Engineer's GithubUserName : ${this.empGitHub}`);
  }
}

//creates engineer using constructor with static info
const engineer = new Engineer("ABCD", 25, "abcd@gmail.com", "abcd25");

//call PrintEngineer() method
engineer.PrintEngineerInfo();

module.exports = Engineer;
