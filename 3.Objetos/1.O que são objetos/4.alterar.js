const pessoa = {
    nome: "Joji",
    profissao: "Cantor",
};

console.log(pessoa.nome);

// ==============================================================

// se por uma propriedade que não existe?

console.log(pessoa.telefone);

// irá aparecer como undefined

// ==============================================================

// e se adicionar uma nova propriedade?

pessoa.telefone = "11 51251512";

console.log(pessoa.telefone);

// será acrescentado ao objeto a nova propriedade

// ==============================================================

// e se mudar o valor de uma propriedade?

pessoa.nome = "Joji Silva";

console.log(pessoa);

// a propriedade será mudada quando for chamada

// ==============================================================

// como é possivel mudar se é uma const?

// o que não pode fazer;

const novaPessoa = {
    nome: "Pedro",
};

// pessoa = novaPessoa; 

