// Função para mostrar o popup de edição
function mostrarPopupEditar(botao) {
    const linha = botao.closest('tr'); // Acessa a linha inteira (<tr>) onde o botão está

    // Preenche os campos do popup com os valores da linha
    document.getElementById('nome-produto-editar').value = linha.cells[1].textContent;
    document.getElementById('categoria-editar').value = linha.cells[2].textContent;
    document.getElementById('medida-editar').value = linha.cells[3].textContent;
    document.getElementById('valor-unitario-produto-editar').value = linha.cells[4].textContent.replace(',', '.');
    document.getElementById('quantidade-produto-editar').value = linha.cells[5].textContent;
    document.getElementById('quantidade-minima-editar').value = linha.cells[7].textContent;
    document.getElementById('validade-editar').value = linha.cells[8].textContent;

    // Exibir o popup
    document.getElementById('popup-editar').style.display = 'flex';
    document.getElementById('backdrop-popup').style.display = 'block';

    // Adiciona o evento de clique no botão de salvar
    const salvarButton = document.getElementById('editar-produto');
    if (salvarButton) {
        salvarButton.onclick = function () {
            salvarEdicao(linha); // Chama salvarEdicao ao clicar no botão
        };
    }
}

// Função para salvar as alterações feitas no popup
function salvarEdicao(linha) {
    linha.cells[1].textContent = document.getElementById('nome-produto').value;
    linha.cells[2].textContent = document.getElementById('categoria').value;
    linha.cells[3].textContent = document.getElementById('medida').value;
    linha.cells[4].textContent = parseFloat(document.getElementById('valor-unitario-produto').value).toFixed(2).replace('.', ',');
    linha.cells[5].textContent = document.getElementById('quantidade-produto').value;
    linha.cells[7].textContent = document.getElementById('quantidade-minima').value;
    linha.cells[8].textContent = document.getElementById('validade').value;

    fecharEditar(); // Fecha o popup após salvar
}

// Função para fechar o popup de edição
function fecharEditar() {
    document.getElementById('popup-editar').style.display = 'none';
    document.getElementById('backdrop-popup').style.display = 'none';
}

// Adicionando evento de clique no backdrop (fundo)
window.onload = function () {
    const cancelarButton = document.getElementById('cancelar-editar');
    if (cancelarButton) {
        cancelarButton.addEventListener("click", function () {
            fecharEditar(); // Fecha o popup quando o botão "Cancelar" for clicado
        });
    }
};
