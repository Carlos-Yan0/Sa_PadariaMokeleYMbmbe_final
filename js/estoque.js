let linhaEditando = null;

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

  // Se estiver editando uma linha, atualiza a linha da tabela com os novos dados do formulário

  if (linhaEditando) {
    // Atualiza os valores da linha com os novos dados do formulário
    linhaEditando.cells[1].innerHTML = valores.nome_prod;
    linhaEditando.cells[2].innerHTML = valores.categoria;
    linhaEditando.cells[3].innerHTML = valores.medida;
    linhaEditando.cells[4].innerHTML = valores.val_uni;
    linhaEditando.cells[5].innerHTML = valores.qtde_prod;
    linhaEditando.cells[7].innerHTML = valores.qtde_min;
    linhaEditando.cells[8].innerHTML = valores.validade;

    // Recalcula o valor do inventário e atualiza a célula correspondente
    const valorInventario = (parseFloat(valores.qtde_prod) * parseFloat(valores.val_uni)).toFixed(2);
    linhaEditando.cells[6].innerHTML = valorInventario;

    // Atualiza o status baseado na quantidade mínima
    const status = parseInt(valores.qtde_prod) < parseInt(valores.qtde_min) ? 'Abaixo do mínimo' : 'OK';
    linhaEditando.cells[9].innerHTML = status;

    // Reseta a variável de edição e o texto do botão
    linhaEditando = null;
    document.getElementById("adicionar-produto").innerText = "Adicionar";
  } else {// se não estiver em modo de edição, adiciona uma nova linha

    // Adiciona a nova linha na tabela
    novalinha();
  }
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
    <button class="edit-btn" onclick="editarLinha(this)">
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
  const tabela = document.getElementById('tabelaEstoque');
  const ultimaLinha = tabela.rows[tabela.rows.length - 1];

  // Pega o ID da última linha e incrementa para gerar o novo ID
  const idUltimaLinha = ultimaLinha ? parseInt(ultimaLinha.id.replace('row', '')) : 0;
  const novoId = idUltimaLinha + 1;

  // Cria uma nova linha com o ID incrementado
  criarLinhaTabela(tabela, valores, novoId);
}

function editarLinha(botao) {
  mostrarPopupAdicionar();
  // o botao é o primeiro filho do td, então pegamos o parentNode duas vezes
  // para pegar o tr
  linhaEditando = botao.parentNode.parentNode;

  // pega o valor das celulas da linha
  // e coloca no formulário
  document.getElementById("nome-produto").value = linhaEditando.cells[1].innerText;
  document.getElementById("categoria").value = linhaEditando.cells[2].innerText;
  document.getElementById("medida").value = linhaEditando.cells[3].innerText;
  document.getElementById("valor-unitario-produto").value = linhaEditando.cells[4].innerText;
  document.getElementById("quantidade-produto").value = linhaEditando.cells[5].innerText;
  document.getElementById("quantidade-minima").value = linhaEditando.cells[7].innerText;
  document.getElementById("validade").value = linhaEditando.cells[8].innerText;

  // muda o texto do botão de adicionar para salvar
  document.getElementById("adicionar-produto").innerText = "Salvar";
}