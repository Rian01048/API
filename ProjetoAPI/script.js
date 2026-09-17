// Rota API PRODUCT
const HTTPS = "https://"
const DNS = "dummyjson.com"
const ROUTE = "/products"
const URL_API = `${HTTPS}${DNS}${ROUTE}`

let produtos = []

async function carregarProdutos() {
    try {
        const resposta = await fetch(URL_API)
        const dados = await resposta.json()
        console.log("Dados Recebidos: ",dados)
        produtos = dados.products

        mostrarProdutos(produtos)

    }catch (erro){
        console.error("Erro ao carregar produtos: ",erro)
    }
}

function mostrarProdutos(lista) {
    const area = document.querySelector("#listaProdutos")
    area.innerHTML = ""

    lista.forEach((produto) => {
        area.innerHTML += `
        <div class="produto">

            <img src = "${produto.thumbnail}">
            <h2>${produto.title}</h2>
            <p>
                Categoria: ${produto.category}
            </p>

            <strong>R$ ${produto.price}</strong>
        </div>
        `;
    });
}

function buscarProduto() {
    const texto = document.
    querySelector("#campoBusca")
    .value
    .trim()
    .toLowerCase();
    const resultado = produtos.filter((produto) => {
        return produto.title.toLowerCase().includes(texto);
    });

    mostrarProdutos(resultado)
}

carregarProdutos()

