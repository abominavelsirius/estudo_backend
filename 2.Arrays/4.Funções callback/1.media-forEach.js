const notas = [10, 6.5, 8, 7.5];

// forEach() é um metodo então ele precisa de ()
// o function será parametro de outra function 
// quando isso acontece, chamamos de callback (chamar de volta)
// ela será chamada para cada elemento do array de notas
// pra cada uma das notas do array, ele imprimiu "oi" ppor exemplo
// e por isso ele imprimiu 4x


 notas.forEach(function () {
   console.log("oi"); // será impresso "oi" 4x
 });


 // colocando nota como parametro, irá ser imprimido todos os array
 // pra somar, é aquela mesma tática de criar uma let = somaDasNotas = 0;



let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);



// for each = para cada


// é parecido com for of
// fornece pra gente diretamente o valor do elemento do array, nesse caso nomeamos de nota
// só que o forEach ele tem uma vantagem
// nos parametros do callback, pode ser passado +1 parametro
// o primeiro é de valor (nota) e o segundo a indice (indice)

notas.forEach(function (nota, indice) {
  console.log(indice);
});

// forEach é mais poderoso que o for of
// for of dava só o valor de cada um dos elementos
// forEach dá o valor e seu indice
// forEACH é mais utiliado no mercado do que o for of
// mas é sempre bom saber todas como iniciante.