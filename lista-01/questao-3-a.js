function calcular(a, b, operacao) {
  if (operacao === "+") return a + b;
  if (operacao === "-") return a - b;
  if (operacao === "*") return a * b;
  if (operacao === "/") return a / b;
  return "Operação inválida";
}

console.log("a) Resultado das operações:");
console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/")); 