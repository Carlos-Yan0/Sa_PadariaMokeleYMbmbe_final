let linhaEditando = null;

function mostrarAlert(produto, qtde) {
    produto.setCustomValidity("");
    qtde.setCustomValidity("");

    const produtoValue = produto.value.trim();
    const qtdeValue = parseFloat(qtde.value) || 0;

    if (!produtoValue || qtdeValue <= 0) {
        if (!produtoValue) {
            produto.setCustomValidity("Preencha o nome corretamente!");
            produto.reportValidity();
            produto.focus();
        } else if (qtdeValue <= 0) {
            qtde.setCustomValidity("Preencha a quantidade corretamente!");
            qtde.reportValidity();
            qtde.focus();
        }
        return;
    }

    // Se estiver editando uma linha, atualiza a linha da tabela com os novos dados do formulário
    if (linhaEditando) {
        linhaEditando.cells[1].innerHTML = produto.value;
        linhaEditando.cells[2].innerHTML = qtde;
        linhaEditando = null;

        document.getElementById("botao-add").innerText = "Adicionar";
    } else {
        // Se não estiver em modo de edição, adiciona uma nova linha
        const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
        const numLinhas = tabela.rows.length;
        const linha = tabela.insertRow(numLinhas);

        const celulaId = linha.insertCell(0);
        const celulaProduto = linha.insertCell(1);
        const celulaQtde = linha.insertCell(2);
        const celulaValorUni = linha.insertCell(3);
        const celulaMedida = linha.insertCell(4);
        const celulaSubtotal = linha.insertCell(5);
        const celulaAcoes = linha.insertCell(6);

        celulaId.innerHTML = numLinhas + 1; // ID automático
        celulaProduto.innerHTML = produto;
        celulaQtde.innerHTML = qtde;
        celulaValorUni.innerHTML = "R$0,00"; // Valor padrão
        celulaMedida.innerHTML = "UN"; // Medida padrão
        celulaSubtotal.innerHTML = "R$0,00"; // Subtotal padrão
        celulaAcoes.innerHTML = `
            <button type="button" class="btn-acao editar" onclick="prepararEdicao(this)"><span class="material-symbols-outlined">Edit</span></button>
            <button type="button" class="btn-acao excluir" onclick="excluirLinha(this)"><span class="material-symbols-outlined">Delete</span></button>`;

        // Limpar os campos
        document.getElementById("produto").value = "";
        document.getElementById("qtde").value = "";
}
}


function prepararEdicao(botao) {
    // O botão é o primeiro filho do <td>, então pegamos o parentNode duas vezes para acessar o <tr>
    linhaEditando = botao.parentNode.parentNode;

    // Preenche os campos do formulário com os valores da linha
    document.getElementById("produto").value = linhaEditando.cells[1] ? linhaEditando.cells[1].innerText : "";
    document.getElementById("qtde").value = linhaEditando.cells[2] ? linhaEditando.cells[2].innerText : "";

    // Muda o texto do botão de adicionar para salvar
    document.getElementById("botao-add").innerText = "Salvar";
}

function excluirLinha(botao) {
    // O botão é o primeiro filho do <td>, então pegamos o parentNode duas vezes para acessar o <tr>
    const linha = botao.closest('tr');
    linha.remove();
}