// Imagine que estamos lidando com nossa loja, como na problemática abordada enquanto construíamos os objetos.

// E pedimos aos nossos clientes que fizessem um cadastro com suas informações de endereço para, por exemplo, poder enviar boletos ou encomendas.

// Se o cliente vive em uma casa, somente o número da casa já é suficiente para realizar a entrega. Contudo, se for um apartamento é vantajoso ter também o campo "complemento" preenchido.

// Contudo, também existem algumas entradas onde o campo apartamento é verdadeiro, mas não há mais complementos. Como, por exemplo, na entrada de uma pessoa chamada Blakeley.

// O ideal seria ter uma forma de validar a informação no momento do preenchimento dos dados.

// Mas agora que já adquirimos todos os endereços, uma solução é tentar contactar cada uma dessas pessoas com informações incompletas e pedi-las para fazer o recadastramento.

// Porém, como saber quais são essas pessoas que necessitam se recadastrar?

// Para não precisar procurar manualmente em cada uma das entradas, podemos filtrar todas as pessoas que moram em apartamento, mas não tem o campo complemento inicializado ou satisfatório.

// Vamos criar uma função para tentar resolver nosso problema, filtrando somente as pessoas que marcaram que vivem em apartamento, mas não forneceram um complemento.

const clientes = require("./1.clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);