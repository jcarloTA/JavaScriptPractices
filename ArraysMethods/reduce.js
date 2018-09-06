
var almuerzos = [
    {principal: 'Mixta', postre: 'Shuco Normal'},
    {principal: 'Mixta', postre: 'Shuco Mixto'},
    {principal: 'Mixta', postre: 'Shuco con salchicha'},
    {principal: 'tacos', postre: 'Shuco Doble Carne'},
    {principal: 'Tortilla', postre: 'Shuco con salchica'},
    {principal: 'Mixta Doble', postre: 'Shuco Mixta'}
];


var cantidadMixtas = 0;
// for(var i = 0; i< almuerzos.length; i++){
//     if(almuerzos[i].principal === 'Mixta'){
//         cantidadMixtas++
//     }
// }
var cantidadMixtas = almuerzos.reduce((contador, almuerzo)=>{
    if(almuerzo.principal == "Mixta"){
        return contador+1
    }else{
        return contador
    }
},0);

console.log(cantidadMixtas)