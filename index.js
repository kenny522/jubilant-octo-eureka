// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];

// Application function starts here.

function initApp() {
  inquirer
    .prompt([
      {
        // type: 'confirm',
        name: "start",
        message: "Hello! Let's create a team profile.",
      },
      {
        type: "list",
        message: "Select an employee role from the list below:",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])
    .then((employeeInfo) => {
      if (employeeInfo.role === "Manager") {
        console.log("Add Manager information");
        getManager();
      } else if (employeeInfo.role === "Engineer") {
        console.log("Add Engineer information");
        getEngineer();
      } else if (employeeInfo.role === "Intern ") {
        console.log("Add Intern");
        getIntern();
      }
    });
}

// This gets the managers data.
function getManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter manager ID:",
        name: "id",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an id.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter manager's email.",
        name: "email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter manager's office number.",
        name: "officeNumber",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter an office number.");
            return false;
          }
        },
      },
    ])
    .then((employeeInfo) => {
      const addManager = new Manager(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        employeeInfo.officeNumber
      );
      teamMembers.push(addManager);
      // console.log(addManager)
      addNewEmployee();
    });
}

// Gets the teams data.
function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an employee role from the list below:",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "Profile complete. No more team members to add!",
        ],
        name: "role",
      },
    ])
    .then((employeeInfo) => {
      if (employeeInfo.role === "Manager") {
        console.log("Add Manager information");
        getManager();
      } else if (employeeInfo.role === "Engineer") {
        console.log("Add Engineer information");
        getEngineer();
      } else if (employeeInfo.role === "Intern") {
        console.log("Add Intern");
        getIntern();
      } else {
        console.log("Profile complete. No more team members to add!");
        fs.writeFile("./dist/team.html", starterHtml(), (err) => {
          if (err) throw err;
          console.log("You successfully created a team HTML file!");
        });
      }
    });
}

// This adds the engineer.
function getEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter engineer's name.",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Must enter engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter engineer's ID:",
        name: "id",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an id.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter engineer's email.",
        name: "email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter engineer's GitHub username.",
        name: "gitHub",
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log("Please enter a GitHub username.");
            return false;
          }
        },
      },
    ])
    .then((employeeInfo) => {
      // console.log(employeeInfo.gitHub);
      const addEngineer = new Engineer(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        employeeInfo.gitHub
      );
      // console.log(addEngineer)
      teamMembers.push(addEngineer);

      // console.log(addEng)
      addNewEmployee();
    });
}

// This adds the intern.
function getIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter intern ID:",
        name: "id",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter an id.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter intern's email.",
        name: "email",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Please enter school name.",
        name: "school",
      },
    ])
    .then((employeeInfo) => {
      const addIntern = new Intern(
        employeeInfo.name,
        employeeInfo.id,
        employeeInfo.email,
        employeeInfo.school
      );
      teamMembers.push(addIntern);
      // console.log(addIntern)
      addNewEmployee();
    });
}

// HTML Function with the team members.
function createHtml() {
  const html = [];

  function mngrHtml(employee) {
    return `    
            <!-- Manager -->
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-light text-dark">
                        <h5 class="card-title">${employee.name}</h5>
                        <h6 class="card-text"><i class="fas fa-mug-hot"></i>Manager</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">Office: ${employee.officeNumber}</li>
                    </ul>
                </div> 
            </div>
            `;
  }

  function engrHtml(employee) {
    return `<!-- Engineer -->
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-light text-dark">
                        <h5 class="card-title">${employee.name}</h5>
                        <h6 class="card-text"><i class="fas fa-glasses"></i>Engineer</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                    </ul>
                </div>
            </div>
            `;
  }

  function intHtml(employee) {
    return `<!-- Intern -->
            <div class="col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body bg-light text-dark">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-text"><i class="fas fa-user-graduate"></i>Intern</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
            `;
  }

  for (i = 0; i < teamMembers.length; i++) {
    let teamMember = teamMembers[i];
    if (teamMember.getRole() === "Manager") {
      html.push(mngrHtml(teamMember));
    } else if (teamMember.getRole() === "Engineer") {
      html.push(engrHtml(teamMember));
    } else {
      html.push(intHtml(teamMember));
    }
  }
  return html.join("");
}

function starterHtml() {
  return `<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
     <script src="https://kit.fontawesome.com/f78f1848e0.js" crossorigin="anonymous"></script>
     <title>Team Profile</title>
    <style>
        * {
            font-family: 'Poppins', sans-serif;
        }
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        .hero-info {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        .fas {
            margin-right: 8px !important;
        }
    </style>
 </head>
 <body>
     <section class="hero">
         <div class="container-fluid hero-info">
             <div class="hero-title text-center pt-5 pb-5 bg-dark text-white mb-5">
                 <h1>Team</h1>
             </div>
         </div>
     </section>
 
     <div class="container-fluid d-flex justify-content-center">
         <div class="row">
             <!-- Beginning of team member cards -->
 
             ${createHtml()}
             
             <!-- Ending of team cards -->
             </div>
         </div>
     </div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 </body>
 </html>`;
}

// Function to start the app.
initApp();
