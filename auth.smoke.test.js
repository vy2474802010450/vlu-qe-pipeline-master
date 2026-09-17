const login = require('./auth');

describe('Smoke Test - Authentication', () => {
    test('admin with password 123 should login successfully', () => {
        expect(login('admin', '123')).toBe(true);
    });
});
