var buttonAudio = document.getElementById('buttonAudio');
var buttons = document.querySelectorAll('button');

// Ajouter un event listener sur chacun
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonAudio.currentTime = 0; // remet à zéro si déjà en lecture
        buttonAudio.play();
    });
});