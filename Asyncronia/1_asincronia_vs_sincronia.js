

//Python, pedir un cafe
/*
    import requests 
    r = request.get('http://cafe.com') // esperas a que este listo el cafe
    print "Sentarse a tomar" // cuando este listo el cafe te sientas a tomarterlo
*/

//JavaScript, pedir un platillo
var request = require('request');
request('https://comida.com', function(error, comida ,body) {
    console.log(`como la comida ${comida}`) //  se ejecuta cuando el mesero trae la comida
})
console.log('me siento a esperar la comida') // se ejecuta antes de hacer la peticion al mesero