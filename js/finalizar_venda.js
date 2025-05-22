function finalizarVenda() {

    // Pega o valor total da venda
    // e remove o "R$" e formata para float
    valorTotal = document.querySelector("span.valor-total").innerText;
    valorTotal = valorTotal.replace("R$", "").replace(".", "").replace(",", ".");
    valorTotal = parseFloat(valorTotal);

    // Verifica se o valor total é válido
    // e se é maior que 0
    if (isNaN(valorTotal) || valorTotal <= 0) {
        alert("[ERRO] Impossível finalizar esta venda.");
        return;
    }
    valorTotal = valorTotal.toFixed(2);

    // Exibe o popup de finalizar venda
    exibirPopupFinalizarVenda(valorTotal);

    // lógica básica para teste (desativada)
    // 
    // while (valorTotal > 0) {
    //     let valor = prompt("Digite o valor do pagamento: ");
    //     valor = valor.replace("R$", "").replace(".", "").replace(",", ".");
    //     valor = parseFloat(valor);
    //     valor = valor.toFixed(2);

    //     if (valorTotal == 0) {
    //         alert("Venda já finalizada!");
    //         break;
    //     }

    //     if (valor > 0) {
    //         alert("Pagamento aceito!");
    //         valorTotal = valorTotal - valor;
    //     } else {
    //         alert("Valor inválido!");
    //     }
    // }
}

function exibirPopupFinalizarVenda(valorTotal) {
    // Exibe o popup de finalizar venda
    const popup_met_pag = document.getElementById("popup-met-pag");
    const backdrop = document.getElementById("backdrop-popup");
    const cancelar = document.getElementById("cancelar-finalizar");

    popup_met_pag.style.display = "flex";
    backdrop.style.display = "block";

    //faz com que o popup feche quando clicar fora dele
    backdrop.addEventListener("click", function (event) {
        fecharPopup(popup_met_pag, backdrop);
    });

    // ou se clicar em Cancelar
    cancelar.addEventListener("click", function () {
        fecharPopup(popup_met_pag, backdrop);

    });

    //lida com os botoes de pagamento
    const btnDinheiro = document.getElementById("btn-dinheiro");
    const btnCredito = document.getElementById("btn-credito");
    const btnDebito = document.getElementById("btn-debito");
    const btnCheque = document.getElementById("btn-cheque");

    if (btnDinheiro) {
        btnDinheiro.addEventListener("click", function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("dinheiro", valorTotal);
        });
    }
    if (btnCredito) {
        btnCredito.addEventListener("click", function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("credito", valorTotal);
        });
    }
    if (btnDebito) {
        btnDebito.addEventListener("click", function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("debito", valorTotal);
        });
    }
    if (btnCheque) {
        btnCheque.addEventListener("click", function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("cheque", valorTotal);
        });
    }

}

function finalizarVendaComMetodo(metodo, valorTotal) {
    // exibe o popup do método de pagamento selecionado
    const popup = document.getElementById(`popup-${metodo}`);
    const backdrop = document.getElementById("backdrop-popup");
    const cancelar = document.getElementById(`cancelar-${metodo}`);
    const form = popup.querySelector("form");
    let valorInput = null;

    // identifica o input de valor conforme o método
    if (metodo === "credito") {
        valorInput = document.getElementById("valor-cartao");
    } else if (metodo === "debito") {
        valorInput = document.getElementById("valor-cartao"); // ajuste se o id for diferente
    } else if (metodo === "dinheiro") {
        valorInput = document.getElementById("valor-dinheiro");
    } else if (metodo === "cheque") {
        valorInput = document.getElementById("valor-cheque");
    }

    // limpa valor anterior se houver
    if (valorInput) valorInput.value = "";

    popup.style.display = "flex";
    backdrop.style.display = "block";

    // fechar ao clicar fora
    backdrop.onclick = function () {
        fecharPopup(popup, backdrop);
    };
    cancelar.onclick = function () {
        fecharPopup(popup, backdrop);
    };

    // submissão do pagamento
    form.onsubmit = function (e) {
        e.preventDefault();
        let restante = parseFloat(valorTotal);
        let valor = parseFloat(valorInput.value);
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido!");
            return;
        }
        if (valor >= restante) {
            let troco = valor - restante;
            alert("Pagamento aceito!" + (troco > 0 ? ` Troco: R$ ${troco.toFixed(2)}` : ""));
            fecharPopup(popup, backdrop);
        } else {
            alert(`Valor insuficiente. Faltam R$ ${(restante - valor).toFixed(2)}`);
        }
    };
}

function fecharPopup(popup, bd) {
    popup.style.display = "none";
    bd.style.display = "none";
}