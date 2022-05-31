// Generate Manager card in HTML
const renderManagerCard = function (manager) {
  return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h4>${manager.empName}</h4>
                <h6>Manager</h6><i class="material-icons">person</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.empID}</p>
                <p class="email">Email: <a href="mailto:${manager.empEmail}">${manager.empEmail}</a></p>
                <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
};

// Generate Engineer card in HTML
const renderEngineerCard = function (engineer) {
  return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h4>${engineer.empName}</h4>
                <h6>Engineer</h6><i class="material-icons">account_box</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.empID}</p>
                <p class="email">Email: <a href="mailto:${engineer.empEmail}">${engineer.empEmail}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.empGitHub}">${engineer.empGitHub}</a></p>
            </div>
        </div>
    </div>`;
};

// Generate Intern card in HTML
const renderInternCard = function (intern) {
  return `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h4>${intern.empName}</h4>
                <h6>Intern</h6><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.empID}</p>
                <p class="email">Email: <a href="mailto:${intern.empEmail}">${intern.empEmail}</a></p>
                <p class="school">School: ${intern.school}</p>           
            </div>
        </div>
    </div>`;
};

// Generate HTML page with Team Profile Info
renderHTML = (data) => {
  //array for cards
  pageArray = [];
  for (i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = renderManagerCard(employee);
      pageArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = renderEngineerCard(employee);
      pageArray.push(engineerCard);
    }

    if (role === "Intern") {
      const interCard = renderInternCard(employee);
      pageArray.push(interCard);
    }
  }

  //joining cards
  const employeeCards = pageArray.join("");

  //return to generated HTML
  const renderTeamProfiles = generateTeamPage(employeeCards);
  return renderTeamProfiles;
};
// generate html page
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
};

module.exports = renderHTML;
