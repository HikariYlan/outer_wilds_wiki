const body = document.querySelector('body');
const video = document.getElementById('background-video');
const music = document.getElementById("background-audio");
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

function transition(video) {
    video.addEventListener('ended', () => {
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
    })
}

closeButton.addEventListener("click", () => {
    dialog.remove();
    body.classList.add('nocursor');
    if (localStorage.getItem('skipIntro') === 'true') {
        video.source = "/videos/outer_wilds_menu_vid_skip.mp4";
        music.source = "/sounds/musics/main_menu_skip.m4a";
        console.log(video.source)
    } else {
        video.source = "/videos/outer_wilds_menu_vid.mp4";
        music.source = "/sounds/musics/main_menu.m4a";
    }
    video.play().then(() => {
        console.log("[OUTER WILDS WIKI] Vidéo lancée");
    });
    music.play().then(() => {
        console.log("[OUTER WILDS WIKI] Musique lancée");
    })
    transition(video)
});

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
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
});
