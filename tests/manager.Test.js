const Manager = require('../cards/manager');

describe ("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager('Troy', 123456, 'Troy@email.com', 789);

            expect(manager.name).toEqual('Troy');
            expect(manager.id).toEqual(123456);
            expect(manager.email).toEqual('Troy@email.com');
            expect(manager.officeNumber).toEqual(789);
        })      
    })
});