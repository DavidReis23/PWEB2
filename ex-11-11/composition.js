const produtos = [
  { nome: "Teclado Mecânico", preco: 350.00, quantidade: 12, categoria: "Periféricos" },
  { nome: "Mouse Gamer", preco: 180.00, quantidade: 20, categoria: "Periféricos" },
  { nome: "Monitor 24''", preco: 899.90, quantidade: 8, categoria: "Monitores" },
  { nome: "Notebook Dell", preco: 3999.99, quantidade: 5, categoria: "Informática" },
  { nome: "Cadeira Gamer", preco: 1299.00, quantidade: 7, categoria: "Móveis" },
  { nome: "Headset RGB", preco: 249.90, quantidade: 15, categoria: "Áudio" },
  { nome: "HD Externo 1TB", preco: 379.00, quantidade: 10, categoria: "Armazenamento" },
  { nome: "Pen Drive 64GB", preco: 89.90, quantidade: 25, categoria: "Armazenamento" },
  { nome: "Webcam Full HD", preco: 299.90, quantidade: 9, categoria: "Acessórios" },
  { nome: "Microfone USB", preco: 459.90, quantidade: 6, categoria: "Áudio" }
];

const valorTotal = produtos.filter(p => p.categoria === "Informática")
                                .map(p => {
                                    const newP = { ...p };
                                    newP.preco = newP.preco * (1 - 0.1);
                                    return newP;
                                })
                                .reduce((acc, p) => acc + (p.preco * p.quantidade));

console.log(`Valor total do estoque de produtos da categoria Informática com 10% de desconto: R$ ${valorTotal.toFixed(2)}`);
