// Crear un array donde almacenará los nombres de los amigos.
let amigos = [];

// Función que permite agregar amigos.
function agregarAmigo() {
    // Obtiene el nombre del amigo.
    let nombre = document.getElementById('amigo').value;
    // Evalúa que el nombre ingresado no sea vacío.
    if (nombre === '') {
        alert('Debes ingresar un nombre.');
    } else {
        // Evalúa que el nombre ingresado no sea un número.
        if (!isNaN(nombre)) {
            alert('El nombre no puede ser un número.');
        } else {
            // Evalúa que el nombre ingresado no se repita.
            if (amigos.includes(nombre)) {
                alert('El nombre ya fue agregado, ingrese uno nuevo.');
            } else {
                // Agrega el nombre al array de amigos.
                amigos.push(nombre);
                // Actualiza la lista de amigos.
                actualizarLista();
                // Limpia el input.
                document.getElementById('amigo').value = '';
            }
        }
    }
}

// Función que permite actualizar la lista de amigos.
function actualizarLista() {
    // Obtiene el elemento donde se mostrará la lista de amigos.
    let lista = document.getElementById('listaAmigos');
    // Limpia la lista.
    lista.innerHTML = '';
    // Recorre el array de amigos usando un bucle for.
    for (let i = 0; i < amigos.length; i++) {
        // Crea un elemento li.
        let li = document.createElement('li');
        // Agrega el nombre del amigo al elemento li.
        li.textContent = amigos[i];
        // Agrega el elemento li a la lista.
        lista.appendChild(li);
    }
}

// Función que permite hacer el sorteo del amigo secreto.
function sortearAmigo() {
    // Evalúa que la lista no esté vacía para hacer el sorteo.
    if (amigos.length < 1) {
        alert('Lista vacía, debes agregar amigos para hacer el sorteo.');
    } else {
        // Obtiene el elemento donde se mostrará el resultado del sorteo.
        let resultado = document.getElementById('resultado');
        // Limpia el resultado.
        resultado.innerHTML = '';
        // Genera un índice aleatorio.
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        // Crea un elemento p.
        let p = document.createElement('p');
        // Agrega el nombre del amigo secreto al elemento p.
        p.textContent = `El amigo secreto es: ${amigos[indiceAleatorio]}`;
        // Agrega el elemento p al resultado.
        resultado.appendChild(p);
    }
}
