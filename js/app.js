/* ==========================================
   AyaMark v1.0
========================================== */

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const enter = document.getElementById("enterButton");

    if (!intro || !enter) return;

    enter.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        }, 600);

    });

});
