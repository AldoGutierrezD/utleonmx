const data = {
    button1: "Información para el botón 1",
    button2: "Información para el botón 2",
    button3: "Información para el botón 3"
};

function cambiarInformacion(buttonId) {
    const infoDiv = document.getElementById('info');
    infoDiv.classList.remove('transition_info');
    infoDiv.textContent = data[buttonId];
    infoDiv.classList.add('transition_info');
}
