fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    const produtos = data.products;

    const selecionados = produtos; // pega todos os produtos

    const container = document.getElementById("produto-container");
    container.innerHTML = selecionados.map(p => montarCard(p)).join("");

    // Ativa botões de carrinho
    const botoesCarrinho = document.querySelectorAll(".btn-carrinho");
    botoesCarrinho.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        addCarrinho(selecionados[index]);
      });
    });

    // Ativa botões de comprar
    const botoesComprar = document.querySelectorAll(".btn-comprar");
    botoesComprar.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        const produtoSelecionado = selecionados[index];
        addCarrinho(produtoSelecionado);
        window.location.href = "shopping.html";
      });
    });
  })
  .catch(error => {
    console.error("Erro ao carregar produtos", error);
    document.getElementById("produto-container").innerHTML =
      "<p>Erro ao carregar produtos</p>";
  });

function montarCard(produto) {
  return `
    <div class="card">
      <img src="${produto.thumbnail}" alt="${produto.title}">
      <h2>${produto.title}</h2>
      <p>${produto.description}</p>
      <div class="price">Preço: R$ ${produto.price}</div>
      <div class="rating">Ranking: ${produto.rating}</div>
      <div class="botoes">
        <button class="btn btn-success btn-comprar">Comprar</button>
        <button class="btn btn-outline-primary btn-carrinho">
          <span class="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  `;
}

function addCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(`${produto.title} adicionado ao carrinho!`);
}

// ---- Página shopping.html ----
const carrinhoContainer = document.getElementById("carrinho-container");

if (carrinhoContainer) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let total = 0;

  carrinhoContainer.innerHTML = carrinho.map((item, index) => {
    total += item.price;
    return `
      <div class="card">
        <img src="${item.thumbnail}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class="price">Preço: R$ ${item.price.toFixed(2)}</div>
        <button class="btn btn-danger btn-remover" data-index="${index}">
          Remover
        </button>
      </div>
    `;
  }).join("");

  const botoesRemover = document.querySelectorAll(".btn-remover");
  botoesRemover.forEach(botao => {
    botao.addEventListener("click", () => {
      const index = botao.getAttribute("data-index");
      removerDoCarrinho(index);
    });
  });

  document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.location.reload();
}
