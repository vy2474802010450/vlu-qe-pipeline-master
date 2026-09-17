function login(user, pass) {
    // Tài khoản bị khóa
    if (user === 'locked') {
        return false;
    }

    // Username rỗng
    if (!user) {
        return false;
    }

    // Đăng nhập hợp lệ
    return user === 'admin' && pass === '123';
}

module.exports = login;
