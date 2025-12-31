let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
}

// Greeting & Date
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.innerText = "Good Morning ☀️";
else if (hour < 18) greeting.innerText = "Good Afternoon 🌤️";
else greeting.innerText = "Good Evening 🌙";

// Form Validation
function validateForm() {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }
  alert("Message Sent Successfully!");
  return true;
}

// Theme Toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};