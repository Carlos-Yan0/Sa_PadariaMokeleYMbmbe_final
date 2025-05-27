let pagamentos = [];
let valorTotalVenda = 0;

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

    // Inicializa controle de pagamentos
    pagamentos = [];
    valorTotalVenda = parseFloat(valorTotal);

    // Exibe o popup de finalizar venda
    exibirPopupFinalizarVenda(valorTotal);
}

function exibirPopupFinalizarVenda(valorRestante) {
    const popup_met_pag = document.getElementById("popup-met-pag");
    const backdrop = document.getElementById("backdrop-popup");
    const cancelar = document.getElementById("cancelar-finalizar");

    popup_met_pag.style.display = "flex";
    backdrop.style.display = "block";

    // Atualiza o texto do popup para mostrar o valor restante, se necessário
    let infoRestante = popup_met_pag.querySelector(".info-restante");
    if (!infoRestante) {
        infoRestante = document.createElement("div");
        infoRestante.className = "info-restante";
        popup_met_pag.insertBefore(infoRestante, popup_met_pag.firstChild.nextSibling);
    }
    infoRestante.textContent = `Valor restante: R$ ${parseFloat(valorRestante).toFixed(2)}`;

    backdrop.onclick = function (event) {
        fecharPopup(popup_met_pag, backdrop);
    };
    cancelar.onclick = function () {
        fecharPopup(popup_met_pag, backdrop);
    };

    const btnDinheiro = document.getElementById("btn-dinheiro");
    const btnCredito = document.getElementById("btn-credito");
    const btnDebito = document.getElementById("btn-debito");
    const btnCheque = document.getElementById("btn-cheque");

    // Remove event listeners antigos para evitar múltiplos disparos
    btnDinheiro.onclick = null;
    btnCredito.onclick = null;
    btnDebito.onclick = null;
    btnCheque.onclick = null;

    if (btnDinheiro) {
        btnDinheiro.onclick = function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("dinheiro", valorRestante);
        };
    }
    if (btnCredito) {
        btnCredito.onclick = function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("credito", valorRestante);
        };
    }
    if (btnDebito) {
        btnDebito.onclick = function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("debito", valorRestante);
        };
    }
    if (btnCheque) {
        btnCheque.onclick = function () {
            fecharPopup(popup_met_pag, backdrop);
            finalizarVendaComMetodo("cheque", valorRestante);
        };
    }
}

function finalizarVendaComMetodo(metodo, valorRestante) {
    const popup = document.getElementById(`popup-${metodo}`);
    const backdrop = document.getElementById("backdrop-popup");
    const cancelar = document.getElementById(`cancelar-${metodo}`);
    const form = popup.querySelector("form");
    let valorInput = null;
    if (metodo === "credito") {
        valorInput = popup.querySelector("#valor-cartao-credito");
    } else if (metodo === "debito") {
        valorInput = popup.querySelector("#valor-cartao-debito");
    } else if (metodo === "dinheiro") {
        valorInput = popup.querySelector("#valor-dinheiro");
    } else if (metodo === "cheque") {
        valorInput = popup.querySelector("#valor-cheque");
    }

    if (valorInput) valorInput.value = "";

    popup.style.display = "flex";
    backdrop.style.display = "block";

    backdrop.onclick = function () {
        fecharPopup(popup, backdrop);
    };
    cancelar.onclick = function () {
        fecharPopup(popup, backdrop);
        //Retorna para o popup de métodos de pagamento
        const popup_met_pag = document.getElementById("popup-met-pag");
        // Reutiliza a variável backdrop já existente

        popup_met_pag.style.display = "flex";
        backdrop.style.display = "block";
    };

    form.onsubmit = function (e) {
        e.preventDefault();
        let valor = parseFloat(valorInput.value);
        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido!");
            return;
        }

        // Armazena o pagamento
        pagamentos.push({
            metodo: metodo,
            valor: valor
        });

        if (valor >= valorRestante) {
            let troco = valor - valorRestante;
            // alert("Pagamento aceito!" + (troco > 0 ? ` Troco: R$ ${troco.toFixed(2)}` : ""));
            fecharPopup(popup, backdrop);
            mostrarResumoVenda(troco);
        } else {
            valorRestante -= valor;
            // alert(`Valor parcial recebido. Restam R$ ${valorRestante.toFixed(2)}. Escolha outro método para completar o pagamento.`);
            fecharPopup(popup, backdrop);
            exibirPopupFinalizarVenda(valorRestante.toFixed(2));
        }
    };
}

function mostrarResumoVenda(troco) {
    // Preenche os dados do popup venda-info
    const vendaInfo = document.getElementById("venda-info");
    const dataVenda = document.getElementById("data-venda");
    const atendenteVenda = document.getElementById("atendente-venda");
    const caixaVenda = document.getElementById("caixa-venda");
    const idVenda = document.getElementById("id-venda");
    const metodoPagamento = document.getElementById("metodo-pagamento");
    const subtotalVenda = document.getElementById("subtotal-venda");
    const trocoVenda = document.getElementById("troco-venda");
    const descontosVenda = document.getElementById("descontos-venda");
    const totalVenda = document.getElementById("total-venda");

    // Data/hora atual
    const agora = new Date();
    const dataFormatada = agora.toLocaleString();
    let historico = JSON.parse(localStorage.getItem("historicoVendas")) || [];
    const codVenda = (historico.length + 1).toString(); // ID sequencial


    // Preenche os dados visuais
    dataVenda.textContent = dataFormatada;
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    atendenteVenda.textContent = usuarioLogado ? usuarioLogado.nome : "Desconhecido";

    caixaVenda.textContent = "0-00001";
    idVenda.textContent = codVenda;

    metodoPagamento.textContent = pagamentos.map(p => `${capitalize(p.metodo)}: R$ ${p.valor.toFixed(2)}`).join(" | ");
    trocoVenda.textContent = troco ? troco.toFixed(2) : "0,00";
    subtotalVenda.textContent = valorTotalVenda.toFixed(2);
    descontosVenda.textContent = "0,00";
    totalVenda.textContent = valorTotalVenda.toFixed(2);

    // Calcular quantidade total de itens vendidos
    const linhas = document.querySelectorAll("#tabela tbody tr");
    let qtdTotal = 0;
    linhas.forEach(linha => {
        const qtd = parseInt(linha.cells[2].innerText) || 0;
        qtdTotal += qtd;
    });

    // Monta objeto de venda
    const venda = {
        data: dataFormatada,
        cod: codVenda,
        nome: usuarioLogado ? usuarioLogado.nome : "Desconhecido",
        metodo: pagamentos.map(p => capitalize(p.metodo)).join(" / "),
        qtd: qtdTotal,
        subtotal: valorTotalVenda
    };

    // Salvar no localStorage
    historico.push(venda);
    localStorage.setItem("historicoVendas", JSON.stringify(historico));


    // Exibir popup
    vendaInfo.style.display = "flex";
    document.getElementById("backdrop-popup").style.display = "block";

    // Fechar popup
    document.getElementById("fechar-popup").onclick = function () {
        vendaInfo.style.display = "none";
        document.getElementById("backdrop-popup").style.display = "none";
        limparVenda();
    };
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function fecharPopup(popup, bd) {
    popup.style.display = "none";
    bd.style.display = "none";
}

function limparVenda(){
    // Cancela a venda atual e limpa os dados
    const tabela = document.getElementById("tabela-corpo");
    const totalDisplay = document.querySelector('.valor-total');

    totalDisplay.innerText = "R$ 0,00";
    tabela.innerHTML = ""; // Limpa a tabela de itens vendidos

    pagamentos = [];
    valorTotalVenda = 0;

    fecharPopup(document.getElementById("popup-met-pag"), document.getElementById("backdrop-popup"));
}