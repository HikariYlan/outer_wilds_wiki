const body = document.querySelector('body');
const video = document.getElementById('background-video');
const logos = document.getElementById('logos');
const separator_top = document.getElementById('separator_top');
const separator_bottom = document.getElementById('separator_bottom');
const buttons = document.getElementById('buttons');
const version = document.getElementById('version');
const closeButton = document.getElementById("close");
const dialog = document.querySelector("dialog");

dialog.showModal();

closeButton.addEventListener("click", () => {
    dialog.close();
    dialog.classList.add('hidden');
    body.classList.add('nocursor');
    video.play().then(() => {
        console.log("video lancée");
    })
});

function transition() {
    body.classList.remove('nocursor');
    logos.classList.remove('hidden');
    setTimeout(() => logos.classList.add('visible'), 50);
    separator_top.classList.remove('hidden');
    setTimeout(() => separator_top.classList.add('visible'), 50);
    separator_bottom.classList.remove('hidden');
    setTimeout(() => separator_bottom.classList.add('visible'), 2000);
    buttons.classList.remove('hidden');
    setTimeout(() => buttons.classList.add('visible'), 1500);
    version.classList.remove('hidden');
    setTimeout(() => version.classList.add('visible'), 2000);
}

video.addEventListener('ended', transition);

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
        transition();
    }
});
