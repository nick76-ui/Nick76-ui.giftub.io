(function () {
    const SESSION_KEY = 'signedIn';

    const PROJECTS = [
        { name: 'Animation Play State', href: './Animation Play State/' },
        { name: 'Assignment - Animation Basics', href: './Assignment - Animation Basics/' },
        { name: 'Assignment - Flexbox Patterns', href: './Assignment - Flexbox Patterns/' },
        { name: 'Assignment - Grid Exerise', href: './Assignment - Grid Exerise/' },
        { name: 'Assignment - Grid Layout Basics', href: './Assignment - Grid Layout Basics/' },
        { name: 'Assignment - HTML Unit 5', href: './Assignment - HTML Unit 5/' },
        { name: 'Class Activity - Adding Classes', href: './Class Activity - Adding Classes/' },
        { name: 'Class Activity - Loading screen', href: './Class Activity - Loading screen/' },
        { name: 'Class Activity - Morphing Square', href: './Class Activity - Morphing Square/' },
        { name: 'Class Activity - Spinning diamond', href: './Class Activity - Spinning diamond/' },
        { name: 'Class activity - Triangle to square then circle', href: './Class activity - Triangle to square then circle/' },
        { name: 'March 5', href: './March 5/' },
    ];

    function isSignedIn() {
        try {
            return window.sessionStorage.getItem(SESSION_KEY) === '1';
        } catch {
            return false;
        }
    }

    function setSignedIn(value) {
        try {
            window.sessionStorage.setItem(SESSION_KEY, value ? '1' : '0');
        } catch {
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const signedInView = document.getElementById('signedInView');
        const signedOutView = document.getElementById('signedOutView');
        const projectsGrid = document.getElementById('projectsGrid');
        const signInLink = document.getElementById('signInLink');
        const logoutBtn = document.getElementById('logoutBtn');

        if (!signedInView || !signedOutView || !projectsGrid) return;

        if (!isSignedIn()) {
            signedInView.hidden = true;
            signedOutView.hidden = false;
            if (signInLink) signInLink.hidden = false;
            if (logoutBtn) logoutBtn.hidden = true;
            return;
        }

        signedInView.hidden = false;
        signedOutView.hidden = true;
        if (logoutBtn) logoutBtn.hidden = false;
        if (signInLink) signInLink.hidden = true;

        projectsGrid.innerHTML = '';
        for (const project of PROJECTS) {
            const a = document.createElement('a');
            a.className = 'project';
            a.href = project.href;

            const label = document.createElement('div');
            label.className = 'project-title';
            label.textContent = project.name;

            a.appendChild(label);
            projectsGrid.appendChild(a);
        }

        logoutBtn?.addEventListener('click', () => {
            setSignedIn(false);
            window.location.replace('/signin.html');
        });
    });
})();

