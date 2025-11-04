document.getElementById("formLanHouse").addEventListener("submit", function(event) {
      event.preventDefault();

      const valor15 = parseFloat(document.getElementById("valor15").value);
      const tempo = parseInt(document.getElementById("tempo").value);
      const resultado = document.getElementById("resultado");

      if (isNaN(valor15) || valor15 <= 0 || isNaN(tempo) || tempo <= 0) {
        resultado.textContent = "Informe valores válidos.";
        resultado.className = "resultado erro";
        return;
      }

      const blocos = Math.ceil(tempo / 15);
      const total = blocos * valor15;

      resultado.textContent = `Tempo total: ${tempo} minutos → ${blocos} bloco(s) de 15 min → Total a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
      resultado.className = "resultado sucesso";
});