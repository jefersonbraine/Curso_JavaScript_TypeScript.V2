const array = [1, 2, 3];
array.push(4);

const pessoa1 = {
    nome: 'jeferson',
    sobrenome: 'miranda',
    idade: 28,
    peso: 100,

    
};

console.log(pessoa1.nome)

function criaPessoa(nome, sobrenome, idade, peso) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        peso: peso
    };
}

const pessoa2 = criaPessoa('jeferson', 'miranda', 28, 100);
console.log(pessoa2.nome)

//REVER SECTION 32 AOS 15 MINUTOS