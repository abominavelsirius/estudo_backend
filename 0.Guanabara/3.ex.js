 
 var n1 = window.prompt('Digite um número: ') // recebe String
var n2 = window.prompt('Digite outro número: ') // recebe String
var s = n1 + n2
window.alert('A soma dos valores é ' + s) // Concatenação


// (number + number) para Adição
// (string + string) para Concatenação


// ------- Jeito certo convertendo os números -----------------------------

var numero1 = Number(window.prompt('Digite um número: '));
var numero2 = Number(window.prompt('Digite outro número: '));
var somaDosnumeros = numero1 + numero2

window.alert(`Resultado: ${somaDosNumeros}`)

// ------- Convertendo Number para String ----------------------------------------------------------------

// Number.parseInt = converte numeros inteiros (caso queira usar efetivamente só inteiro)
// Number.parseFloat = converte numeros com virgula (caso queira usar efetivamente só  virgula)
// Number(n) = Nova sintaxe que sabe se é inteiro ou real   

// ------- Convertendo String para Number ----------------------------------------------------------------

// String(n) 
// ou
// n.toString()