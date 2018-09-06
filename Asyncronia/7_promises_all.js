//Revisar la clase anterior de callbacks y sus limitaciones, 
//porque este codigo es lo mismo pero con promesas
const usuarios = [
    {id:1, nombre: 'Jancarlo', profesion_id: 1},
    {id:2, nombre: 'Alfred', profesion_id: 1},
    {id:3, nombre: 'Ricardo', profesion_id: 2}
]

const profesion = {
    1: 'Programador',
    2: 'Disenador'
}

function getUsuarios() {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve(usuarios)
        }, 200)
    })
}

function getUsuario(id) {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve(usuarios.filter( (usuario) => usuario.id === id)[0])
        }, 200)
    })
}

function getProfesion(id_profesion) {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve(profesion[id_profesion]);
        }, 200);
    })
}

getProfesion(1)//200 ms
    .then( (profesion) => console.log(profesion))
    .then( () => getProfesion(2)) //200 ms
    .then( (profesion) => console.log(profesion))
    //en total son 400ms en hacer las 2 peticiones, porque hay que esperar que termine la otra para hacer otra.

Promise.all([getProfesion(1), getProfesion(2)])
.then( (respuesta) => {
    console.log(respuesta)
})

