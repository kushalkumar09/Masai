document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("themeSelector");

    // Function to apply theme
    function applyTheme(theme) {
        document.body.classList.remove("light-theme", "dark-theme", "blue-theme");
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else if (theme === "blue") {
            document.body.classList.add("blue-theme");
        } // Default is light, no extra class needed
    }

    // Check sessionStorage for saved theme
    const savedTheme = sessionStorage.getItem("selectedTheme") || "light";
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);

    // Listen for theme selection changes
    themeSelector.addEventListener("change", () => {
        const selectedTheme = themeSelector.value;
        sessionStorage.setItem("selectedTheme", selectedTheme);
        applyTheme(selectedTheme);
    });
});
