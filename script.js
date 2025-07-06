function setTheme(isDark) {
    const btn = document.getElementById('themeToggleBtn');
    if (isDark) {
        document.body.classList.add('dark-theme');
        btn.innerHTML = 'Light <span style="font-size:1.2em;">🌞</span>';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        btn.innerHTML = 'Dark <span style="font-size:1.2em;">🌙</span>';
        localStorage.setItem('theme', 'light');
    }
}

function toggleTheme() {
    const isDark = !document.body.classList.contains('dark-theme');
    setTheme(isDark);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.onclick = toggleTheme;
    }
});
