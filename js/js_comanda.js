const produtos = [
  { nome: 'Pão Francês',    cod: '0001', valor: 12.15, medida: 'KG', fornecedor: 'Panificadora Sul' },
  { nome: 'Cuca de Banana', cod: '0002', valor: 30.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Broa de Milho',  cod: '0003', valor: 5.00,  medida: 'UN', fornecedor: 'Milharal Ltda' },
  { nome: 'Pão de Queijo',  cod: '0004', valor: 18.00, medida: 'KG', fornecedor: 'Queijos Minas' },
  { nome: 'Rosquinha',      cod: '0005', valor: 10.00, medida: 'KG', fornecedor: 'Delícias Caseiras' },
  { nome: 'Bolo de Cenoura',cod: '0006', valor: 25.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Pão Integral',   cod: '0007', valor: 14.00, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Sonho',          cod: '0008', valor: 8.50,  medida: 'UN', fornecedor: 'Doce Encanto' },
  { nome: 'Pão de Forma',   cod: '0009', valor: 7.00,  medida: 'UN', fornecedor: 'Fornos Brasil' },
  { nome: 'Pão de Batata',  cod: '0010', valor: 15.00, medida: 'KG', fornecedor: 'Panificadora Sul' },
  { nome: 'Croissant',      cod: '0011', valor: 20.00, medida: 'KG', fornecedor: 'Delícias Francesas' },
  { nome: 'Brioche',        cod: '0012', valor: 22.00, medida: 'KG', fornecedor: 'Delícias Francesas' },
  { nome: 'Pão Doce',       cod: '0013', valor: 9.00,  medida: 'UN', fornecedor: 'Padaria Central' },
  { nome: 'Baguete',        cod: '0014', valor: 13.50, medida: 'KG', fornecedor: 'Padaria Central' },
  { nome: 'Bolo de Fubá',   cod: '0015', valor: 24.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Pão de Centeio', cod: '0016', valor: 16.00, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Enroladinho',    cod: '0017', valor: 5.50,  medida: 'UN', fornecedor: 'Delícias Caseiras' },
  { nome: 'Biscoito de Polvilho', cod: '0018', valor: 4.00, medida: 'UN', fornecedor: 'Queijos Minas' },
  { nome: 'Torta de Limão', cod: '0019', valor: 28.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Pão Australiano',cod: '0020', valor: 17.00, medida: 'KG', fornecedor: 'Panificadora Sul' },
  { nome: 'Pão de Alho',    cod: '0021', valor: 12.00, medida: 'UN', fornecedor: 'Fornos Brasil' },
  { nome: 'Empadão',        cod: '0022', valor: 35.00, medida: 'UN', fornecedor: 'Delícias Caseiras' },
  { nome: 'Pão Sírio',      cod: '0023', valor: 10.50, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Bolo de Chocolate', cod: '0024', valor: 27.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Quiche de Alho Poró', cod: '0025', valor: 32.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Torta de Frango', cod: '0026', valor: 29.00, medida: 'UN', fornecedor: 'Delícias Caseiras' },
  { nome: 'Bolo de Laranja', cod: '0027', valor: 23.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Pão de Leite',   cod: '0028', valor: 11.00, medida: 'KG', fornecedor: 'Panificadora Sul' },
  { nome: 'Pão Recheado',   cod: '0029', valor: 19.00, medida: 'KG', fornecedor: 'Fornos Brasil' },
  { nome: 'Focaccia',       cod: '0030', valor: 20.00, medida: 'KG', fornecedor: 'Delícias Francesas' },
  { nome: 'Bolo Mesclado',  cod: '0031', valor: 26.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Pão Rústico',    cod: '0032', valor: 18.50, medida: 'KG', fornecedor: 'Padaria Central' },
  { nome: 'Cookie',         cod: '0033', valor: 6.50,  medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Brownie',        cod: '0034', valor: 7.50,  medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Muffin',         cod: '0035', valor: 8.00,  medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Torta Holandesa',cod: '0036', valor: 30.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Mini Pão Francês',cod: '0037', valor: 6.00, medida: 'KG', fornecedor: 'Panificadora Sul' },
  { nome: 'Pão com Calabresa', cod: '0038', valor: 21.00, medida: 'KG', fornecedor: 'Fornos Brasil' },
  { nome: 'Pão de Abóbora', cod: '0039', valor: 13.00, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Bolo de Coco',   cod: '0040', valor: 25.50, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Biscoito Amanteigado', cod: '0041', valor: 9.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Esfiha de Carne', cod: '0042', valor: 5.00, medida: 'UN', fornecedor: 'Delícias Caseiras' },
  { nome: 'Pizza Broto',    cod: '0043', valor: 18.00, medida: 'UN', fornecedor: 'Fornos Brasil' },
  { nome: 'Torta de Maçã',  cod: '0044', valor: 28.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Pão de Azeitona',cod: '0045', valor: 16.50, medida: 'KG', fornecedor: 'Padaria Central' },
  { nome: 'Bolo Red Velvet',cod: '0046', valor: 35.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Bolo de Amendoim',cod: '0047', valor: 27.50, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Croissant de Chocolate', cod: '0048', valor: 22.00, medida: 'KG', fornecedor: 'Delícias Francesas' },
  { nome: 'Torta de Morango', cod: '0049', valor: 31.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Pão de Ervas',   cod: '0050', valor: 15.00, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Rosca Doce',     cod: '0051', valor: 11.50, medida: 'KG', fornecedor: 'Padaria Central' },
  { nome: 'Torrada Temperada', cod: '0052', valor: 9.50, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Bolo Formigueiro', cod: '0053', valor: 24.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Bolo Inglês',    cod: '0054', valor: 25.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Biscoito Integral', cod: '0055', valor: 8.00, medida: 'UN', fornecedor: 'Vida Leve' },
  { nome: 'Pão Multigrãos', cod: '0056', valor: 17.00, medida: 'KG', fornecedor: 'Vida Leve' },
  { nome: 'Bolo de Maracujá', cod: '0057', valor: 26.00, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Bolo de Limão',  cod: '0058', valor: 23.50, medida: 'UN', fornecedor: 'Bolos da Vó' },
  { nome: 'Cuca de Uva',    cod: '0059', valor: 30.00, medida: 'UN', fornecedor: 'Doces da Serra' },
  { nome: 'Biscoito de Gengibre', cod: '0060', valor: 7.50, medida: 'UN', fornecedor: 'Doces da Serra' }
]; 


// Lista de produtos já existe no seu arquivo como "produtos"
let listaComandas = JSON.parse(localStorage.getItem("comandas")) || [];
let itensAtuais = [];

document.querySelector(".botaoADD").addEventListener("click", () => {
  const entrada = document.getElementById("produto").value.trim().toLowerCase();
  const qtde = parseFloat(document.getElementById("qtde").value);
  const medidaInput = document.getElementById("med").value.trim();

  if (!entrada || isNaN(qtde) || qtde <= 0) {
    alert("Preencha os campos corretamente.");
    return;
  }

  // Tentar encontrar por nome ou código
  const produto = produtos.find(p =>
  p.nome.toLowerCase().includes(entrada) || p.cod.includes(entrada)
);


  if (!produto) {
    alert("Produto não encontrado.");
    return;
  }

  const medida = medidaInput || produto.medida;
  const total = (produto.valor * qtde).toFixed(2);

  const item = {
    nome: produto.nome,
    cod: produto.cod,
    qtde,
    medida,
    valorUnitario: produto.valor,
    total
  };

  itensAtuais.push(item);
  atualizarTabela();
  limparCampos();
});

function atualizarTabela() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  let totalGeral = 0;

  itensAtuais.forEach((item, index) => {
    totalGeral += parseFloat(item.total);
    const linha = `
      <tr>
        <td>${item.nome}</td>
        <td>${item.cod}</td>
        <td>${item.qtde}</td>
        <td>R$${item.valorUnitario.toFixed(2)}</td>
        <td>${item.medida}</td>
        <td>R$0,00</td>
        <td>R$${parseFloat(item.total).toFixed(2)}</td>
        <td><button onclick="removerItem(${index})">🗑️</button></td>
      </tr>
    `;
    tbody.innerHTML += linha;
  });

  document.getElementById("total-geral").textContent = `R$${totalGeral.toFixed(2)}`;
}

function removerItem(index) {
  itensAtuais.splice(index, 1);
  atualizarTabela();
}

function limparCampos() {
  document.getElementById("produto").value = "";
  document.getElementById("qtde").value = "";
  document.getElementById("med").value = "";
}

document.getElementById("btnGerarComanda").addEventListener("click", () => {
  if (itensAtuais.length === 0) {
    alert("Adicione itens à comanda primeiro.");
    return;
  }

  const novaComanda = {
    id: Date.now(),
    data: new Date().toLocaleString(),
    itens: itensAtuais,
    total: itensAtuais.reduce((acc, item) => acc + parseFloat(item.total), 0).toFixed(2)
  };

  listaComandas.push(novaComanda);
  localStorage.setItem("comandas", JSON.stringify(listaComandas));
  alert("Comanda gerada com sucesso!");

  itensAtuais = [];
  atualizarTabela();
});

