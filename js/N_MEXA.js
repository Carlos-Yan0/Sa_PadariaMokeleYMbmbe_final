document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("produto");
    const inputQtde = document.getElementById("qtde");
    const btnAdd = document.querySelector(".botaoADD");
    const btnMais = document.querySelector(".botaoMA");
    const btnMenos = document.querySelector(".botaoME");

    const tbody = document.querySelector("table tbody");
    const spanTotal = document.querySelector(".valor-total");

    const itens = [];
    const PRECO_UNIT = parseFloat(gerarPrecoAleatorio());
    function gerarPrecoAleatorio() {
        return (Math.random() * (50 - 1) + 1).toFixed(2); // Preço entre 1.00 e 50.00
    }
    // Preenche o campo de preço unitário com um valor aleatório
    btnMais.addEventListener("click", () => {
        let v = parseFloat(inputQtde.value) || 0;
        inputQtde.value = (v + 1).toString();
    });

    btnMenos.addEventListener("click", () => {
        let v = parseFloat(inputQtde.value) || 0;
        if (v > 0) inputQtde.value = (v - 1).toString();
    });

    btnAdd.addEventListener("click", () => {
        const nome = inputNome.value.trim();
        const qtde = parseFloat(inputQtde.value) || 0;

        // Limpa mensagens de erro antes de validar
        inputNome.setCustomValidity("");
        inputQtde.setCustomValidity("");

        if (!nome || qtde <= 0) {
            if (!nome) {
                inputNome.setCustomValidity("Preencha o nome corretamente!");
                inputNome.reportValidity();
                inputNome.focus();
            } else if (qtde <= 0) {
                inputQtde.setCustomValidity("Preencha a quantidade corretamente!");
                inputQtde.reportValidity();
                inputQtde.focus();
            }
            return;
        }

        const subtotal = PRECO_UNIT * qtde;
        itens.push({ nome, qtde, preco: PRECO_UNIT, subtotal });

        function limparCampos() {
            inputNome.value = "";
            inputQtde.value = "";
        }
        limparCampos(); // Limpa os campos após adicionar o item
        renderTabela();
    });
    // Faz o Enter funcionar como o botão de adicionar nos campos de entrada
    inputNome.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            btnAdd.click(); // Simula o clique no botão de adicionar
        }
    });

    inputQtde.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            btnAdd.click(); // Simula o clique no botão de adicionar
        }
    });

    function renderTabela() {
        tbody.innerHTML = "";

        itens.forEach((item, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${String(1000 + idx).slice(1)}</td>
            <td>${item.nome}</td>
          <td>${item.qtde}</td>
          <td>R$${item.preco.toFixed(2).replace(".", ",")}</td>
          <td>Un</td>
          <td>R$${item.subtotal.toFixed(2).replace(".", ",")}</td>
          <td>
            <button class="btn-acao editar" onclick="mostrarPopup(this)"><span class="material-symbols-outlined">edit</span></button>
            <button class="btn-acao excluir"><span class="material-symbols-outlined">delete</span></button>
          </td>
        `;
            tbody.appendChild(tr);
        });

        atualizarTotal();
    }

    const popup = document.getElementById("popup-add");
    const backdrop = document.getElementById("backdrop-popup");


    let itemEditandoIndex = null; // Índice do item que está sendo editado

    document.addEventListener("click", (e) => {
        const excluirBtn = e.target.closest(".excluir");
        const editarBtn = e.target.closest(".editar");

        if (excluirBtn) {
            const row = excluirBtn.closest("tr");
            const index = Array.from(tbody.children).indexOf(row);
            itens.splice(index, 1);
            renderTabela();
        }

        if (editarBtn) {
            const row = editarBtn.closest("tr");
            const idx = Array.from(tbody.children).indexOf(row);
            const item = itens[idx];

            // Preenche os campos do popup com os dados do item
            document.getElementById("nome-produto").value = item.nome;
            document.getElementById("valor-unitario-produto").value = item.preco.toFixed(2);
            document.getElementById("quantidade-produto").value = item.qtde;
            document.getElementById("quantidade-minima").value = 0; // Ajuste conforme necessário
            document.getElementById("validade").value = ""; // Ajuste conforme necessário

            // Salva o índice do item que está sendo editado
            itemEditandoIndex = idx;

            // Exibe o popup
            popup.style.display = "block";
            backdrop.style.display = "block";
        }
    });

    // Adiciona ou atualiza o item ao clicar no botão "Adicionar Produto"
    document.getElementById("adicionar-produto").addEventListener("click", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome-produto").value.trim();
        const preco = parseFloat(document.getElementById("valor-unitario-produto").value) || 0;
        const qtde = parseFloat(document.getElementById("quantidade-produto").value) || 0;

        if (!nome || preco <= 0 || qtde <= 0) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        const subtotal = preco * qtde;

        if (itemEditandoIndex !== null) {
            // Atualiza o item existente
            itens[itemEditandoIndex] = { nome, qtde, preco, subtotal };
            itemEditandoIndex = null; // Reseta o índice
        } else {
            // Adiciona um novo item (caso necessário)
            itens.push({ nome, qtde, preco, subtotal });
        }

        // Fecha o popup
        popup.style.display = "none";
        backdrop.style.display = "none";

        renderTabela();
        limparCampos(); // Limpa os campos após adicionar ou atualizar o item
    });

    // Fecha o popup ao clicar no botão "Cancelar"
    const btnEditar = document.getElementById("adicionar-produto");
    btnEditar.addEventListener("click", (e) => {
        e.preventDefault();      // para garantir que não submeta nada
        editarLinha();           // chama a função sem “nome.value”
        popup.style.display = "none";
        backdrop.style.display = "none";
        renderTabela();
        limparCampos();
    });


    // Fecha o popup ao clicar fora dele
    backdrop.addEventListener("click", () => {
        popup.style.display = "none";
        backdrop.style.display = "none";
    });

    function atualizarTotal() {
        const total = itens.reduce((acc, i) => acc + i.subtotal, 0);
        spanTotal.textContent = `R$${total.toFixed(2).replace(".", ",")}`;
        spanDesconto.textContent = `R$0.00`;
    }

    const form = document.querySelector(".area-busca form");

    // Previne o comportamento padrão de submissão do formulário
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});
