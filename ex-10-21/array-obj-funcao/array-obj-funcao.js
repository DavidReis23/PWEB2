/**
 * Aula sobre Arrays, Objetos e Funções
 */

const carrinho = [
    { nome: "Caneta", preco: 1.99, id: "A1", qtd: 3 },
    { nome: "Caderno", preco: 29.99, id: "A2", qtd: 5 },
    { nome: "Borracha", preco: 3.99, id: "A3", qtd: 7 }
];

console.log(carrinho);

function calcularValorTotal(carrinho) {
    let total = 0;
    for (let item of carrinho) {
        total += item.preco * item.qtd;
    }
};

calcularValorTotal(carrinho);

console.log(`Valor total do carrinho: R$ ${total.toFixed(2)}`);