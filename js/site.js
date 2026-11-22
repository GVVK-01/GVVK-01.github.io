const page = document.body.dataset.page;
const de = document.documentElement.lang === "de";
const label = { open: de ? "Schließen" : "Close", closed: de ? "Menü" : "Menu" };
document.querySelectorAll(".nav a").forEach((link) => {
  if (link.dataset.page === page) link.setAttribute("aria-current", "page");
});

const button = document.querySelector(".menu-btn");
button?.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.textContent = open ? label.open : label.closed;
});

document.querySelectorAll(".topbar a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    if (button) {
      button.setAttribute("aria-expanded", "false");
      button.textContent = label.closed;
    }
  });
});
