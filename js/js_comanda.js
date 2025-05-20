// ===== js/js_comanda.js =====
/**
 * js_comanda.js
 *
 * CRUD de itens de comanda + geração de comanda (salva em localStorage)
 * Produtos embutidos em array JS (normalização de nomes)
 */

const STORAGE_COMANDAS = 'comandasSalvas';

// Lista de produtos padrão (até 60 itens)
const produtos = [
  { nome: 'Pão Francês',    cod: '0001', valor: 12.15, medida: 'KG', desconto: 0.20 },
  { nome: 'Cuca de Banana',  cod: '0002', valor: 30.00, medida: 'UN', desconto: 0.20 },
  { nome: 'Broa de Milho',   cod: '0003', valor: 5.00,  medida: 'UN', desconto: 0.10 },
  { nome: 'Pão de Queijo',   cod: '0004', valor: 18.00, medida: 'KG', desconto: 0.00 },
  { nome: 'Rosquinha',       cod: '0005', valor: 10.00, medida: 'KG', desconto: 0.15 },
  { nome: 'Bolo de Cenoura', cod: '0006', valor: 25.00, medida: 'UN', desconto: 0.10 },
  { nome: 'Pão Integral',    cod: '0007', valor: 14.00, medida: 'KG', desconto: 0.20 },
  { nome: 'Sonho',           cod: '0008', valor: 8.50,  medida: 'UN', desconto: 0.10 },
  { nome: 'Pão de Forma',    cod: '0009', valor: 7.00,  medida: 'UN', desconto: 0.05 },
  { nome: 'Pão de Batata',   cod: '0010', valor: 15.00, medida: 'KG', desconto: 0.00 },
  // ... complete até 60 produtos seguindo este padrão
];

// Normalize nomes para facilitar busca (remove acentos)
produtos.forEach(p => {
  p.nomeNorm = p.nome
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
  p.codNorm = p.cod.toLowerCase();
});

// Comandas salvas no localStorage
let comandas = JSON.parse(localStorage.getItem(STORAGE_COMANDAS)) || [];

window.addEventListener('DOMContentLoaded', () => {
  const inputProduto = document.getElementById('produto');
  const inputQtde    = document.getElementById('qtde');
  const inputMed     = document.getElementById('med');
  const btnMinus     = document.querySelector('.botaoME');
  const btnPlus      = document.querySelector('.botaoMA');
  const btnAdd       = document.querySelector('.botaoADD');
  const btnGerar     = document.getElementById('btnGerarComanda');
  const tbody        = document.querySelector('table tbody');
  const totalEl      = document.getElementById('total-geral');

  function atualizarTotal() {
    const soma = Array.from(tbody.children)
      .reduce((acc, tr) => acc + parseFloat(tr.dataset.subtotal || 0), 0);
    totalEl.textContent = `R$${soma.toFixed(2).replace('.', ',')}`;
  }

  btnMinus.addEventListener('click', () => {
    let v = parseFloat(inputQtde.value) || 0;
    if (v > 0) inputQtde.value = (v - 1).toString();
  });
  btnPlus.addEventListener('click', () => {
    let v = parseFloat(inputQtde.value) || 0;
    inputQtde.value = (v + 1).toString();
  });

  function criarLinha(prod, qtde, med) {
    const subtotal = prod.valor * qtde - prod.desconto;
    const tr = document.createElement('tr');
    tr.dataset.subtotal = subtotal.toFixed(2);
    tr.innerHTML = `
      <td>${prod.nome}</td>
      <td>${prod.cod}</td>
      <td>${qtde.toLocaleString('pt-BR')}</td>
      <td>${prod.valor.toFixed(2).replace('.', ',')}</td>
      <td>${med || prod.medida}</td>
      <td>${prod.desconto.toFixed(2).replace('.', ',')}</td>
      <td>R$${subtotal.toFixed(2).replace('.', ',')}</td>
      <td>
        <button class="editar">✏️</button>
        <button class="excluir">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
    atualizarTotal();
  }

  btnAdd.addEventListener('click', () => {
    let termo = inputProduto.value.trim();
    termo = termo
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();
    const qtde = parseFloat(inputQtde.value.replace(',', '.'));
    const med  = inputMed.value.trim().toUpperCase();

    if (!termo || isNaN(qtde) || qtde <= 0) {
      return alert('Informe produto válido e quantidade maior que zero!');
    }

    // Permitir busca por parte do código ou completo
    const prod = produtos.find(p =>
      p.nomeNorm.includes(termo) || p.codNorm.includes(termo)
    );
    if (!prod) {
      return alert('Produto não encontrado!');
    }

    criarLinha(prod, qtde, med);
    inputProduto.value = '';
    inputQtde.value    = '';
    inputMed.value     = '';
  });

  tbody.addEventListener('click', e => {
    const tr = e.target.closest('tr'); if (!tr) return;
    if (e.target.classList.contains('excluir')) {
      tr.remove(); atualizarTotal(); return;
    }
    if (e.target.classList.contains('editar')) {
      const [tdNome, tdCod, tdQtde, , tdMed] = tr.querySelectorAll('td');
      inputProduto.value = tdNome.textContent;
      inputQtde.value    = tdQtde.textContent.replace(',', '.');
      inputMed.value     = tdMed.textContent;
      tr.remove(); atualizarTotal();
    }
  });

  btnGerar.addEventListener('click', () => {
    const itens = Array.from(tbody.children).map(tr => {
      const [tn, tc, tq, tv, tm, td] = tr.querySelectorAll('td');
      return {
        nome:      tn.textContent,
        cod:       tc.textContent,
        qtde:      parseFloat(tq.textContent.replace(',', '.')),
        valorUni:  parseFloat(tv.textContent.replace(',', '.')),
        medida:    tm.textContent,
        desconto:  parseFloat(td.textContent.replace(',', '.')),
        total:     parseFloat(tr.dataset.subtotal)
      };
    });
    if (itens.length === 0) return alert('Adicione ao menos um item!');
    const comanda = {
      id:    Date.now(),
      data:  new Date().toISOString(),
      itens,
      total: itens.reduce((sum, i) => sum + i.total, 0)
    };
    comandas.push(comanda);
    localStorage.setItem(STORAGE_COMANDAS, JSON.stringify(comandas));
    tbody.innerHTML = '';
    atualizarTotal();
    alert('Comanda gerada e salva!');
  });

  atualizarTotal();
});
