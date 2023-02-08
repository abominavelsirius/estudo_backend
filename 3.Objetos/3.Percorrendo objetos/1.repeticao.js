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



 for (let chave in cliente)

// let vai guardar uma variavel que vai guardar o nome de kd uma das propriedades
// chave é o nome da propriedade, o valor é oque está armazenado na propriedade

// in 
// deixa iterar sobre cada uma das propriedades
// pegue cada uma das coisas cada uma das chaves no objeto cliente
// deixar a chave em cliente numa tradução livre

for (let chave in cliente){
    console.log(chave);
}

// vamos ver oque aparece:
// aparece nome, idade, email, telefone e enderecos
// que são as chaves de nossas propriedades, seus nomes.

for (let chave in cliente){
    console.log(cliente[chave]);
}

// se colocar cliente acessando as chaves
// vamos obter o valor que está sendo salvo lá dentro
// joão, 24, email, array de 2 telefone, um array com um objeto dentro do endereco

for (let chave in cliente){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}}`);
}

// pra escrever o relatório, deixamos uma template string 
// fica assim: 
// A chave nome tem o valor Marina}
// A chave idade tem o valor 16}
// A chave email tem o valor mariane@firma.com}
// A chave telefone tem o valor 115582852,21852195}
// A chave enderecos tem o valor [object Object]}

// e teve o problema no ultimo, que pra resolver terá que ser assim:

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
};

// A chave nome tem o valor Marina
// A chave idade tem o valor 16
// A chave email tem o valor mariane@firma.com