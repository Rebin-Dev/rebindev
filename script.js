 
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

const savedTheme = localStorage.getItem("rebin-theme");

if (savedTheme) {
    html.setAttribute("data-bs-theme", savedTheme);
}

function updateThemeIcon() {
    const currentTheme = html.getAttribute("data-bs-theme");
    themeIcon.textContent = currentTheme === "dark" ? "☀" : "☾";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("rebin-theme", newTheme);

    updateThemeIcon();
});

const navbarLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.getElementById("mainNavbar");

navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
            const collapse = bootstrap.Collapse.getInstance(navbarCollapse);

            if (collapse) {
                collapse.hide();
            }
        }
    });
});
 
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const text = `سلام، برای رزرو پروژه پیام میدم

اسم من: ${name}
ایمیل من: ${email}
موضوع: ${subject}
پیام: ${message}

با تشکر`;

    const telegramUrl = `https://t.me/PRO_MAX1253?text=${encodeURIComponent(text)}`;

    window.open(telegramUrl, "_blank");
});