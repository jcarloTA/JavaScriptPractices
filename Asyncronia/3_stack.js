// Probar en chrome con los dev tools y su main.html
/* EL STACK
    -Nos muestra el orden de ejecucion 
*/
function primero(valor) {
    return segundo(valor + 10)
}

function segundo(valor) {
    console.trace() //Imprime como esta el estack en este momento
    return tercero(valor + 10)
}

function tercero(valor) {
    // throw Error("Poom!")
    debugger //Muy util para cuando no se tiene acceso al navegador
    return valor + 10;
}

console.log(primero(10))
