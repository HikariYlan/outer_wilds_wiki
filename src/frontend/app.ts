const buttonAudio = document.getElementById('buttonAudio') as HTMLAudioElement;
const buttons = document.querySelectorAll('button');
const labelAudio = document.getElementById('labelAudio') as HTMLAudioElement;
const labels = document.querySelectorAll('label');

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

function fullScreen(): void {
    if (document.fullscreenElement) {
        exitFullScreen();
    } else {
        enterFullScreen();
    }
}

function enterFullScreen(): void {
    document.body.requestFullscreen();
}

function exitFullScreen(): void {
    document.exitFullscreen();
}

function muteAudio(): void {
    document.querySelectorAll('audio').forEach(media => {
        (media as HTMLAudioElement).muted = true;
    });
}

function unmuteAudio(): void {
    document.querySelectorAll('audio').forEach(media => {
        (media as HTMLAudioElement).muted = false;
    });
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        muteAudio();
    } else {
        unmuteAudio();
    }
});
