let estoque = [
    { id: 1, nome: 'Farinha de Trigo', tipo: 'Matéria-prima', unidade: 'Kg', valorUnitario: 4.50, quantidade: 25 },
    { id: 2, nome: 'Açúcar', tipo: 'Matéria-prima', unidade: 'Kg', valorUnitario: 3.20, quantidade: 12 },
    { id: 3, nome: 'Manteiga', tipo: 'Matéria-prima', unidade: 'Kg', valorUnitario: 6.70, quantidade: 8 },
    { id: 4, nome: 'Ovo', tipo: 'Matéria-prima', unidade: 'L', valorUnitario: 1.50, quantidade: 20 }
  ];
  
  const LIMITE_BAIXA = 15;
  
  const tabelaEstoque = document.getElementById('tabelaEstoque').getElementsByTagName('tbody')[0];
  
  function renderEstoque() {
    tabelaEstoque.innerHTML = '';
    estoque.forEach(produto => {
      const tr = document.createElement('tr');
  
      const valorInventario = (produto.valorUnitario * produto.quantidade).toFixed(2);
      const status = produto.quantidade < LIMITE_BAIXA ? '<span style="color:red;">Baixo</span>' : '✅OK';
  
      tr.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.tipo}</td>
        <td>${produto.unidade}</td>
        <td>R$ ${produto.valorUnitario.toFixed(2)}</td>
        <td>${produto.quantidade}</td>
        <td>R$ ${valorInventario}</td>
        <td>${status}</td>
        <td>
        <button onclick="editarProduto(${produto.id})" class="edit-btn">
      <i class="material-symbols-outlined">edit</i>
      </button>
        <button onclick="editarProduto(${produto.id})" class="delete-btn">
      <i class="material-symbols-outlined">delete</i>
        </button>
  </td>
  
      `;
      tabelaEstoque.appendChild(tr);
    });
  }
  renderEstoque();
  