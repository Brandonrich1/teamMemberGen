const engineer = require("../lib/engineer.js");

//creates the html for the mananger
const generateMananger = manager => {
        return`
<div class="card employee-card">
        <div class="card-header bg-primary text white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item"> Office #: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
</div>
        `;
    };
//html template for the intern field
const generateIntern = intern => {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
</div>
<div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
</div>
</div>
    `;
};
//html Template for the engineer.
const generateEngineer = engineer => {
    return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
    </ul>
</div>
</div>
    `;
};

function renderTeam(team){
let html = '';
let managers = team
.filter(employee => employee.getRole() === "Manager")
.map(mananger => generateMananger(mananger))
html+= managers

let engineers = team
.filter(employee => employee.getRole() === "Engineer")
.map(engineer => generateEngineer(engineer))
html+= engineers

let interns = team
.filter(employee => employee.getRole() === "Intern")
 .map(intern => generateIntern(intern))
 html+= interns
return html;
}
    
     const generateTeam = team => {

        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Mate Generator</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${renderTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
    };
    
module.exports= generateTeam;