/* ==========================================
   AyaMark v1.0 - Music
========================================== */

const music = document.getElementById("music");
const playBtn = document.getElementById("play");
const enterBtn = document.getElementById("enterBtn");

// Âm lượng mặc định
music.volume = 0.4;

// Phát nhạc sau khi bấm Enter
enterBtn.addEventListener("click", async () => {
    try {
        await music.play();

        if (playBtn) {
            playBtn.textContent = "⏸";
        }
    } catch (err) {
        console.log("Không thể phát nhạc:", err);
    }
});

// Nút Play/Pause
if (playBtn) {
    playBtn.addEventListener("click", async () => {

        if (music.paused) {

            await music.play();
            playBtn.textContent = "⏸";

        } else {

            music.pause();
            playBtn.textContent = "▶";

        }

    });
}
