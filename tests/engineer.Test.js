const Engineer = require('../cards/engineer');

describe ("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer('Troy', 123456, 'Troy@email.com', 'troygit');

            expect(engineer.name).toEqual('Troy');
            expect(engineer.id).toEqual(123456);
            expect(engineer.email).toEqual('Troy@email.com');
            expect(engineer.github).toEqual('Troygit');
        })      
    })
});