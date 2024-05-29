document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignupLink = document.getElementById('switch-to-signup');
    const switchToLoginLink = document.getElementById('switch-to-login');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail(email) {
        return emailRegex.test(email);
    }

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                alert(`${input.previousElementSibling.textContent} is required`);
                return;
            }

            if (input.type === 'email' && !validateEmail(input.value)) {
                isValid = false;
                alert('Please enter a valid email address');
                return;
            }
        });

        return isValid;
    }

    switchToSignupLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    switchToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(loginForm)) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Logic xử lý đăng nhập
            // Giả sử đăng nhập thành công
            alert(`Đăng nhập với Email: ${email}\nPassword: ${password}`);
            window.location.href = 'index.html';
        }
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(signupForm)) {
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Mật khẩu không khớp. Vui lòng thử lại.');
                return;
            }
            
            // Logic xử lý tạo tài khoản
            // Giả sử tạo tài khoản thành công
            alert(`Tạo tài khoản với Email: ${email}\nPassword: ${password}`);
            window.location.href = 'index.html';
        }
    });

    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Chức năng quên mật khẩu chưa được triển khai.');
    });
});
