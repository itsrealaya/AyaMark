/* ==========================================
   AyaMark v1.0
   Settings
========================================== */

const body = document.body;

// Theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.classList.add(savedTheme);
}

function setTheme(theme) {

    body.classList.remove(
        "theme-purple",
        "theme-blue",
        "theme-black",
        "light"
    );

    if (theme !== "default") {
        body.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
}

// Music

const musicEnabled = localStorage.getItem("music");

if (musicEnabled === "off") {

    if (typeof audio !== "undefined") {
        audio.pause();
    }

}

// Background

const autoBackground =
localStorage.getItem("background");

if (autoBackground === "off") {

    if (typeof bgVideo !== "undefined") {
        bgVideo.pause();
    }

}
