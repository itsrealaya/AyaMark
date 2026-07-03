/* ===========================
   AyaMark Loading Premium
=========================== */

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const avatar = document.getElementById("avatar");
const loader = document.getElementById("loader");

let value = 1;

// Thời gian loading: 2 giây
const duration = 2000;
const interval = duration / 99;

const timer = setInterval(() => {

    value++;

    if (value > 100) value = 100;

    bar.style.width = value + "%";
    percent.textContent = value + "%";

    if (value >= 100) {

        clearInterval(timer);

        // Avatar Zoom
        avatar.style.transition = "0.25s";
        avatar.style.transform = "scale(1.2)";

        setTimeout(() => {

            loader.style.transition = "opacity .4s";
            loader.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "https://AyaMark.zyo.lol/";
            }, 400);

        }, 250);

    }

}, interval);
