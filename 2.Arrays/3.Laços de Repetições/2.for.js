const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < 6; indice++) {
  console.log("oi")
}


// {} oque está dentro será executado várias vezes

// começa com 0
// indice++ vai repetir o codigo até ser menos que 6




for (let indice = 0; indice < numeros.length; indice++) {
  console.log(indice, numeros[indice]);
}

// numeros na posição [indice], que daí, vai executar numeros na posição 0 até 6
// o numeros vai até 6
// ao invés de ficar < 6, tem como deixar melhor
// numeros.lenght pra ser dinamico, que é exatamente o tamanho do array


// essa é a forma clássica
// porém, nas prximas aulas
// formas mais modernas de estrutura de repetição serão apresentadas.