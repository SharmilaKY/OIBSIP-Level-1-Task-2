const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Toggle dark mode
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
