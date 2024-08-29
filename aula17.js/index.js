
//parametros ficam dentro do ()
/*
function saudacao(nome) {
    console.log(`bom dia ${nome}`);
    return 123456;
}


const variavel = saudacao("jeferson");
console.log(variavel);// retorna undefined, // mas agora que foi colocado o return na função e o valor 123456 quando é executado, ele vai retornar 0 123456

*/


function saudacao(nome) {
  return `bom dia ${nome}`;
}

const variavel = saudacao("jeferson");
console.log(variavel); // mas agora se eu tirar o console.log e colocar no return, quando executar será mostrado o bom dia jeferson

//saudacao('jeferson');// e nos parenteses do saudação eu falo o que eu quero que apareça

