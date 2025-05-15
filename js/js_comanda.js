// comanda.js
document.addEventListener('DOMContentLoaded', () => {
    // 🗃️ Mock de produtos
    const produtosDB = [
      { nome: 'Pão Francês', cod: '0012', valor: 12.15, medida: 'KG', desconto: 0.20 },
      { nome: 'Cuca de Banana', cod: '0013', valor: 30.00, medida: 'UN', desconto: 0.20 },
      // Adicione outros conforme necessário...
    ];
  
    // 📌 Elementos do DOM
    const inputProduto = document.getElementById('produto');
    const inputQtde    = document.getElementById('qtde');
    const inputMed     = document.getElementById('med');
    const btnMinus     = document.querySelector('.botaoME');
    const btnPlus      = document.querySelector('.botaoMA');
    const btnAdd       = document.querySelector('.botaoADD');
    const tabelaBody   = document.querySelector('table tbody');
  
    // Cria área de total se não existir
    let totalEl = document.getElementById('total-geral');
    if (!totalEl) {
      const rodape = document.createElement('div');
      rodape.style.textAlign = 'right';
      rodape.style.marginTop = '1rem';
      rodape.innerHTML = `<strong>Total: </strong><span id="total-geral">R$0,00</span>`;
      tabelaBody.parentElement.appendChild(rodape);
      totalEl = document.getElementById('total-geral');
    }
  
    // ▶️ Atualiza total geral
    function atualizarTotal() {
      let soma = 0;
      tabelaBody.querySelectorAll('tr').forEach(tr => {
        soma += parseFloat(tr.dataset.subtotal);
      });
      totalEl.textContent = `R$${soma.toFixed(2).replace('.', ',')}`;
    }
  
    // ➖ e ➕ controles
    btnMinus.addEventListener('click', () => {
      let v = parseFloat(inputQtde.value) || 0;
      if (v > 0) inputQtde.value = (v - 1).toString();
    });
    btnPlus.addEventListener('click', () => {
      let v = parseFloat(inputQtde.value) || 0;
      inputQtde.value = (v + 1).toString();
    });
  
    // ➕ Adicionar produto
    btnAdd.addEventListener('click', () => {
      const termo = inputProduto.value.trim().toLowerCase();
      const qtde  = parseFloat(inputQtde.value);
      const med   = inputMed.value.trim().toUpperCase();
  
      if (!termo || isNaN(qtde) || qtde <= 0) {
        return alert('Informe produto válido e quantidade maior que zero! 🚨');
      }
  
      const prod = produtosDB.find(p =>
        p.nome.toLowerCase().includes(termo) || p.cod === termo
      );
      if (!prod) {
        return alert('Produto não encontrado! 🚨');
      }
  
      const subtotal = (prod.valor * qtde - prod.desconto).toFixed(2);
      const tr = document.createElement('tr');
      tr.dataset.subtotal = subtotal;
      tr.innerHTML = `
        <td>${prod.nome}</td>
        <td>${prod.cod}</td>
        <td>${qtde.toLocaleString('pt-BR')}</td>
        <td>${prod.valor.toFixed(2).replace('.', ',')}</td>
        <td>${med || prod.medida}</td>
        <td>${prod.desconto.toFixed(2).replace('.', ',')}</td>
        <td>R$${subtotal.replace('.', ',')}</td>
        <td>
          <button class="btn-acao editar"><span class="material-symbols-outlined">edit</span></button>
          <button class="btn-acao excluir"><span class="material-symbols-outlined">delete</span></button>
        </td>`;
      tabelaBody.appendChild(tr);
  
      atualizarTotal();
      inputProduto.value = '';
      inputQtde.value    = '';
      inputMed.value     = '';
    });
  
    // ✏️🗑️ Editar & Excluir via delegation
    tabelaBody.addEventListener('click', e => {
      const tr = e.target.closest('tr');
      if (!tr) return;
  
      if (e.target.closest('.excluir')) {
        tr.remove();
        atualizarTotal();
      }
      else if (e.target.closest('.editar')) {
        const tds = tr.querySelectorAll('td');
        inputProduto.value = tds[0].textContent;
        inputQtde.value    = tds[2].textContent.replace(',', '.');
        inputMed.value     = tds[4].textContent;
        tr.remove();
        atualizarTotal();
      }
    });
  });
  