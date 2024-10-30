// Select elements
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');

// Event listener for toggle button
toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Toggle active class to show/hide
    toggle.classList.toggle('active'); // Optional: Add a class for toggle button styling
});
