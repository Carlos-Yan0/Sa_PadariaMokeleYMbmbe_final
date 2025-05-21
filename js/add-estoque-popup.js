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
