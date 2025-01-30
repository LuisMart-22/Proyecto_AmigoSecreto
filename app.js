// Crear un array donde almacenará los nombres de los amigos.
let amigos = [];

// Función que permite agregar amigos.
function agregarAmigo() {
    // Obtiene el nombre del amigo.
    let nombre = document.getElementById('amigo').value;
    //Evalúo que el nombre ingresado no sea vacío.
    console.log(typeof(nombre));
    if (nombre === '') {
        alert('Debes ingresar un nombre.');
        return;
    } else {
        //Evalúo que el nombre ingresado no sea un número.
        if (!isNaN(nombre)) {
            alert('El nombre no puede ser un número.');
            return;     
        } else {
            if (amigos.includes(nombre)) {
                alert('El nombre ya fue agregado, ingrese uno nuevo.');
                return;
            } else {
                // Agrega el nombre al array de amigos.
                amigos.push(nombre);
                // Limpia el input.
                document.getElementById('amigo').value = '';
                console.log(amigos);
            }    
        }
    } 
}