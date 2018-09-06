

var almuerzos = [
    {principal: 'Mixta', postre: 'Shuco Normal'},
    {principal: 'tacos', postre: 'Shuco Doble Carne'},
    {principal: 'Tortilla', postre: 'Shuco con salchica'},
    {principal: 'Mixta Doble', postre: 'Shuco Mixta'}
];

// var platosPrincipales = [];
// for(var i = 0; i< almuerzos.length; i++){
//     platosPrincipales.push(almuerzos[i].principal);
// }

var platosPrincipales = almuerzos.map((almuerzo)=>{
    return almuerzo.principal;
})

almuerzos.map((almuerzo)=>{
    almuerzo.principal = "asdf"
})

console.log(platosPrincipales);
console.log(almuerzos);
