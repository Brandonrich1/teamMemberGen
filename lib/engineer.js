//extend the engineer js to the employee js.

const employee = require("./employee.js");

class engineer extends employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports= engineer;