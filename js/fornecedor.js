// ID único para novos fornecedores
let proximoId = 4;

// Mostra o popup de adicionar fornecedor
function mostrarPopupAdicionar() {
    const nome = prompt("Digite o nome do fornecedor:");
    const telefone = prompt("Digite o telefone:");
    const logradouro = prompt("Digite o logradouro:");
    const cidade = prompt("Digite a cidade:");
    const tipoProduto = prompt("Digite o tipo de produto:");

    if (nome && telefone && logradouro && cidade && tipoProduto) {
        adicionarFornecedor(nome, telefone, logradouro, cidade, tipoProduto);
    }
}

function adicionarFornecedor(nome, telefone, logradouro, cidade, tipoProduto) {
    const tabela = document.querySelector("#tabelaEstoque tbody");

    const novaLinha = document.createElement("tr");
    novaLinha.id = `row${proximoId}`;
    novaLinha.innerHTML = `
        <td>${proximoId}</td>
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>${logradouro}</td>
        <td>${cidade}</td>
        <td>${tipoProduto}</td>
        <td>
            <button class="edit-btn"><span class="material-symbols-outlined">edit</span></button>
            <button class="delete-btn"><span class="material-symbols-outlined">delete</span></button>
        </td>
    `;

    // Adiciona listeners aos botões
    novaLinha.querySelector(".edit-btn").addEventListener("click", () => editarFornecedor(novaLinha));
    novaLinha.querySelector(".delete-btn").addEventListener("click", () => removerLinha(novaLinha));

    tabela.appendChild(novaLinha);
    proximoId++;
}

function removerLinha(linha) {
    if (confirm("Tem certeza que deseja remover este fornecedor?")) {
        linha.remove();
    }
}

function editarFornecedor(linha) {
    const colunas = linha.querySelectorAll("td");

    const nome = prompt("Editar nome:", colunas[1].textContent);
    const telefone = prompt("Editar telefone:", colunas[2].textContent);
    const logradouro = prompt("Editar logradouro:", colunas[3].textContent);
    const cidade = prompt("Editar cidade:", colunas[4].textContent);
    const tipoProduto = prompt("Editar tipo de produto:", colunas[5].textContent);

    if (nome && telefone && logradouro && cidade && tipoProduto) {
        colunas[1].textContent = nome;
        colunas[2].textContent = telefone;
        colunas[3].textContent = logradouro;
        colunas[4].textContent = cidade;
        colunas[5].textContent = tipoProduto;
    }
}

// Aplica os eventos nas linhas já existentes
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", () => editarFornecedor(btn.closest("tr")));
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => removerLinha(btn.closest("tr")));
    });
});

// Função para mostrar o popup
function mostrarPopupAdicionar() {
  document.getElementById('popup-add').style.display = 'flex';
  document.getElementById('backdrop-popup').style.display = 'block';
}

// Função para fechar o popup
function fecharAdicionar() {
  document.getElementById('popup-add').style.display = 'none';
  document.getElementById('backdrop-popup').style.display = 'none';
}

// Adicionando evento de clique no backdrop (fundo)
window.onload = function () {
  const fecharButton = document.getElementById('cancelar-adicionar');
  const editarButton = document.getElementById('adicionar-produto');
  if (fecharButton) {
      fecharButton.addEventListener("click", function () {
          fecharAdicionar(); // Fecha o popup quando o botão "Fechar" for clicado
      });
  };

  if (editarButton) {
      editarButton.addEventListener('click', function () {
          mostrarPopupAdicionar(); // Mostra o popup quando o botão "Adicionar Produto" for clicado
      });
  };
}
