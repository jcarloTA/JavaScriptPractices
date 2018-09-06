const fs = require('fs');
file = './assets/archivo.txt';

/* Codigo Sincrono */
console.time('Sincrono');
console.log('\n Abriando Archivo...');
let content;
try {
    content = fs.readFileSync(file,'utf8');
    console.log(content)
} catch (error) {
    console.log(error.message);º
}
console.log('\n Haciendo otra cosa\n');
console.log('\n Haciendo otra cosa mas\n');
console.timeEnd('Sincrono')

/* Asincrono */
console.time('asincrono');
content = fs.readFile(file,'utf8',(err,content)=>
    (err) ? console.log('err',err):console.log('ct',content)
);
console.log(content)
console.log("\notra cosa")
console.log("\notra cosa mas\n")
console.timeEnd('asincrono');
