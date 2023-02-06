// ghost function =========================================

const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  console.log(nome);
});


// arrow function =========================================

nomes.forEach((nome) => {
  console.log(nome);
});


// classic function (forma externa) =========================================


function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);
