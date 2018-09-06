/***
    Paralelismo vs Concurrencia
***/
/*------------ "Paralelismo": Definicion ------------ */
//  Multiples tareas ejecutan simultaneamente
/* ------------ "Concurrencia": Definicion  ------------*/
//  Una sola tarea se ejecuta en un momento determinado
//Phyton paralelismo
/*
    function hablarPersona1() {
        while(true){
            console.log("Hola")
        }
    }
    function hablarPersona2() {
        while(true){
            console.log("Hola")
        }
    }
    hablarPersona1() // hola en el segundo1
    hablarPersona2() // hola en el segundo2
*/
//Phyton paralelismo
function hablarPersona1() {
    while(true){
        console.log("Hola")
    }
}
function hablarPersona2() {
    while(true){
        console.log("Hola")
    }
}
hablarPersona1() //-- nunca termina por el while loop
hablarPersona2() //-- nunca se ejecuta espera hasta que la funcion hablar 1 termine

/*
    JavaScript es Asincrono y Concurrente.
    *Solo se puede ejecutar una instruccion a la vez
    *El event loop es la pieza fundamental que coordina la ejecucion, eventos y callbacks
    *Node.js y los navegadores implementan la funcionalidad de hablar con la web,
     sistema operativo, file system, etc.
*/





