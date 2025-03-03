    // Підсвічування
document.querySelectorAll(".two, .three, .four").forEach(link => {
    link.addEventListener("mouseenter", () => {
        document.querySelector(".one").style.opacity = "0.6";
    });
    link.addEventListener("mouseleave", () => {
        document.querySelector(".one").style.opacity = "1";
    });
});
    // Темна тема
const themeToggle = document.getElementById("themetoggle");
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

if (isDarkMode) {
    document.body.classList.add("darkmode");
    smoothScrollbarTransition(true);
}

themeToggle.addEventListener("click", () => {
    const darkModeEnabled = document.body.classList.toggle("darkmode");
    smoothScrollbarTransition(darkModeEnabled);

    if (darkModeEnabled) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.removeItem("darkMode");
    }
});
function smoothScrollbarTransition(isDarkMode) {
    let startColor = isDarkMode ? [78, 48, 103] : [0, 0, 0];
    let endColor = isDarkMode ? [0, 0, 0] : [78, 48, 103];
    let steps = 150;
    let interval = 0;
    let step = 0;
    let scrollTrack = document.createElement("style");
    document.head.appendChild(scrollTrack);

    let animation = setInterval(() => {
        if (step >= steps) {
            clearInterval(animation);
            return;
        }
        let r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * (step / steps));
        let g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * (step / steps));
        let b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * (step / steps));

        scrollTrack.innerHTML = `
            body::-webkit-scrollbar-track {
                background-color: rgb(${r}, ${g}, ${b}) !important;
            }
        `;
        step++;
    }, interval);
}