const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.querySelector(".form-message").textContent = "Thank you! Your message has been received.";
    form.reset();
  });
}
