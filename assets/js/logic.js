const themeToggle = document.querySelector('#theme-switcher');
const themeSettings = document.querySelector('.container');

let mode = 'light';

themeToggle.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        themeSettings.setAttribute('class', 'dark');
    } else {
        mode = 'light';
        themeSettings.setAttribute('class', 'light');
    }
});
