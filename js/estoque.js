// Adicionando o evento de clique ao botão
document.getElementById('adicionar-produto').addEventListener('click', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura os valores dos campos
  const valores = capturarValores();

  // Verifica se todos os campos estão preenchidos
  if (
    !valores.nome_prod.trim() ||
    !valores.categoria.trim() ||
    !valores.medida.trim() ||
    !valores.val_uni.trim() ||
    !valores.qtde_prod.trim() ||
    !valores.qtde_min.trim() ||
    !valores.validade.trim()
  ) {
    alert('Por favor, preencha todos os campos antes de adicionar o produto.');
    return; // Interrompe a execução se algum campo estiver vazio
  }

  // Adiciona a nova linha na tabela
  novalinha();
});

function capturarValores() {
  // Captura os valores dos campos de entrada
  return {
    nome_prod: document.getElementById('nome-produto').value,
    categoria: document.getElementById('categoria').value,
    medida: document.getElementById('medida').value,
    val_uni: document.getElementById('valor-unitario-produto').value,
    qtde_prod: document.getElementById('quantidade-produto').value,
    qtde_min: document.getElementById('quantidade-minima').value,
    validade: document.getElementById('validade').value,
  };
}

function criarLinhaTabela(tabela, valores, novoId) {
  // Cria uma nova linha na tabela
  const novaLinha = tabela.insertRow();

  // Adiciona um ID único à nova linha
  novaLinha.id = 'row' + novoId;

  // Adiciona células à nova linha
  const celulaId = novaLinha.insertCell(0);
  const celulaNome = novaLinha.insertCell(1);
  const celulaCategoria = novaLinha.insertCell(2);
  const celulaMedida = novaLinha.insertCell(3);
  const celulaValUni = novaLinha.insertCell(4);
  const celulaQtdeProd = novaLinha.insertCell(5);
  const celulaValInv = novaLinha.insertCell(6);
  const celulaQtdeMin = novaLinha.insertCell(7); // Nova célula para Quantidade Mínima
  const celulaValidade = novaLinha.insertCell(8); // Nova célula para Validade
  const celulaStatus = novaLinha.insertCell(9);
  const celulaAcoes = novaLinha.insertCell(10);

  // Adiciona os valores capturados às células
  celulaId.textContent = novoId; // ID da nova linha
  celulaNome.textContent = valores.nome_prod;
  celulaCategoria.textContent = valores.categoria;
  celulaMedida.textContent = valores.medida;
  celulaValUni.textContent = parseFloat(valores.val_uni).toFixed(2); // Valor unitário formatado
  celulaQtdeProd.textContent = valores.qtde_prod;
  celulaValInv.textContent = (parseFloat(valores.qtde_prod) * parseFloat(valores.val_uni)).toFixed(2); // Valor total do estoque
  celulaQtdeMin.textContent = valores.qtde_min; // Adiciona a Quantidade Mínima
  celulaValidade.textContent = valores.validade; // Adiciona a Validade

  // Define o status baseado na quantidade mínima
  const status = parseInt(valores.qtde_prod) < parseInt(valores.qtde_min) ? 'Abaixo do mínimo' : 'OK';
  celulaStatus.textContent = status;

  // Adiciona os botões de ação
  celulaAcoes.innerHTML = `
    <button class="edit-btn" onclick="mostrarPopupEditar(this)">
      <span class="material-symbols-outlined">edit</span>
    </button>
    <button class="delete-btn" onclick="mostrarPopupRemover(this)">
      <span class="material-symbols-outlined">delete</span>
    </button>
  `;
}

// Função para adicionar uma nova linha na tabela
function novalinha() {
  // Captura os valores dos campos
  const valores = capturarValores();

  // Pega a tabela e a última linha
  const tabela = document.getElementById('tabelaEstoque').getElementsByTagName('tbody')[0];
  const ultimaLinha = tabela.rows[tabela.rows.length - 1];

  // Pega o ID da última linha e incrementa para gerar o novo ID
  const idUltimaLinha = ultimaLinha ? parseInt(ultimaLinha.id.replace('row', '')) : 0;
  const novoId = idUltimaLinha + 1;

  // Cria uma nova linha com o ID incrementado
  criarLinhaTabela(tabela, valores, novoId);
}