const body = document.querySelector('body');
const video = document.querySelector('video');
const vSource = document.querySelector('source[id="vSource"]');
const vSourceSkip = document.querySelector('source[id="vSourceSkip"]');
const audio = document.querySelector('audio[id="background-audio"]');
const logos = document.getElementById('logos');
const separator_top = document.getElementById('separator_top');
const separator_bottom = document.getElementById('separator_bottom');
const buttonsBox = document.getElementById('buttons');
const version = document.getElementById('version');
const closeButton = document.getElementById("close");
const dialog = document.querySelector("dialog");

if (localStorage.getItem('skipIntro') === null) {
    localStorage.setItem('skipIntro', 'false');
}

if (localStorage.getItem('skipIntro') === 'true') {
    vSource.remove();
    audio.currentTime = 24.5;

} else {
    vSourceSkip.remove();
}

video.load();

closeButton.addEventListener("click", () => {
    dialog.remove();
    body.classList.add('nocursor');
    video.play().then(() => {
        console.log("[OUTER WILDS WIKI] Vidéo lancée");
    });
    audio.play().then(() => {
        console.log("[OUTER WILDS WIKI] Musique lancée");
    })
});

video.addEventListener('ended', () => {
    transition();
    console.log("[OUTER WILDS WIKI] Vidéo terminée")
});

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
        transition();
    }
});

function transition() {

    body.classList.remove('nocursor');
    logos.classList.remove('hidden');
    setTimeout(() => logos.classList.add('visible'), 50);
    separator_top.classList.remove('hidden');
    setTimeout(() => separator_top.classList.add('visible'), 50);
    separator_bottom.classList.remove('hidden');
    setTimeout(() => separator_bottom.classList.add('visible'), 2000);
    buttonsBox.classList.remove('hidden');
    setTimeout(() => buttonsBox.classList.add('visible'), 1500);
    version.classList.remove('hidden');
    setTimeout(() => version.classList.add('visible'), 2000);
}
