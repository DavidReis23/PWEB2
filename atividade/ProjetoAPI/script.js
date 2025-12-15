document.addEventListener("DOMContentLoaded", () => {
  const btnCarregar = document.getElementById("btnCarregar");
  const produtosDiv = document.getElementById("produtos");
  const loading = document.getElementById("loading");
  const erro = document.getElementById("erro");

  btnCarregar.addEventListener("click", carregarProdutos);

  async function carregarProdutos() {
    produtosDiv.innerHTML = "";
    erro.textContent = "";
    loading.classList.remove("hidden");

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const produtos = await response.json();
      renderizarProdutos(produtos);
    } catch (e) {
      erro.textContent = "Erro ao buscar produtos";
    } finally {
      loading.classList.add("hidden");
    }
  }

  function renderizarProdutos(produtos) {
    produtos.forEach((produto) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${produto.image}">
        <h3>${produto.title}</h3>
        <p>Preço: R$ ${produto.price}</p>
      `;
      produtosDiv.appendChild(card);
    });
  }
});
