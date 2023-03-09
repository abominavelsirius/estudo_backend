var teste = 'JavaScript'

'Eu estou aprendendo teste' // não faz interpolação
'Eu estou aprendendo' + teste // usa concatenação
`Eu estou aprendendo ${teste}` // usa template String


teste.length // Quantos caracteres a string tem
teste.toUpperCase() // tudo para 'MAIÚSCULAS'
teste.toLowerCase() // tudo para 'minúsculas

// Exemplos -----------------------------------------

// document.write =  escreve na tela
// document.writeln = escreve na tela e pula linha

var nome = window.prompt('Qual é seu nome?');
document.write(`Olá <strong>${nome}</strong>, seu nome tem ${nome.length}letras <br>`);
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase} <br>`);
document.write(`Seu nome em minusculo é ${nome.toLowerCase}`);
