// Define Manager class using class declaration
class Manager {
  // Initializes object created with class
  constructor(name, id, email, userName) {
    this.Name = name;
    this.Id = id;
    this.Email = email;
    this.githubUsername = userName;
  }
  // Method which prints all of information of Manager
  PrintManagerInfo() {
    console.log(`Engineer's Name : ${this.Name}`);
    console.log(`Engineer's ID : ${this.Id}`);
    console.log(`Engineer's Email : ${this.Email}`);
    console.log(`Engineer's GithubUserName : ${this.githubUsername}`);
  }
}
//creates Manager using constructor with static info
const manager = new Manager("Mr.CD", 08, "mrcd@gmail.com", "mrcd25");

//call PrintManagerInfo() method
engineer.PrintManagerInfo();

module.exports = Manager;
