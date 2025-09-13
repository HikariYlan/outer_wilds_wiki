const video = document.getElementById('background-video');
const logos = document.getElementById('logos');
const sep = document.getElementById('separator_top');
const sep2 = document.getElementById('separator_bottom');
const buttons = document.getElementById('buttons');
const version = document.getElementById('version');
const closeButton = document.getElementById("close");
const dialog = document.querySelector("dialog");

dialog.showModal();

closeButton.addEventListener("click", () => {
    dialog.close();
    dialog.classList.add('hidden');
    video.play().then(() => {
        console.log("video lancée");
    })
});

video.addEventListener('ended', () => {
    logos.classList.remove('hidden');
    setTimeout(() => logos.classList.add('visible'), 50);
    sep.classList.remove('hidden');
    setTimeout(() => sep.classList.add('visible'), 50);
    sep2.classList.remove('hidden');
    setTimeout(() => sep2.classList.add('visible'), 2000);
    buttons.classList.remove('hidden');
    setTimeout(() => buttons.classList.add('visible'), 1500);
    version.classList.remove('hidden');
    setTimeout(() => version.classList.add('visible'), 2000);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
        logos.classList.remove('hidden');
        setTimeout(() => logos.classList.add('visible'), 50);
        sep.classList.remove('hidden');
        setTimeout(() => sep.classList.add('visible'), 50);
        sep2.classList.remove('hidden');
        setTimeout(() => sep2.classList.add('visible'), 2000);
        buttons.classList.remove('hidden');
        setTimeout(() => buttons.classList.add('visible'), 1500);
        version.classList.remove('hidden');
        setTimeout(() => version.classList.add('visible'), 2000);
    }
});
