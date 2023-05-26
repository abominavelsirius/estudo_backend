// insert = inserir

const livros = require('./listaLivros');

function insertionSort(lista) {

    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (lista[analise].preco < lista[analise - 1].preco)
    }

    console.log(lista);
}


// enquanto a lista na posição analise.preço for menor que lista analise antecendente
// ou seja, -1, porque tá comparando com o item anterior
