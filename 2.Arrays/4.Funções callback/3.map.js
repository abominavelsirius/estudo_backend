// objetivo: adicioanr 1 ponto exta pra cada nota
// metodo que ajuda mais nesse tipo especifico

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1;
});

console.log(notasAtualizadas);


// notas.map recebe como parametro também uma function callback
// o callback pode receber os mesmos parametros do forEach que é valor e indice
// forEach poderia pegar essa nota e alterar cada uma das notas com o indice
// aqui no map, vai retornar o valor q eu quero sobrescrever nauqela nota em especifico
// ou seja, se eu quero adicionar 1 ponto extra pra cada nota, vou retornar nota + 1
// map também é uma estrutura de repetição
// ele vai executar essa função callback para cada uma das notas e pra cada uma ele vai atribuir um novo valor. Ele é muito apropriado pra reescrever arrays

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);

// colocando o limite de nota 10
// nota + 1 é maior ou igual a 10? coloca um ponto de interrogação "?""
// e depois de ? vai retornar o que for verdadeiro
// e depois : senão (else)

// ele não substitui o forEach
// ele não consegue abranger todas as stiauções do forEach
// mas ele consegue ser mais util pra casos de reescrever array.

