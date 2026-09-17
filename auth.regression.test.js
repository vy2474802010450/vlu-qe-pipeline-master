const login = require('./auth');

describe('Regression Test - Authentication', () => {
    test('correct username and password should return true', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('wrong password should return false', () => {
        expect(login('admin', '9999')).toBe(false);
    });

    test('empty username should return false', () => {
        expect(login('', '123')).toBe(false);
    });

    test('username with special characters should return false', () => {
        expect(login('@#$%', '123')).toBe(false);
    });

    test('locked account should return false', () => {
        expect(login('locked', '123')).toBe(false);
    });
});
