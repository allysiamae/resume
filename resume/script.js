// Apply dark mode if previously selected
if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark-mode");
}

// Dark mode toggle button
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference
  localStorage.setItem(
    "dark",
    document.body.classList.contains("dark-mode")
  );
});

// FADE-IN ANIMATIONS
const faders = document.querySelectorAll(".fade-in");

function reveal() {
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});
