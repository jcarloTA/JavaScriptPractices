
const usuarios = [
    {id:1, nombre: 'Jancarlo', profesion_id: 1},
    {id:2, nombre: 'Alfred', profesion_id: 1},
    {id:3, nombre: 'Ricardo', profesion_id: 2}
]

const profesion = {
    1: 'Programador',
    2: 'Disenador'
}

function getUsuarios(callback) {
    setTimeout( () => {
        callback(null, usuarios)
    }, 200)
}

function getUsuario(id, callback) {
    setTimeout( () => {
        callback(null, usuarios.filter( (usuario) => usuario.id === id)[0])
    }, 200)
}

function getProfesion(id, callback) {
    setTimeout( () => {
        callback(null, profesion[id]);
    }, 200)
}

getUsuarios( (err, usuarios) => {
    const alejandroId = usuarios[1].id;

    getUsuario(alejandroId, (err, usuario) => {
        const profesionId = usuario.profesion_id;

        getProfesion(profesionId, (err, profesion) => {
            console.log("La profesion de alfred es: ", profesion) // Piramide del infierno :O :(
        })
    })
})
/*  --Problemas con los callbacks
    1. Dificil de controlar
    2. "La inversion de control": 
        y que significa la inversion de control, significa que a una funcion tercera le damos o suministramos
        codigo que ella se va encargar de ejecutar el cual puede que no sepamos cuando, cuantas veces,
        y como ejectura el callback.
        Por ejemplo si llama muchas veces a la funcion y esta se encarga de realizar un pago, entonces 
        el pago lo haria multples veces y seria desastroso para el usuario.
    
*/
