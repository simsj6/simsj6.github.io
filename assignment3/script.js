const audio = document.getElementById('audio');
const toggle = document.getElementById('toggle');
const mute = document.getElementById('mute');

const audioFiles = ['/images/birds.mp3', '/images/crickets.mp3'];
const backgroundImages = ['/images/day-garden.jpg', '/images/night-garden.jpg'];

let isDay = true;
let isMuted = false;

audio.src = audioFiles[0];
document.body.style.backgroundImage = `url(${backgroundImages[0]})`;

function fadeBackground(newImage) {
    document.body.classList.add('fade');
    setTimeout(function() {
        document.body.style.backgroundImage = `url(${newImage})`;
        document.body.classList.remove('fade');
        document.body.classList.add('fade-in');

        setTimeout(function() {
            document.body.classList.remove('fade-in');
        }, 1000);
    }, 1000);
}

toggle.addEventListener('click', function() {
    if (isDay) {
        audio.src = audioFiles[1];
        fadeBackground(backgroundImages[1]);
        // document.body.style.backgroundImage = `url(${backgroundImages[1]})`;
    } else {
        audio.src = audioFiles[0];
        fadeBackground(backgroundImages[0]);
        // document.body.style.backgroundImage = `url(${backgroundImages[0]})`;
    }

    isDay = !isDay;
    audio.play();
});

mute.addEventListener('click', function() {
    if (isMuted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }

    isMuted = !isMuted;
});