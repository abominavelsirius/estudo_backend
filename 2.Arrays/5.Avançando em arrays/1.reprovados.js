const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);



// filter = filtrar
// alunos.filter  vai filtrar da lista de alunos
// os parametros é valor e indice também
// quando não usa o valor, pode colocar "_"

// com o indice do aluno, podemos acessar a media de outra lista
// a lógica do filter é retornar verdadeiro ou falso 
// 