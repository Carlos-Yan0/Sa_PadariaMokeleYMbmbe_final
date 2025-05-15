// Função para mostrar o popup
function mostrarPopup() {
    document.getElementById('popup-add').style.display = 'flex';
    document.getElementById('backdrop-popup').style.display = 'block';
}

// Função para fechar o popup
function fechar() {
    document.getElementById('popup-add').style.display = 'none';
    document.getElementById('backdrop-popup').style.display = 'none';
}

// Função para fechar o popup ao clicar no botão "Fechar" ou "Cancelar"
function cancelar() {
    fechar();
}

// Adicionando evento de clique no backdrop (fundo)
window.onload = function () {
    const backdrop = document.getElementById('backdrop-popup');
    if (backdrop) {
        backdrop.addEventListener("click", function () {
            fechar(); // Fecha o popup quando o fundo (backdrop) for clicado
        });
    }

    const fecharButton = document.getElementById('fechar-button');
    if (fecharButton) {
        fecharButton.addEventListener("click", function () {
            fechar(); // Fecha o popup quando o botão "Fechar" for clicado
        });
    }
}
