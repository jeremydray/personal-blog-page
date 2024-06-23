const themeToggle = document.querySelector('#theme-switcher');
const themeSettings = document.querySelector('.container');

// Function to set light and dark mode attribute to page elements based on current setting

let mode = 'light';

if (localStorage.getItem('mode') === 'dark') {
    mode = 'dark';
    themeSettings.setAttribute('class', 'dark');
} else {
    mode = 'light';
    themeSettings.setAttribute('class', 'light');
}


//Allows the user to toggle their preferred setting and stores the current setting locally so it does not need to be continuously toggled on each page change;
themeToggle.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        themeSettings.setAttribute('class', 'dark');
        localStorage.setItem('mode', 'dark')
    } else {
        mode = 'light';
        themeSettings.setAttribute('class', 'light');
        localStorage.setItem('mode', 'light')
    }
});

