function confirmarIdentidade(linha, tbody) {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === '123') {
        alert('Produto removido com sucesso!');
        tbody.removeChild(linha);
        fecharRemover();
    } else {
        alert('Usuário ou senha inválidos. Apenas administradores podem remover produtos.');
    }
}

// Função para mostrar o popup
function mostrarPopupRemover(botao) {
    const linha = botao.closest('tr'); // Acessa a linha inteira (<tr>) onde o botão está
    const tbody = linha.parentNode; // Acessa o <tbody> que contém a linha

    // Exibir o popup
    document.getElementById('popup-remove').style.display = 'flex';
    document.getElementById('backdrop-popup').style.display = 'block';

    // Adiciona o evento de clique no botão #verificar-identidade
    const verificarButton = document.getElementById('verificar-identidade');
    if (verificarButton) {
        verificarButton.onclick = function() {
            confirmarIdentidade(linha, tbody); // Chama confirmarIdentidade ao clicar no botão
        };
    }
}

// Função para fechar o popup
function fecharRemover() {
    document.getElementById('popup-remove').style.display = 'none';
    document.getElementById('backdrop-popup').style.display = 'none';
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
