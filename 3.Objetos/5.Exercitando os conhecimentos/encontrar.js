const  clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}


// a gente vai usar essa lista, e como é um array, podemos usar o metodo find
// return lista.find
// oq o find faz: a gente vai dá um item pra ele na lista, e se ele corresponder
// se aquela chamada que a gente deu pra ele for true, ele vai retornar esse item pra gente

// () a gente passa um item e quer ver se => o item dentro da chave que a gente tá buscando
// vai ser igual ao valor
// vamos pegar o item dentro dessa chave e ver se o valor é correspondente ao que estamos procurando



const encontrado = encontrar(clientes, "nome", "Kirby");

// encontrar passando como parametro, onde estamos buscando?
// na lista de clientes
// estou buscando pelo nome, a chave nome
// e o valor dessa chave é Kirby
// e agr a gente pode ver se alguem foi encontrado

console.log(encontrado);

// {
//     nome: 'Kirby',
//     email: 'kcoard8@squidoo.com',
//     telefone: [ '9291767581', '92991767581' ],
//     endereco: {
//       logradouro: 'Rua Valley Edge',
//       numero: '5',
//       cep: '20195',
//       apartamento: false,
//       complemento: 'Venda da tia Zezé'
//     }
//   }

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);

// undefined

// por conta do "==="
// um array com 2 numeros é diferente de um array com 1 numero só
// pra resolver, trocamos a comparação
// ao invés de === colocamos .includes
// e passando o valor como parametro




// function encontrar(lista, chave, valor) {
//     return lista.find((item) => item[chave] === valor);
// }

// tava desse jeito