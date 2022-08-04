const Intern = require('../cards/intern');

describe ("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('Troy', 123456, 'Troy@email.com', 'UT');

            expect(intern.name).toEqual('Troy');
            expect(intern.id).toEqual(123456);
            expect(intern.email).toEqual('Troy@email.com');
            expect(intern.school).toEqual('UT');
        })      
    })
});