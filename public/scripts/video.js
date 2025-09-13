const video = document.getElementById('background-video');
const logos = document.getElementById('logos');
const sep = document.getElementById('separator');
const sep2 = document.getElementById('separator2');
const buttons = document.getElementById('buttons');
const version = document.getElementById('version');


video.addEventListener('ended', () => {
    logos.classList.remove('hidden');
    setTimeout(() => logos.classList.add('visible'), 50);
    sep.classList.remove('hidden');
    setTimeout(() => sep.classList.add('visible'), 50);
    sep2.classList.remove('hidden');
    setTimeout(() => sep2.classList.add('visible'), 50);
    buttons.classList.remove('hidden');
    setTimeout(() => buttons.classList.add('visible'), 2000);
    version.classList.remove('hidden');
    setTimeout(() => version.classList.add('visible'), 50);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
        logos.classList.remove('hidden');
        setTimeout(() => logos.classList.add('visible'), 50);
        sep.classList.remove('hidden');
        setTimeout(() => sep.classList.add('visible'), 50);
        sep2.classList.remove('hidden');
        setTimeout(() => sep2.classList.add('visible'), 50);
        buttons.classList.remove('hidden');
        setTimeout(() => buttons.classList.add('visible'), 2000);
        version.classList.remove('hidden');
        setTimeout(() => version.classList.add('visible'), 50);
    }
});
