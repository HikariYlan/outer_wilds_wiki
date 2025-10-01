var buttonAudio = document.getElementById('buttonAudio');
var buttons = document.querySelectorAll('button');
var labelAudio = document.getElementById('labelAudio');
var labels = document.querySelectorAll('label');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonAudio.currentTime = 0; // remet à zéro si déjà en lecture
        buttonAudio.play();
    });
});

labels.forEach(lbl => {
    lbl.addEventListener('click', () => {
        labelAudio.currentTime = 0; // remet à zéro si déjà en lecture
        labelAudio.play();
    });
});

function fullScreen() {
    if (document.fullscreenElement) {
        exitFullScreen();
    } else {
        enterFullScreen();
    }
}

function enterFullScreen() {
    body.requestFullscreen();
}

function exitFullScreen() {
    document.exitFullscreen();
}

function muteAudio() {
    document.querySelectorAll('audio').forEach(media => {
        media.muted = true;
    });
}

function unmuteAudio() {
    document.querySelectorAll('audio').forEach(media => {
        media.muted = false;
    });
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        muteAudio();
    } else {
        unmuteAudio();
    }
});