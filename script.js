// === Toggle Password Visibility ===
function togglePassword() {
  const passwordField = document.getElementById("password");  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

// === Form Validation ===
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page refresh

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("⚠️ Please fill in both fields!");
    return;
  }

  // You can later connect this with backend authentication
  alert("Access Denied!!  " + username );
});
