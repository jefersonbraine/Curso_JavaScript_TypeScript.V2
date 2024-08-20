
console.log( // Básico
  `Meu nome é "JEFERSON". Estou aprendendo JavaScript às 10:53 da manhã`
);


const nome = `Jeferson`;

console.log( // Usando constante no nome e interpolação
  `Meu nome é ${nome}. Estou aprendendo JavaScript às 10:53 da manhã`
);

const tempo = new Date();
var hora = tempo.getHours();

console.log( // Usando constante no nome e na hora junto a interpolação
  `Meu nome é ${nome}. Estou aprendendo JavaScript às ${hora} da manhã`
);


