// Dados de exemplo para o histórico de vendas
let vendas = [
  { data: "12/04/25 - 14:56", cod: "VEN-20250412-0001", nome: "Josias M. Junco", metodo: "Cartão", qtd: 8, subtotal: 45.99 },
  { data: "12/04/25 - 15:02", cod: "VEN-20250412-0002", nome: "Josias M. Junco", metodo: "Pix", qtd: 12, subtotal: 12.89 },
  { data: "12/04/25 - 15:07", cod: "VEN-20250412-0003", nome: "Josias M. Junco", metodo: "Cartão", qtd: 6, subtotal: 10.79 },
  { data: "12/04/25 - 15:12", cod: "VEN-20250412-0004", nome: "Josias M. Junco", metodo: "Pix", qtd: 2, subtotal: 17.99 }
];

// Função para renderizar a tabela de vendas
function renderVendas(vendasFiltradas) {
  const tbody = document.getElementById("tabelaVendasBody");
  tbody.innerHTML = ""; // Limpa o conteúdo atual

  vendasFiltradas.forEach(venda => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
          <td>${venda.data}</td>
          <td>${venda.cod}</td>
          <td>${venda.nome}</td>
          <td>${venda.metodo}</td>
          <td>${venda.qtd}</td>
          <td>${venda.subtotal.toFixed(2).replace('.', ',')}</td>
          <td><span class="material-symbols-outlined">open_in_full</span></td>
      `;
      tbody.appendChild(tr);
  });
}

// Função para filtrar as vendas com base nos inputs
function filtrarVendas() {
  const dataFilter = document.getElementById("data-form").value;
  const nomeFilter = document.getElementById("nome-form").value.toLowerCase();
  const metodoFilter = document.getElementById("metodo-pagamento-form").value.toLowerCase();
  const idFilter = document.getElementById("id-form").value;

  const vendasFiltradas = vendas.filter(venda => {
      const matchesData = dataFilter ? venda.data.includes(dataFilter) : true;
      const matchesNome = venda.nome.toLowerCase().includes(nomeFilter);
      const matchesMetodo = venda.metodo.toLowerCase().includes(metodoFilter);
      const matchesId = idFilter ? venda.cod.includes(idFilter) : true;

      return matchesData && matchesNome && matchesMetodo && matchesId;
  });

  renderVendas(vendasFiltradas);
}

// Função para exportar a tabela de vendas para CSV
function exportarCSV() {
  const csvRows = [];
  const headers = ['Data', 'Código', 'Nome', 'Método', 'Quantidade', 'Subtotal'];
  csvRows.push(headers.join(','));

  vendas.forEach(venda => {
      const row = [
          venda.data,
          venda.cod,
          venda.nome,
          venda.metodo,
          venda.qtd,
          venda.subtotal.toFixed(2).replace('.', ',')
      ];
      csvRows.push(row.join(','));
  });

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'historico_vendas.csv');
  link.click();
}

// Função para inicializar os eventos e renderizar as vendas
function inicializar() {
  renderVendas(vendas); // Renderiza a tabela com as vendas iniciais

  // Evento do botão de filtrar
  document.getElementById("filtrar").addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio do formulário
      filtrarVendas(); // Chama a função para filtrar as vendas
  });

  // Evento do botão de exportar
  document.getElementById("exportar").addEventListener("click", exportarCSV);
}

// Chama a função de inicialização quando a página carregar
document.addEventListener("DOMContentLoaded", inicializar);
