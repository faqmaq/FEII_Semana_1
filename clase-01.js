console.log('Clase 01 - Front II');
/* ------------------------------- FUNCION 01 ------------------------------- */
function iniciarJuego(){    
    // Saludo al usuario
    alert('Bievenido al Juego del Piedra Papel o Tijera');
    // Solicito el nombre del usuario
    let numX = 0;
    let nombre = '';
    do {
    nombre = prompt('¿Cual es tu nombre?');
    if (nombre.length > 2 && isNaN(nombre)){
        numX = 1;
    }
    else {
        alert('Usted ingresó un nombre no válido. Intentemos nuevamente.');
    }        
    } while (numX<1)

    nombre = nombre.toUpperCase();
    console.log('Bienvenido ' + nombre);
    return nombre;
}

// Constante Global
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.