// Select the dropdown element using querySelector
const themeSelector = document.querySelector('#theme-select');

// Function to change the theme
function changeTheme() {
    // Check the current value of the select element
    const selectedTheme = themeSelector.value;

    // Get the logo image element
    const logo = document.querySelector('footer img');

    // If the value is 'dark', add the dark class and change the logo source
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        logo.src = 'byui-logo_dark_theme.png'; // Change this to the path of the white logo
    } else {
        // Otherwise, remove the dark class and revert the logo source
        document.body.classList.remove('dark-theme');
        logo.src = 'byui-logo_blue.webp'; // Change this to the path of the blue logo
    }
}

// Add an event listener to the themeSelector
themeSelector.addEventListener('change', changeTheme);

