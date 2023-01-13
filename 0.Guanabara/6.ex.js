// Operadores aritméticos

5 + 2 // = 7
5 - 2 // = 3
5 * 2 // = 10
5 / 2 // = 2.5
5 % 2 // = 1 (resto da divisão de 5/2)
5 ** 2 // = 25 (5² = 25, cinco ao quadrado)


// CUIDADO !!!

// 5 + 3 / 2 = 6.5
// em vez do 5 + 3, vai começar pelo 3/2
// quando for assim
// (5 + 3) / 2 = 4




// ordem de precedência

// ()
// **
// * / %
// + -

// exemplo
var a = 5 + 3 // = 8
var b = a % 5 // = 3
var c = 5 * b ** 2 // = 45
var d = 10 - a / 2 // = 6
var e = 6 * 2 / d // = 2
var f = b % e + 4 / e // = 3



// auto-atribuições
var n = 3  // = 3
n = n + 4 // = 7
n += 4 // é a mesma coisa do de cima só que simplificado

// deixou de valor 3, passou a valer 7

// SIMPLIFICANDO

n = n + 4 // n += 4 /

n = n - 5  // n -= 5

n = n * 4 // n *= 4

n = n / 2  // n /= 2

n = n **2 // n **= 2

n = n % 5 // n %= 5


// INCREMENTO

var x = 5

x = x + 1 // x++

x = x - 1 // x--