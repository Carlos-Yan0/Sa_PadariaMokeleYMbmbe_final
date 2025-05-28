// Função para exibir o primeiro popup (popup-recu1) e o fundo escurecido (backdrop-popup)
function mostrarPopup(event) {
    if (event) {
        event.preventDefault();   // Impede que um <a href="#"> role a página
        event.stopPropagation();  // Impede que feche o popup logo após abrir
    }
    // Exibe o conteúdo do popup-recu1
    document.getElementById("popup-recu1").style.display = "flex";

    // Exibe o fundo escurecido que cobre o restante da tela
    document.getElementById("backdrop-popup").style.display = "block";
}

function mostrarPopup2() {
    document.getElementById("popup-recu1").style.display = "none";
    document.getElementById("popup-recu2").style.display = "flex";
}

function mostrarPopup3() {
    document.getElementById("popup-recu2").style.display = "none";
    document.getElementById("popup-recu3").style.display = "flex";
}

function voltarParaPopup1() {
    document.getElementById("popup-recu2").style.display = "none";
    document.getElementById("popup-recu1").style.display = "flex";
}

function cancelar() {
    document.getElementById("popup-recu3").style.display = "none";
    document.getElementById("popup-recu1").style.display = "flex";
}

function fecharTodosPopups() {
    document.getElementById("popup-recu1").style.display = "none";
    document.getElementById("popup-recu2").style.display = "none";
    document.getElementById("popup-recu3").style.display = "none";
    document.getElementById("backdrop-popup").style.display = "none";
}

window.onload = function () {
    const popups = ["popup-recu1", "popup-recu2", "popup-recu3"];
    popups.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", function (e) {
                e.stopPropagation();
            });
        }
    });

    // Abertura do primeiro popup
    const acionador = document.querySelector('[onclick="mostrarPopup()"]');
    if (acionador) {
        acionador.addEventListener("click", mostrarPopup);
    }

    // Botão de fechar (ícone)
    const fecharIcones = document.querySelectorAll('[onclick="fecharTodosPopups()"]');
    fecharIcones.forEach(icon => {
        icon.addEventListener("click", function (e) {
            e.preventDefault();
            fecharTodosPopups();
        });
    });
}
