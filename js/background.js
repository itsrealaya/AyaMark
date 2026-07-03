/* ==========================================
   AyaMark v1.0
   Random Background
========================================== */

const bgVideo = document.getElementById("bgVideo");

const videos = [
    "assets/videos/bg01.mp4",
    "assets/videos/bg02.mp4",
    "assets/videos/bg03.mp4",
    "assets/videos/bg04.mp4",
    "assets/videos/bg05.mp4"
];

let currentVideo = 0;

function randomVideo() {

    let next;

    do {
        next = Math.floor(Math.random() * videos.length);
    } while (next === currentVideo && videos.length > 1);

    currentVideo = next;

    bgVideo.style.opacity = "0";

    setTimeout(() => {

        bgVideo.src = videos[currentVideo];

        bgVideo.load();

        bgVideo.play().catch(() => {});

        bgVideo.style.opacity = "1";

    }, 500);
}

bgVideo.addEventListener("ended", randomVideo);

// Đổi nền mỗi 30 giây
setInterval(randomVideo, 30000);
