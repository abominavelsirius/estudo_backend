const cliente = {
    nome: "Lucas",
    idade: "20",
    cpf: "12521555",
    email: "lucas@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);



// para chamar um objeto usamos a propriedade "."
// nome da const e depois do "." sua propriedade
// cliente.nome, cliente.idade, cliente.cpf, cliente.email

// a string tem essa propriedade de pegar os 3 primeiros números desse jeito:
// substring() o primeiro número é qual é o primeiro e depoiis a partir de até onde ele vai

