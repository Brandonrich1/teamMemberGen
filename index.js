//initilize all requirements.
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern =require("./lib/intern.js");
const inquirer= require("inquirer");
const path = require("path");
const fs = require ("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const generateTeam= require ("./src/htmlTemp.js");
teamArray = [];

    function createTeam(){
        inquirer.prompt([{
            type: "list",
            message: "What type of employee are you adding?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "None"]
        }]).then(function(userInput) {
            switch(userInput.addEmployeePrompt) {
                case "Manager":
                addManager();
                break;
                case "Engineer":
                addEngineer();
                break;
                case "Intern":
                    addIntern(); break;
                    default: htmlBuilder();
            }
        })
    }


//oop 
function addManager(){
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "Manager's name:"
    },
    {
        type: "input",
        name: "managerId",
        Message: "Manager's Employee ID #",
    },
    {
        type: "input",
        name: "manangerEmail",
        message: "Manager's Email Address:",
    },
    {
        type: "input",
        name: "manangerOfficeNumber",
        message: "Mananger's office #:",
    },
]).then(answers => {
    const mananger = new manager(answers.manangerName, answers.manangerId, answers.manangerEmail, answers.manangerOfficeNumber);
    teamArray.push(mananger);
    createTeam();
});
}

function addEngineer(){
    inquirer.prompt([{
        type: "input",
        name: "engineerName",
        message: "Engineer's name:"
    },
    {
        type: "input",
        name: "engineerId",
        Message: "Engineer's Employee ID #",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's Email Address:",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Engineer's Githib profile name:",
    },
]).then(answers => {
    const createdEngineer = new engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamArray.push(createdEngineer);
    createTeam();
});
}

function addIntern(){
    inquirer.prompt([{
        type: "input",
        name: "internName",
        message: "Inter's name:"
    },
    {
        type: "input",
        name: "internId",
        Message: "Intern's Employee ID #",
    },
    {
        type: "input",
        name: "internEmail",
        message: "intern's Email Address:",
    },
    {
        type: "input",
        name: "internSchool",
        message: "School's intern has attended:",
    },
]).then(answers => {
    const createdIntern = new intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamArray.push(createdIntern);
    createTeam();
});
}

function htmlBuilder(){
    console.log("Team Created!")
    fs.writeFileSync(outputPath, generateTeam(teamArray), "utf-8")
}
createTeam();


