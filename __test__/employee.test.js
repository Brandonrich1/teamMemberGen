const Employee = require("../lib/employee.js");

describe("employee", () =>{
    it("name", () => {
        const expectedName= "hello"
        const employee = new Employee(expectedName, null, null)
        expect(employee.getName()).toEqual(expectedName)
    })
});