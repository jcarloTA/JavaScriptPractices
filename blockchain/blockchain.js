const SHA256 = require('crypto-js/sha256');

function calcularHash(block) {
    return SHA256(
        block.index +
        block.timestamp +
        block.hashAnterior +
        JSON.stringify(block.data) +
        block.nonce
    ).toString();
}


class Block {
    constructor(index, timestamp, data, hashAnterior = ""){
        this.index = index;
        this.hashAnterior = hashAnterior;
        this.timestamp = timestamp;
        this.data = data;
        this.nonce = 0;
        this.hash = calcularHash(this);
    }

    minarBloque(dificultad){
        while(this.hash.substring(0, dificultad) !== Array(dificultad + 1).join('0')) {
            this.nonce++;
            this.hash = calcularHash(this);
        }
        console.log(`Bloque Mindado. Tomo ${this.nonce} iteraciones`)
    }
}

class Blockchain{
    constructor(){
        this.dificultad = 4;
        const genesisBlock = new Block(0, new Date().getTime(), 'Bloque Genesis',null)
        genesisBlock.minarBloque(this.dificultad);
        this.chain = [genesisBlock]
    }

    getUltimoBloque(){
        return this.chain[this.chain.length -1];
    }

    crearNuevoBloque(data){
        const ultimoBloque = this.getUltimoBloque();
        const nuevoBloque = new Block(
            ultimoBloque.index+1, 
            new Date().getTime(), 
            data, 
            ultimoBloque.hash
        );
        nuevoBloque.minarBloque(this.dificultad);
        this.agregarBloque(nuevoBloque)
    }

    agregarBloque(nuevoBloque){
        const ultimoBloque = this.getUltimoBloque();
        
        if (ultimoBloque.index + 1 !== nuevoBloque.index) {
            console.log("indice no valido");
        } else if (nuevoBloque.hashAnterior !== ultimoBloque.hash) {
            console.log('hashes son distintos');
        } else if (nuevoBloque.hash !== calcularHash(nuevoBloque)) {
            console.log('No minaste el bloque correctamente')
        } else {
            this.chain.push(nuevoBloque)
        }
    }

    imprimir(){
        this.chain.forEach( block => console.log(`${JSON.stringify(block)} \n`))
    }
}

const blockchain = new Blockchain();

blockchain.crearNuevoBloque({de:'Jancarlo', a:'Diego',cantidad:1})
// blockchain.crearNuevoBloque({de:'Diego', a:'Jancarlo',cantidad:0.8})
// blockchain.crearNuevoBloque({de:'Daniel', a:'Iliana',cantidad:1})
const blockHackeado = new Block(
    2, 
    new Date().getTime(), 
    {de:'diego', a:'hacker',cantidad:1}, 
    blockchain.getUltimoBloque().hash
);

blockHackeado.hash = '000012341asdf8as0fasdf';
blockchain.agregarBloque(blockHackeado);


blockchain.imprimir();