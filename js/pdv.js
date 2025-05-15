document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("produto");
    const inputQtde = document.getElementById("qtde");
    const btnAdd = document.querySelector(".botaoADD");
    const btnMais = document.querySelector(".botaoMA");
    const btnMenos = document.querySelector(".botaoME");

    const tbody = document.querySelector("table tbody");
    const spanTotal = document.querySelector(".valor-total");
    const spanDesconto = document.querySelector(".valor-desconto");

    const itens = [];
    const PRECO_UNIT = 1.00;

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
        const qtde = parseFloat(inputQtde.value.replace(",", ".")) || 0;

        if (!nome || qtde <= 0) {
            alert("🙏 Preencha nome e quantidade corretamente!");
            return;
        }

        const subtotal = PRECO_UNIT * qtde;
        itens.push({ nome, qtde, preco: PRECO_UNIT, subtotal });

        renderTabela();
    });

    function renderTabela() {
        tbody.innerHTML = "";

        itens.forEach((item, idx) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
          <td>${item.nome}</td>
          <td>${String(1000 + idx).slice(1)}</td>
          <td>${item.qtde.toFixed(3)}</td>
          <td>${item.preco.toFixed(2)}</td>
          <td>un</td>
          <td>0.00</td>
          <td>R$${item.subtotal.toFixed(2)}</td>
          <td>
            <button class="btn-acao editar"><span class="material-symbols-outlined">edit</span></button>
            <button class="btn-acao excluir"><span class="material-symbols-outlined">delete</span></button>
          </td>
        `;
            tbody.appendChild(tr);
        });

        atualizarTotal();
    }

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

            inputNome.value = item.nome;
            inputQtde.value = item.qtde.toFixed(3);

            itens.splice(idx, 1);
            renderTabela();
        }
    });

    function atualizarTotal() {
        const total = itens.reduce((acc, i) => acc + i.subtotal, 0);
        spanTotal.textContent = `R$${total.toFixed(2)}`;
        spanDesconto.textContent = `R$0.00`;
    }

    function limparCampos() {
        inputNome.value = "";
        inputQtde.value = "";
    }
});
