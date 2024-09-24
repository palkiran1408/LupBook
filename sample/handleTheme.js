// handleTheme.js

// List of available themes
const themes = ['light', 'dark'];

// Function to apply the theme
function applyTheme(theme) {
  // Remove all theme classes from the body
  themes.forEach(t => document.body.classList.remove(t));

  // Add the selected theme class if it's valid
  if (themes.includes(theme)) {
    document.body.classList.add(theme);
    localStorage.setItem('selectedTheme', theme); // Save the selected theme to local storage
    document.getElementById('themeDropdown').innerText = `Select Theme (${theme.charAt(0).toUpperCase() + theme.slice(1)})`; // Update dropdown text
  }
}

// Function to set the theme based on user choice or system preference
function setTheme(theme) {
  if (theme === 'auto') {
    // Set the theme based on the system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  } else {
    applyTheme(theme);
  }
}

// Initialize the theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'light'; // Default to 'light'
  setTheme(savedTheme);
});

// Event listeners for theme selection (optional)
document.querySelectorAll('.theme-option').forEach(option => {
  option.addEventListener('click', () => setTheme(option.getAttribute('data-theme')));
});
