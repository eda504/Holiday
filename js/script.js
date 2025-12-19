const snowflakesContainer = document.querySelector('.snowflakes');
const snowButton = document.getElementById('snowButton');

// Create initial snowflakes
function createInitialSnow() {
    for (let i = 0; i < 20; i++) {
        createSnow();
    }
}

// Create a single snow piece
function createSnow() {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.animationDelay = `${Math.random() * 5}s`;
    flake.style.animationDuration = `${Math.random() * 5 + 10}s`; // 10-15s
    flake.style.width = `${Math.random() * 5 + 5}px`; // 5-10px
    flake.style.height = flake.style.width;
    snowflakesContainer.appendChild(flake);

    // Remove after animation to prevent buildup
    setTimeout(() => {
        flake.remove();
    }, parseFloat(flake.style.animationDuration) * 1000 + 1000);
}

// Button click to create a burst of snow
snowButton.addEventListener('click', () => {
    for (let i = 0; i < 50; i++) {
        createSnow();
    }
});

// Start with initial snow
createInitialSnow();

// Continuous light snow
setInterval(createSnow, 500);

// Music player code
const audio = document.getElementById('holidaySong');
const musicToggle = document.getElementById('musicToggle');

// Play on FIRST user click anywhere (bypasses autoplay block)
document.addEventListener('click', function startMusicOnce() {
    if (!audio.hasAttribute('data-started')) {
        audio.volume = 0.3;
        audio.play().catch(() => {});
        musicToggle.classList.add('playing');
        audio.setAttribute('data-started', 'true');
    }
    // Only remove once (optional)
    document.removeEventListener('click', startMusicOnce);
}, { once: true }); // Better: use once: true

// Toggle with the button
musicToggle.addEventListener('click', () => {
    console.log('Music toggle clicked');
    if (audio.paused) {
        audio.play();
        musicToggle.classList.add('playing');
    } else {
        audio.pause();
        musicToggle.classList.remove('playing');
    }
});

