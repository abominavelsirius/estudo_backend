// sort = ordenar
// algoritmo de ordenação


const livros = require('../1.Pensando em Algoritmos/2.1listaLivros')






let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    }
}

console.log(`O livro mais barato custa ${precosLivros[maisBarato]}`)
