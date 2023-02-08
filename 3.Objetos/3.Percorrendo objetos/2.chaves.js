// vamos validar a compra do cliente
// e queremos ver se ele tem um endereço cadastrado na hora da compra
// pra enviar um recibo ou entrega, ou algo do tipo

const cliente = {
    nome: "Marina",
    idade: 16,
    email: "mariane@firma.com",
    telefone: [115582852, 21852195],
};

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
];


const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

// classe: conjunto de várias funções que vai ajudar a lidar com os objetos
// e cliente será passado como parametro
//essa função vai nos retornar um array, e esse array contém todas as chaves que já foram inicializadas daquele cliente
// [ 'nome', 'idade', 'email', 'telefone', 'enderecos' ]


// se a chave não inclui endereços em chavesDoObjeto do cliente, irá aparecer a mensagem de error!
if (!chavesDoObjeto.includes("enderecos")){
    console.error("Error. É necessário ter um endereço cadastrado!")
}

// se a chavesdoObjeto cliente inclui (metodo de array)
// e pasasr um campo que é o nome de uma chave
// então quer saber se tem endereço, colocamos a chave enderecos

// e nós podemos dizer que se esse teste for verdade, ele vai entrar aqui quando existir a chave
// o que queremos é o contrário, então antes do includes, colocamos !
// sinal de negação que vai fazer o oposto, se isso tornar true, ele vai negar a expressão

// console.error pra dá o erro quando acontecer
// se não tivesse cliente.enderecos iria aparecer o erro

