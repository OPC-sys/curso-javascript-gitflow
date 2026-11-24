// Modifica el contenido del párrafo utilizando textContent
function cambiarTexto() {
    document.getElementById("textoEjemplo").textContent =
        "¡Has cambiado el contenido mediante JavaScript!";
}

// Restaura el contenido original del párrafo
function restaurarTexto() {
    document.getElementById("textoEjemplo").textContent =
        "Este es el contenido original del párrafo.";
}
