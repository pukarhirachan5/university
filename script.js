// Function to redirect based on dropdown selection
function redirect() {
    const dropdown = document.getElementById('help-dropdown');
    const selectedOption = dropdown.value;

    if (selectedOption === "consult") {
        window.location.href = "#consult";
    } else if (selectedOption === "services") {
        window.location.href = "#services";
    } else if (selectedOption === "faq") {
        window.location.href = "#faq";
    } else {
        alert("Please select a valid option.");
    }
}

// Function to redirect to Login page
function login() {
    window.location.href = "login.html";  // Redirect to Login page
}

// Function to redirect to Signup page
function signup() {
    window.location.href = "signup.html";  // Redirect to Signup page
}

// Validate password match in the signup form
document.querySelector('.auth-form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password') ? document.getElementById('confirm-password').value : null;

    if (confirmPassword && password !== confirmPassword) {
        alert('Passwords do not match!');
        e.preventDefault();
    }
});

// Toggle FAQ answers
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Toggle visibility
    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.innerHTML = "&#9660;"; // Down arrow
    } else {
        answer.style.display = "block";
        arrow.innerHTML = "&#9650;"; // Up arrow
    }
}

// Submit appointment form
function submitAppointment(event) {
    event.preventDefault(); // Prevents default form submission

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const doctor = document.getElementById('doctor').value;

    // Handle appointment booking (this could be sent to a backend)
    alert(`Appointment booked successfully!\nName: ${name}\nContact: ${contact}\nDate: ${appointmentDate}\nDoctor: ${doctor}`);
}

// Function to open the signup form modal
function openSignupForm(program) {
    // Set the program name in the modal
    document.getElementById('programName').innerText = program;
    // Display the modal
    document.getElementById('signupModal').style.display = 'block';
}

// Function to close the signup form modal
function closeSignupForm() {
    // Hide the modal
    document.getElementById('signupModal').style.display = 'none';
    // Clear the input fields
    document.getElementById('signupForm').reset();
}

// Function to handle form submission for signup
function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get the name and contact information
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const program = document.getElementById('programName').innerText;

    // Log the information to the console
    console.log(`Program: ${program}, Name: ${name}, Contact: ${contact}`);

    // Close the modal after submission
    closeSignupForm();
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('signupModal');
    if (event.target === modal) {
        closeSignupForm();
    }
}

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
