// Modifica el contenido del párrafo utilizando textContent
function cambiarTexto() {
    document.getElementById("textoEjemplo").innerHTML =
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
function cambiarEstilos() {
    const texto = document.getElementById("textoEstilos");

    texto.style.color = "white";
    texto.style.backgroundColor = "#1d3557";
    texto.style.fontSize = "22px";
    texto.style.padding = "15px";
    texto.style.borderRadius = "8px";
}

// Restaura los estilos originales
function restaurarEstilos() {
    const texto = document.getElementById("textoEstilos");

    texto.style.color = "";
    texto.style.backgroundColor = "";
    texto.style.fontSize = "";
    texto.style.padding = "";
    texto.style.borderRadius = "";
}
