document.getElementById("open-letter").addEventListener("click", function() {
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("letter").classList.add("fade-in"); // Smooth fade-in effect
    document.getElementById("bg-music").play();
    this.style.display = "none"; // Hide "Open the Letter" button
});

document.getElementById("next-button").addEventListener("click", function() {
    let letter = document.getElementById("letter");
    let gifSection = document.getElementById("gif-section");

    letter.classList.add("fade-out"); // Fade out the letter
    setTimeout(() => {
        letter.classList.add("hidden"); // Hide letter after fade-out
        gifSection.classList.remove("hidden");
        gifSection.classList.add("fade-in"); // Fade in the GIF section
    }, 500);
});

document.getElementById("next-gif").addEventListener("click", function() {
    let gifSection = document.getElementById("gif-section");
    let carnationSection = document.getElementById("carnation-section");

    gifSection.classList.add("fade-out"); // Fade out the GIF section
    setTimeout(() => {
        gifSection.classList.add("hidden"); // Hide GIF after fade-out
        carnationSection.classList.remove("hidden");
        carnationSection.classList.add("fade-in"); // Fade in the carnation section
    }, 500);
});
