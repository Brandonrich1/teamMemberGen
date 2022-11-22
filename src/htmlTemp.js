const engineer = require("../lib/engineer.js");

//creates the html for the mananger
const generateMananger = mananger => {
        return`
<div class="card employee-card">
        <div class="card-header bg-primary text white">
        <h2 class="card-title">${mananger.getname()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${mananger.getRole()}</h3>
        </div>
        <div class="card-body>
            <ul class="list-group">
                <li class="list-group-item">ID: ${mananger.getIdS()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${mananger.getEmail()}">${mananger.getEmail()}</a></li>
                <li class="list-group-item"> Office #: ${mananger.getOfficeNumber()}</li>
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
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>
    `;
};

function renderTeam(team){
const html = [];

html.push( team
    .filter(employee => employee.getRole() === "Mananger")
    .map(mananger => generateMananger(mananger))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
    );
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
    );
return html.join("");
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