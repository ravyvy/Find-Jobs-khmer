/* ===== Authentication Logic ===== */

const AUTH_USERS_KEY = 'jobkh_users';
const AUTH_SESSION_KEY = 'jobkh_session';

// Simulating data.json structure in localStorage
const DEFAULT_ADMIN = {
    username: 'ravy',
    password: '9999',
    role: 'admin'
};

const Auth = {
    // Initialize Auth
    init: function () {
        // Check if users exist, if not, create admin
        const users = this.getUsers();
        if (users.length === 0) {
            this.saveUser(DEFAULT_ADMIN);
            console.log('Admin account initialized: ravy / 9999');
        } else {
            // Ensure admin exists even if users array is not empty
            const adminExists = users.some(u => u.username === DEFAULT_ADMIN.username);
            if (!adminExists) {
                this.saveUser(DEFAULT_ADMIN);
                console.log('Admin account restored: ravy / 9999');
            }
        }
        this.updateNavbar();
    },

    // Get all users
    getUsers: function () {
        try {
            return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || [];
        } catch (e) {
            return [];
        }
    },

    // Save a new user
    saveUser: function (user) {
        const users = this.getUsers();
        // Check if username exists
        if (users.some(u => u.username === user.username)) {
            return { success: false, message: 'Username already exists' }; // Username exists
        }
        users.push(user);
        localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
        return { success: true };
    },

    // Register new user
    register: function (username, password) {
        return this.saveUser({
            username: username,
            password: password,
            role: 'user',
            createdAt: new Date().toISOString()
        });
    },

    // Login
    login: function (username, password) {
        const users = this.getUsers();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            // Create session
            const session = {
                username: user.username,
                role: user.role,
                loginTime: new Date().toISOString()
            };
            localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
            this.updateNavbar();
            return { success: true, user: session };
        }
        return { success: false, message: 'Invalid username or password' }; // Invalid credentials
    },

    // Logout
    logout: function () {
        localStorage.removeItem(AUTH_SESSION_KEY);
        this.updateNavbar();
        window.location.href = 'index.html';
    },

    // Check if logged in
    getSession: function () {
        try {
            return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY));
        } catch (e) {
            return null;
        }
    },

    // Middleware to protect pages
    requireAuth: function () {
        const session = this.getSession();
        if (!session) {
            window.location.href = 'login.html?redirect=' + encodeURIComponent(window.location.pathname);
            return false;
        }
        return true;
    },

    // Update Navbar UI
    updateNavbar: function () {
        const session = this.getSession();
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;

        // Remove existing auth buttons
        const existingAuthBtn = navLinks.querySelector('.auth-btn-nav');
        if (existingAuthBtn) existingAuthBtn.remove();

        const existingUserDisplay = navLinks.querySelector('.user-display-nav');
        if (existingUserDisplay) existingUserDisplay.remove();

        if (session) {
            // Logged In
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.className = 'auth-btn-nav logout';
            logoutLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout'; // Logout
            logoutLink.onclick = (e) => {
                e.preventDefault();
                this.logout();
            };

            const userDisplay = document.createElement('span');
            userDisplay.className = 'user-display-nav';
            userDisplay.innerHTML = `<i class="fas fa-user-circle"></i> ${session.username}`;
            userDisplay.style.color = 'var(--text-primary)';
            userDisplay.style.fontWeight = '600';
            userDisplay.style.marginLeft = '15px';
            userDisplay.style.marginRight = '10px';

            // Insert before last item or handle mobile menu logic
            // For simplicity, append to navLinks
            navLinks.appendChild(userDisplay);
            navLinks.appendChild(logoutLink);
        } else {
            // Logged Out
            const loginLink = document.createElement('a');
            loginLink.href = 'login.html';
            loginLink.className = 'auth-btn-nav login';
            loginLink.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login'; // Login
            navLinks.appendChild(loginLink);
        }
    }
};

// Auto-run init on load
document.addEventListener('DOMContentLoaded', () => {
    Auth.init();
});
