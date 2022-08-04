const Intern = require('../cards/intern');

describe ("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('troy', 123456, 'troy@email.com', 'UT');

            expect(intern.name).toEqual('troy');
            expect(intern.id).toEqual(123456);
            expect(intern.email).toEqual('troy@email.com');
            expect(intern.school).toEqual('UT');
        })      
    })
});