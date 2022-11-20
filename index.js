const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlPage");
const team=[];
addToTeam();

function addToTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Add an Employee, or select, 'finish'.",
            choices: ["Manager", "Employee", "Intern", "Finish"]
        }
    ]).then(function(data) {
        const employeeRole = data.addEmployee;
        if (employeeRole === "Manager") {
            managerInfo();
        }
        else if (employeeRole === "Engineer") {
            engineerInfo();
        }
        else if (employeeRole === "Intern") {
            internInfo();
        }
        else if (employeeRole === "Finish") {
            renderTeam();
        }

    });
}

function managerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Manager's name:"
        },
    ])
}