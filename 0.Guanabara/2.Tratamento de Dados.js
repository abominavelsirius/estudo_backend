var nome = window.prompt('Qual é seu nome?');
// Tudo que digitar no prompt vai ser jogado dentro da var nome.

window.alert('É um grande prazer te conhecer' + nome + '!'); // concatenar
window.alert(`É um grande prazer te conhecer ${nome}!`); // template string