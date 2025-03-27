// Obtener elementos del DOM
var modal = document.getElementById("modal");
var botonAbrir = document.getElementById("abrir-modal");
var botonCerrar = document.getElementsByClassName("cerrar")[0];

// Abrir el modal al hacer clic en el botón
botonAbrir.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la "x"
botonCerrar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}