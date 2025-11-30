function numerosImpares(numeros) {
  let impares = [];
  for (let n of numeros) {
    if (n % 2 !== 0) {
      impares.push(n);
    }
  }
  return impares;
}

console.log("\nd) Números ímpares:");
console.log(numerosImpares([1, 2, 3, 4, 5, 6, 7]));