const cliente = {
    nome: "Marina",
    idade: 16,
    email: "mariane@firma.com",
    telefone: [115582852, 21852195],
};

// como faria se tivesse 2 endereços? 
// criando uma array dentro da propriedade enderecos
// então será colocado o objeto {} dentro de uma array []

cliente.enderecos = [
    {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
];

// de modo convencional, adicionaremos com push
// para acrescentar uma novo valor a lista

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

// assim, será complementado então 2 endereços quando for dá console.log


// console.log(cliente);   




// e as vantagens de ter arrays nos objetos, é que pode fazer tudo de array
// um exemplo, filtrar apenas um determinado objeto da lista


const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);


// função vai selecionar se aquilo vai ser escolhido ou não
// o parametro de cada item ali é o endereço
// e o retorno => quer saber se o endereço é o apartamento ou não
// pra isso, fazemos endereço.apartamento é igual a true

// se endereço.apartamento for true ele vai sera atribuido nessa nova lista 
