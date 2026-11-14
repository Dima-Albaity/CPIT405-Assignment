const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeIcon() {
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const currentTheme =
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";

    localStorage.setItem("portfolio-theme", currentTheme);

    updateThemeIcon();
});

updateThemeIcon();
