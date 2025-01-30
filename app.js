// Crear un array donde almacenará los nombres de los amigos.
let amigos = [];

// Función que permite agregar amigos.
function agregarAmigo() {
    // Obtiene el nombre del amigo.
    let nombre = document.getElementById('amigo').value;
    // Agrega el nombre al array de amigos.
    amigos.push(nombre);
    // Limpia el input.
    document.getElementById('amigo').value = '';
    console.log(amigos);
}