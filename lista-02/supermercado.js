document.getElementById("formSupermercado").addEventListener("submit", function(event) {
  event.preventDefault();

  const produto = document.getElementById("produto").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);
  const resultado = document.getElementById("resultado");

  if (!produto || isNaN(preco) || preco <= 0) {
    resultado.textContent = "Por favor, insira um produto e um preço válidos.";
    resultado.className = "resultado erro";
    return;
  }

  const precoDesconto = preco / 2;
  const total = (2 * preco) + precoDesconto;

  resultado.innerHTML = `
    Promoção de ${produto}: leve 3 e pague 2 por R$ ${preco.toFixed(2).replace('.', ',')} + 1 por R$ ${precoDesconto.toFixed(2).replace('.', ',')}<br>
    Total: R$ ${total.toFixed(2).replace('.', ',')}
  `;
  resultado.className = "resultado sucesso";
});
