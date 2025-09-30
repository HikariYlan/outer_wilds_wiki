var checkbox = document.getElementById('skipIntroCheck');

checkbox.checked = localStorage.getItem('skipIntro') === 'true';

checkbox.addEventListener('change', () => {
    if (localStorage.getItem('skipIntro') === 'true') {
        localStorage.setItem('skipIntro', 'false');
        checkbox.checked = false;
    } else {
        localStorage.setItem('skipIntro', 'true');
        checkbox.checked = true;
    }
    console.log(localStorage.getItem('skipIntro'));
})