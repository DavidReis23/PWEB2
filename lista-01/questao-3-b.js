function produtorio(...numeros) {
  let resultado = 1;
  for (let n of numeros) {
    resultado *= n;
  }
  return resultado;
}

console.log("\nb) Produtório:");
console.log(produtorio(2, 3, 4));
console.log(produtorio(1, 5, 10));