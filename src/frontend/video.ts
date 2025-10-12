const body = document.querySelector('body') as HTMLBodyElement;
const video = document.querySelector('video') as HTMLVideoElement;
const audio = document.querySelector('audio[id="background-audio"]') as HTMLAudioElement;
const logos = document.getElementById('logos') as HTMLElement;
const separator_top = document.getElementById('separator_top') as HTMLElement;
const separator_bottom = document.getElementById('separator_bottom') as HTMLElement;
const buttonsBox = document.getElementById('buttons') as HTMLElement;
const version = document.getElementById('version') as HTMLElement;
const closeButton = document.getElementById("close") as HTMLButtonElement;
const dialog = document.querySelector("dialog") as HTMLDialogElement;

if (localStorage.getItem('skipIntro') === null) {
    localStorage.setItem('skipIntro', 'false');
}

if (localStorage.getItem('skipIntro') === 'true') {
    video.currentTime = 24.5;
    audio.currentTime = 24.5;
}

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

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "e" || event.key === "E") {
        transition();
    }
});

function transition(): void {
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
