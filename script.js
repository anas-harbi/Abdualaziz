
// JavaScript for adding interactivity

// Example functionality: Filtering projects by category (optional if implemented in future)

// Contact form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill out all fields before submitting.');
        }
    });
});
