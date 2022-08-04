const Employee = require('../cards/employee');

describe ("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email if provided valid arguments", () => {
            const employee = new Employee('Troy', 123456, 'Troy@email.com');

            expect(employee.name).toEqual('Troy');
            expect(employee.id).toEqual(123456);
            expect(employee.email).toEqual('Troy@email.com');
        })      
    })
});