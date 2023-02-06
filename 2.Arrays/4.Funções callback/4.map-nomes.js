// objetivo: padronizar a lista de alunos com apenas letras maiusculas


const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];


 const nomesPadronizados = nomes.map((nome) => {
     return nome.toUpperCase();
 });

 // particularidade da arrow function:
// tudo que a gente faz dentro da arrow fuinction
// é retornar um valor
// posso simplesmente omitir a palavra return junto com as chaves



const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);



