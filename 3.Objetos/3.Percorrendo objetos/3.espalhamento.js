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


// temos uma determinada função q é externa, n é nossa
// e precisamos dela pra fazer uma ligação ou contato com cliente
// e vamos assummir que ela veio de fora
// onde ela vai receber como parametro os 2 numeros de telefone do cliente
// oq ela faz é simples, vai mostrar o console.log de ligando para os telefonews

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
};

// vamos assumir que não podemos mexer na implementação dessa função, ela veio de fora
// como podemos chamar essa função e passar o valor que a gente tem como cliente
// digamos, queremos entrar em contato com ele

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

// vamos chamar ligaParaCliente e os parametros cliente.telefone e seu indice (estão num array)
// Ligando para 115582852
// Ligando para 21852195

// podemos utilizar as chamadas sintaxes de espalhamento
// que vai dividir nosso array e passar cada um dos campos como se fossem parametros diferentes
// então pra fazer isso, só colocamos "..." antes da chamada
// e ela terá o mesmo comportamento de anteriormente

ligaParaCliente(...cliente.telefone);

// Ligando para 115582852
// Ligando para 21852195

// será que fazemos algo similiar com objetos?
// a gente tem que fazer um envio pro noso cliente, uma carta ou encomenda
// fazemos o seguinte:

const encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.enderecos[0],
}

console.log(encomenda);

// os campos desse objeto é o nome do cliente (destinatario) e também o endereço dele

// {
//     destinatario: 'Marina',
//     endereco: [
//       {
//         rua: 'R. Joseph Climber',
//         numero: 1337,
//         apartamento: true,
//         complemento: 'ap 934'
//       }
//     ]
//   }





// digamos que:
// a forma como podemos não pode ter objeto aninhado, todos os campos direto
// teriamos que fazer assim:
// a forma "bruta" seria 

const encomenda2 = {
    destinatario: cliente.nome,
    rua: cliente.endereco.rua,
    numero: cliente.endereco.numero,

}

console.log(encomenda2);

// imagina  que tivesse muitos campos, isso seria ruim de fazer
// e pra isso, podemos usar a sintaxe de espalhamento aqui também


const encomenda3 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda3);



// {
//    destinatario: 'Joao',
//    rua: 'R. Joseph Climber',
//    numero: 1337,
//    apartamento: true,
//    complemento: 'ap 934'
// }


