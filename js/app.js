/* ===========================
   AyaMark Loading Premium
=========================== */

const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const avatar = document.getElementById("avatar");
const loader = document.getElementById("loader");

let value = 1;
const duration = 4000;
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

                window.location.href =
                "https://AyaMark.zyo.lol";

            },400);

        },250);

    }

}, interval);

/* ===========================
   Sakura Effect
=========================== */

const canvas = document.getElementById("sakura");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const petals = [];

for (let i = 0; i < 60; i++) {
    petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 2 + Math.random() * 4,
        vx: (Math.random() - 0.5) * 1.2,
        vy: 1 + Math.random() * 2
    });
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    petals.forEach(p => {

        ctx.beginPath();
        ctx.fillStyle = "#ffb7d5";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y > canvas.height) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(draw);

}

draw();
