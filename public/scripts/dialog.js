var dialogBox = document.querySelector("dialog");
var close = document.getElementById("closeButton");

dialogBox.showModal();
dialogBox.classList.remove('hidden');

close.addEventListener("click", () => {
    dialogBox.close();
    dialogBox.classList.add('hidden');
})