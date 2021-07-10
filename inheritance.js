class Animal{
    reino  = 'Animalia'
    constructor(genero) {
         this.genero = genero;
         //console.log('Animal construido');
    }
}

class Cachorro extends Animal {
    constructor(nome){
        super('Canis');
        //console.log('Cachorro construido');
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome}: 'Au au!'`);
    }
}

class Corgi extends Cachorro {
    constructor(nome){
        super('Corgi ' + nome);
        //console.log('Corgi construido');  
        this.temMiniPatas = true;
    }
}

class Pug extends Cachorro{
    constructor(nome) {
        super('Pug ' + nome);
        this.temMiniPatas = false;
    }
    roncar = () => ({
        barulho:'ZzzzZzzZzzz',
        estaDormindo: true
    })   
}

const popoto = new Corgi('Popoto');
const doug = new Pug('Doug');

popoto.latir();
doug.latir();


console.log(popoto.reino);

try{
    //doug.roncar();
    popoto.roncar();
}catch(erro){
    console.log(`Nao ronca!`)
}

console.log(doug.roncar());

