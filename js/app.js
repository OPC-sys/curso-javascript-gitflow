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
// Modifica los atributos de la imagen
function cambiarAtributos() {
    const imagen = document.getElementById("imagenEjemplo");

    imagen.setAttribute(
        "src",
        "https://placehold.co/300x150/e63946/ffffff?text=Imagen+nueva"
    );

    imagen.setAttribute("alt", "Imagen modificada");
    imagen.setAttribute("title", "Imagen modificada");
}

// Restaura los atributos originales de la imagen
function restaurarAtributos() {
    const imagen = document.getElementById("imagenEjemplo");

    imagen.setAttribute(
        "src",
        "https://placehold.co/300x150/457b9d/ffffff?text=Imagen+original"
    );

    imagen.setAttribute("alt", "Imagen original");
    imagen.setAttribute("title", "Imagen original");
}
