const Engineer = require('../cards/engineer');

describe ("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer('troy', 123456, 'troy@email.com', 'troygit');

            expect(engineer.name).toEqual('troy');
            expect(engineer.id).toEqual(123456);
            expect(engineer.email).toEqual('troy@email.com');
            expect(engineer.github).toEqual('troygit');
        })      
    })
});