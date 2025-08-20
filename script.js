// Hardcoded credentials
const hardcodedEmail = "test@example.com";
const hardcodedPassword = "Password123";

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const feedback = document.getElementById("feedback");
const loginBtn = document.getElementById("loginBtn");
const showPassword = document.getElementById("showPassword");

// Regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
emailInput.addEventListener("input", () => {
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Invalid email format";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
  } else {
    passwordError.textContent = "";
  }
});

// Show/Hide password
showPassword.addEventListener("change", () => {
  passwordInput.type = showPassword.checked ? "text" : "password";
});

// Form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Disable button to prevent multiple clicks
  loginBtn.disabled = true;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation check
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email";
    loginBtn.disabled = false;
    return;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    loginBtn.disabled = false;
    return;
  }

  // Authentication
  if (email === hardcodedEmail && password === hardcodedPassword) {
    feedback.style.color = "green";
    feedback.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "success.html";
    }, 1500);
  } else {
    feedback.style.color = "red";
    feedback.textContent = "Invalid credentials. Try again.";
    loginBtn.disabled = false;
  }
});
