var buttonAudio = document.getElementById('buttonAudio');
var buttons = document.querySelectorAll('button');
var labelAudio = document.getElementById('labelAudio');
var labels = document.querySelectorAll('label');

// Ajouter un event listener sur chacun
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