function calcularTotal(valorUnitario, quantidade, desconto = 0) {
  let total = valorUnitario * quantidade;
  total -= total * desconto;
  return total;
}

console.log("\ne) Valor total da compra:");
console.log(calcularTotal(100, 2))
console.log(calcularTotal(100, 2, 0.1));