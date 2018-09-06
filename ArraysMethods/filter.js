
var almuerzos = [
    {principal: 'Mixta', postre: 'Shuco Normal'},
    {principal: 'Mixta', postre: 'Shuco Mixto'},
    {principal: 'Mixta', postre: 'Shuco con salchicha'},
    {principal: 'tacos', postre: 'Shuco Doble Carne'},
    {principal: 'Tortilla', postre: 'Shuco con salchica'},
    {principal: 'Mixta Doble', postre: 'Shuco Mixta'}
];


// var platosPrincipales = [];
// for(var i = 0; i< almuerzos.length; i++){
//     if(almuerzos[i].principal === 'Mixta'){
//         platosPrincipales.push(almuerzos[i].postre);
//     }
// }
var postresParaPlatosConArepas = almuerzos
.filter((almuerzo)=>{
    return almuerzo.principal == 'Mixta';
}).map((almuerzo)=>{
    return almuerzo.postre;
})

//almuerzos.filter()
console.log(postresParaPlatosConArepas)