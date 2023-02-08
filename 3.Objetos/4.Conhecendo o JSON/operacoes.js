const dados = require("./Untitled-1.json");

console.log(dados)




const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

// transfomará o objeto em string

console.log(clienteEmString.nome);

// ficará undefined

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);

// irá transformar a string em objeto
