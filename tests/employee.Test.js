const Employee = require('../cards/employee');

describe ("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email if provided valid arguments", () => {
            const employee = new Employee('troy', 123456, 'troy@email.com');

            expect(employee.name).toEqual('troy');
            expect(employee.id).toEqual(123456);
            expect(employee.email).toEqual('troy@email.com');
        })      
    })
});