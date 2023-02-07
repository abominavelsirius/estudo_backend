// aninhado: quando um bloco de código está em cima do outro (ex: if)

const cliente = {
    nome: "Marina",
    idade: 16,
    email: "mariane@firma.com",
    telefone: [115582852, 21852195],
};


// vamos adicionar uma nova propriedade por fora para ser mais convencional da realidade

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
};

console.log(cliente);
// console.log(cliente.endereco); pra aparecer somente o endereço
// console.log(cliente["endereco"]); não é tão convencional nesse caso usar []



// É possivel guardar um objeto dentro de um outro objeto como mostrado no exemplo
// então é mais conveniente usar "numero" como uma propriedade de uma propriedade endereço
// do que simplesmente aparecer "numero" como uma propriedade de "cliente" (estranho né?)

