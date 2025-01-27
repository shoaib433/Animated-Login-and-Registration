const loginsec = document.querySelector('.login-section');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

// Toggle between login and register forms
registerlink.addEventListener('click', () => {
    loginsec.classList.add('active');
});
  
loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active');
});

// Function to show the popup
function showPopup() {
    document.getElementById('popup').classList.add('active');
}

// Function to hide the popup
function closePopup() {
    document.getElementById('popup').classList.remove('active');
}

// Add event listeners to both forms
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    showPopup(); // Show the popup
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    showPopup(); // Show the popup
});
