const cliente = {
    nome: "Breno",
    idade: "20",
    cpf: "521512525",
    email: "Breno@dominio.com",
};

// Uma outra forma de chamar os objetos é com o "[]" igual os arrays

console.log(`O nome do cliente é ${cliente["nome"]} e sua idade é ${cliente["idade"]}`);

// e por que usar os "[]"?
// em muitos casos não saberemos quais são as propriedades e valores de um objeto
// e o "[]" ajuda nesse tipo de caso


// vamos dizer que foi passado uma lista de propriedades em uma const

const chaves = ["nome", "idade", "cpf", "email", "altura"];

// agora temos uma lista  com todos os valores das chaves
// contendo apenas as chaves de cada uma das propriedades


// podemos percorrer essa lista e pegar cada um desses valores dessa forma:
// vamos criar um forEach com uma function que irá percorrer todas as propriedades da lista

chaves.forEach((chave) => {
    console.log(`A chave é ${chave} e seu valor é ${cliente[chave]}}`);
})

// lembrando que não sabemos o nome das chaves, entaõ é usado o operador de "[]"

//cliente[chave] , ou seja
// o valor de chave é uma string, uma string dentro de colchetes depois de um objeto
// a gente vai acessar uma determinada propriedade
// assim, irá aparecer todas as propriedades quando for ver em node.js


// e a propriedade "altura" não tem, ele aparecerá como undefined 
