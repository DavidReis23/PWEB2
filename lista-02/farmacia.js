const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('text').value;
  const preco = parseFloat(document.getElementById('n').value);
  const resultado = document.getElementById('resultado');

  const total = preco * 2;
  const desconto = total - Math.floor(total);
  const totalComDesconto = total - desconto;

  resultado.textContent = `Promoção de ${nome}. Leve 2 por apenas R$ ${totalComDesconto.toFixed(2)}`;
});
 