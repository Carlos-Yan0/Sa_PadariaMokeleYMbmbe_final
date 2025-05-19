function removerLinha(botao) {
    const linha = botao.closest('tr'); // Acessa a linha inteira (<tr>) onde o botão está
    const tbody = linha.parentNode; // Acessa o <tbody> que contém a linha
    tbody.removeChild(linha); // Remove a linha inteira do <tbody>

    //removerLinha(this)
}

// Função para mostrar o popup
function mostrarPopupRemover() {
    document.getElementById('popup-remove').style.display = 'flex';
    document.getElementById('backdrop-popup').style.display = 'block';
}

// Função para fechar o popup
function fecharRemover() {
    document.getElementById('popup-remove').style.display = 'none';
    document.getElementById('backdrop-popup').style.display = 'none';
}

function confirmarRemover() {
    const botaoRemover = document.getElementById('botao-remover');
    if (botaoRemover) {
        botaoRemover.addEventListener("click", function () {
            removerLinha(this); // Chama a função para remover a linha
            fecharRemover(); // Fecha o popup
        });
    }
}

// Adicionando evento de clique no backdrop (fundo)
window.onload = function () {
    const fecharButton = document.getElementById('cancelar');
    if (fecharButton) {
        fecharButton.addEventListener("click", function () {
            fecharRemover(); // Fecha o popup quando o botão "Fechar" for clicado
        });
    }
}
