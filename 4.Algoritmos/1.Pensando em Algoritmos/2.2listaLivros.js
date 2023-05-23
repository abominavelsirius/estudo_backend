//                     0   1
const livros = require('./2.1listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) { // .preco pra chamar a propriedade especifica do objeot
        maisBarato = atual
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)
