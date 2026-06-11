(function () {
    const USERNAME = 'user123';
    const PASSWORD = 'cheesecake';
    const SESSION_KEY = 'signedIn';

    function setSignedIn(value) {
        try {
            window.sessionStorage.setItem(SESSION_KEY, value ? '1' : '0');
        } catch {
        }
    }

    function isSignedIn() {
        try {
            return window.sessionStorage.getItem(SESSION_KEY) === '1';
        } catch {
            return false;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (isSignedIn()) {
            window.location.replace('/index.html');
            return;
        }

        const form = document.getElementById('signInForm');
        const errorBox = document.getElementById('errorBox');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        if (!form) return;

        form.addEventListener('submit', async (e) => {

            e.preventDefault();

            const username = (usernameInput.value || '').trim();
            const password = (passwordInput.value || '');

            const usernameOk = username === USERNAME;
            const passwordOk = password === PASSWORD;

            if (usernameOk && passwordOk) {
                setSignedIn(true);
                window.location.replace('/index.html');
                return;
            }

            setSignedIn(false);
            if (errorBox) {
                errorBox.hidden = false;
                errorBox.textContent = 'Invalid username or password.';
            }

            if (passwordInput) passwordInput.value = '';
            passwordInput?.focus?.();
        });
    });
})();

