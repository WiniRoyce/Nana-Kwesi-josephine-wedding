// JavaScript to handle the transition and music
const welcomeSection = document.getElementById("welcomeSection");
const invitationDetails = document.getElementById("invitationDetails");
const playPauseBtn = document.getElementById("playPauseBtn");
const backgroundMusic = document.getElementById("backgroundMusic");

// Reveal invitation details when clicking the welcome section
welcomeSection.addEventListener("click", () => {
    welcomeSection.classList.add("hidden");
    invitationDetails.classList.add("active");

    // Play music when the card is revealed
    backgroundMusic.play();
    playPauseBtn.textContent = "Pause Music";
});

// Toggle play/pause for the music
playPauseBtn.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.textContent = "Pause Music";
    } else {
        backgroundMusic.pause();
        playPauseBtn.textContent = "Play Music";
    }
});
