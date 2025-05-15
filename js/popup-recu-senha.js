// Função para exibir o primeiro popup (popup-1) e o fundo escurecido (backdrop)    
function mostrarPopup(event) {
    if (event) {
        event.preventDefault();   // Impede que um <a href="#"> role a página
        event.stopPropagation();  // Impede que feche o popup logo após abrir
    }
    // Exibe o conteúdo do popup-1
    document.getElementById("popup-1").style.display = "flex";

    // Exibe o fundo escurecido que cobre o restante da tela
    document.getElementById("backdrop-popup").style.display = "block";
}


function mostrarPopup2() {
    document.getElementById("popup-1").style.display = "none";
    document.getElementById("popup-2").style.display = "flex";
}

function mostrarPopup3() {
    document.getElementById("popup-2").style.display = "none";
    document.getElementById("popup-3").style.display = "flex";
}

function voltarParaPopup1() {
    document.getElementById("popup-2").style.display = "none";
    document.getElementById("popup-1").style.display = "flex";
}

function cancelar() {
    document.getElementById("popup-3").style.display = "none";
    document.getElementById("popup-1").style.display = "flex";
}

function fecharTodosPopups() {
    document.getElementById("popup-1").style.display = "none";
    document.getElementById("popup-2").style.display = "none";
    document.getElementById("popup-3").style.display = "none";
    document.getElementById("backdrop-popup").style.display = "none";
}

window.onload = function () {
    const popups = ["popup-1", "popup-2", "popup-3"];
    popups.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("click", function (e) {
                e.stopPropagation();
            });
        }
    });

    // Abertura do primeiro popup
    document.getElementById("btn-acionador").addEventListener("click", mostrarPopup);

    // Botão de fechar (ícone)
    document.getElementById("btn-fechar").addEventListener("click", function (e) {
        e.preventDefault();
        fecharTodosPopups();
    });
}
