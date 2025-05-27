let linhaEditando = null;
//---❗❗❗ADICIONAR PRODUTOS QUE TEM NO BANCO DE DADOS❗❗❗---//
//---❗❗❗ADICIONAR PRODUTOS QUE TEM NO BANCO DE DADOS❗❗❗---//
const produtosPadaria = [
  { id: 1, nome: "Pão Francês", valor_uni: 15.90, medida: "Kg" },
  { id: 2, nome: "Pão de Queijo", valor_uni: 1.50, medida: "Un" },
  { id: 3, nome: "Sonho de Creme", valor_uni: 5.00, medida: "Un" },
  { id: 4, nome: "Croissant de Chocolate", valor_uni: 6.50, medida: "Un" },
  { id: 5, nome: "Bolo de Cenoura", valor_uni: 25.00, medida: "Kg" },
  { id: 6, nome: "Baguete Italiana", valor_uni: 8.00, medida: "Un" },
  { id: 7, nome: "Rosquinha de Coco", valor_uni: 3.00, medida: "Un" },
  { id: 8, nome: "Pão de Forma Integral", valor_uni: 12.00, medida: "Un" },
  { id: 9, nome: "Pastel de Carne", valor_uni: 7.00, medida: "Un" },
  { id: 10, nome: "Torta de Frango", valor_uni: 30.00, medida: "Kg" },
  { id: 11, nome: "Coxinha de Frango", valor_uni: 6.00, medida: "Un" },
  { id: 12, nome: "Esfirra de Carne", valor_uni: 5.50, medida: "Un" },
  { id: 13, nome: "Empada de Frango", valor_uni: 6.00, medida: "Un" },
  { id: 14, nome: "Quiche de Alho Poró", valor_uni: 7.50, medida: "Un" },
  { id: 15, nome: "Pão Doce", valor_uni: 3.50, medida: "Un" },
  { id: 16, nome: "Pão de Milho", valor_uni: 10.00, medida: "Kg" },
  { id: 17, nome: "Pão de Batata", valor_uni: 2.50, medida: "Un" },
  { id: 18, nome: "Croissant de Presunto e Queijo", valor_uni: 7.00, medida: "Un" },
  { id: 19, nome: "Bolo de Chocolate", valor_uni: 28.00, medida: "Kg" },
  { id: 20, nome: "Bolo Red Velvet", valor_uni: 35.00, medida: "Kg" },
  { id: 21, nome: "Bolo de Fubá", valor_uni: 20.00, medida: "Kg" },
  { id: 22, nome: "Bolo de Laranja", valor_uni: 22.00, medida: "Kg" },
  { id: 23, nome: "Torta de Limão", valor_uni: 32.00, medida: "Kg" },
  { id: 24, nome: "Torta de Morango", valor_uni: 38.00, medida: "Kg" },
  { id: 25, nome: "Pudim de Leite", valor_uni: 30.00, medida: "Kg" },
  { id: 26, nome: "Brigadeiro", valor_uni: 2.00, medida: "Un" },
  { id: 27, nome: "Beijinho", valor_uni: 2.00, medida: "Un" },
  { id: 28, nome: "Quindim", valor_uni: 3.50, medida: "Un" },
  { id: 29, nome: "Trufa de Chocolate", valor_uni: 4.00, medida: "Un" },
  { id: 30, nome: "Cheesecake", valor_uni: 40.00, medida: "Kg" },
  { id: 31, nome: "Refrigerante Lata 350ml", valor_uni: 5.00, medida: "Un" },
  { id: 32, nome: "Suco Natural de Laranja 300ml", valor_uni: 6.00, medida: "Un" },
  { id: 33, nome: "Suco de Uva 300ml", valor_uni: 6.00, medida: "Un" },
  { id: 34, nome: "Água Mineral 500ml", valor_uni: 3.00, medida: "Un" },
  { id: 35, nome: "Água com Gás 500ml", valor_uni: 3.50, medida: "Un" },
  { id: 36, nome: "Café Expresso 50ml", valor_uni: 4.00, medida: "Un" },
  { id: 37, nome: "Café com Leite 150ml", valor_uni: 5.00, medida: "Un" },
  { id: 38, nome: "Capuccino 200ml", valor_uni: 6.00, medida: "Un" },
  { id: 39, nome: "Chocolate Quente 200ml", valor_uni: 6.50, medida: "Un" },
  { id: 40, nome: "Chá Gelado 300ml", valor_uni: 5.00, medida: "Un" },
  { id: 41, nome: "Chá Quente 200ml", valor_uni: 4.00, medida: "Un" },
  { id: 42, nome: "Milkshake de Chocolate 400ml", valor_uni: 12.00, medida: "Un" },
  { id: 43, nome: "Milkshake de Morango 400ml", valor_uni: 12.00, medida: "Un" },
  { id: 44, nome: "Sorvete Pote 500ml", valor_uni: 18.00, medida: "Un" },
  { id: 45, nome: "Sorvete Pote 1L", valor_uni: 30.00, medida: "Un" },
  { id: 46, nome: "Panetone", valor_uni: 35.00, medida: "Un" },
  { id: 47, nome: "Chester Salgado", valor_uni: 45.00, medida: "Kg" },
  { id: 48, nome: "Pão de Alho", valor_uni: 4.00, medida: "Un" },
  { id: 49, nome: "Enroladinho de Salsicha", valor_uni: 5.00, medida: "Un" },
  { id: 50, nome: "Pizza Brotinho", valor_uni: 10.00, medida: "Un" },
  { id: 51, nome: "Pizza Grande", valor_uni: 45.00, medida: "Un" },
  { id: 52, nome: "Mini Bolo", valor_uni: 8.00, medida: "Un" },
  { id: 53, nome: "Bolo no Pote", valor_uni: 9.00, medida: "Un" },
  { id: 54, nome: "Torta Holandesa", valor_uni: 40.00, medida: "Kg" },
  { id: 55, nome: "Pão de Leite", valor_uni: 2.00, medida: "Un" },
  { id: 56, nome: "Rosca de Goiabada", valor_uni: 12.00, medida: "Un" },
  { id: 57, nome: "Rosca de Coco", valor_uni: 12.00, medida: "Un" },
  { id: 58, nome: "Pão Sírio", valor_uni: 10.00, medida: "Kg" },
  { id: 59, nome: "Brioche", valor_uni: 3.50, medida: "Un" },
  { id: 60, nome: "Croissant Simples", valor_uni: 6.00, medida: "Un" }
];


function buscarProduto(valor) {
    const busca = valor.trim().toLowerCase();
    console.log("Buscando por:", busca);
    return produtosPadaria.find(p => {
        console.log("Comparando com:", p.id.toString(), p.nome.toLowerCase());
        return p.id.toString() === busca || p.nome.toLowerCase() === busca;
    });
}
// Botões de mais e menos
const botaoMais = document.getElementById("btn-mais");
const botaoMenos = document.getElementById("btn-menos");

// Remove event listeners antigos para evitar múltiplos incrementos
botaoMais.onclick = () => {
    let v = parseFloat(qtde.value) || 0;
    qtde.value = (v + 1).toString();
};
botaoMenos.onclick = () => {
    let v = parseFloat(qtde.value) || 0;
    if (v > 0) qtde.value = (v - 1).toString();
};
function mostrarAlert(produto, qtde) {
    // Limpa mensagens de erro anteriores
    produto.setCustomValidity("");
    qtde.setCustomValidity("");

    const produtoValue = produto.value.trim();
    const qtdeValue = parseFloat(qtde.value) || 0;

    // Se #produto tiver 'C-' antes do id, buscar por comandas com esse id
    // Se não achar comanda com esse ID, retornar erro
    // Caso contrário, puxar item por item da comanda e preencher a tabela

    if (produtoValue.startsWith("C-")) {
        // Extrai o ID da comanda guardada em 'comandas' no armazenamento local (JSON)
        const idComanda = produtoValue;
        const comandas = JSON.parse(localStorage.getItem("comandas")) || [];
        const comanda = comandas.find(c => c.idComanda === idComanda);

        if (comanda) {
        console.log(`[INFO] Buscando comanda com ID '${idComanda}'...`);
            const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
            tabela.innerHTML = ""; // Limpa a tabela antes de preencher com os itens da comanda

            comanda.itens.forEach((item, index) => {
                const linha = tabela.insertRow(index);

                const celulaId = linha.insertCell(0);
                const celulaProduto = linha.insertCell(1);
                const celulaQtde = linha.insertCell(2);
                const celulaValorUni = linha.insertCell(3);
                const celulaMedida = linha.insertCell(4);
                const celulaSubtotal = linha.insertCell(5);
                const celulaAcoes = linha.insertCell(6);

                celulaId.innerText = index + 1;
                celulaProduto.innerText = item.nome;
                celulaQtde.innerText = item.qtde;
                celulaValorUni.innerText = `R$${parseFloat(item.valorUnitario).toFixed(2)}`;
                celulaMedida.innerText = item.medida;
                celulaSubtotal.innerText = `R$${parseFloat(item.total).toFixed(2)}`;
                celulaAcoes.innerHTML = `
                    <button type="button" class="btn-acao editar" onclick="prepararEdicao(this)">
                        <span class="material-symbols-outlined">Edit</span>
                    </button>
                    <button type="button" class="btn-acao excluir" onclick="excluirLinha(this)">
                        <span class="material-symbols-outlined">Delete</span>
                    </button>
                `;
            });

            atualizarTotal(); // Atualiza o total após preencher a tabela
        } else {
            alert(`[ERRO] Nenhuma comanda com ID '${idComanda}' encontrada! Por favor, verifique o ID da comanda.`);
        }
        return; // Retorna para evitar que o código abaixo seja executado
    }

    // Chama buscarProduto e mostra no console o resultado
    const resultadoBusca = buscarProduto(produtoValue);
    console.log("Resultado da busca:", resultadoBusca);
    
    // Se não encontrou o produto, mostra erro e retorna
    if (!resultadoBusca) {
        produto.setCustomValidity("Produto não encontrado!");
        produto.reportValidity();
        produto.focus();
        return;
    }

    // Validação dos campos
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

    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    // Define os valores a serem exibidos na tabela
    let nomeProduto = resultadoBusca.nome;
    let valorUni = `R$${resultadoBusca.valor_uni.toFixed(2)}`;
    let medida = resultadoBusca.medida;
    let subtotal = `R$${(resultadoBusca.valor_uni * qtdeValue).toFixed(2)}`;

    if (linhaEditando) {
        // Atualiza a linha existente
        linhaEditando.cells[0].innerText = resultadoBusca.id;
        linhaEditando.cells[1].innerText = nomeProduto;
        linhaEditando.cells[2].innerText = qtde.value;
        linhaEditando.cells[3].innerText = valorUni;
        linhaEditando.cells[4].innerText = medida;
        linhaEditando.cells[5].innerText = subtotal;
        linhaEditando = null;
        document.getElementById("botao-add").innerText = "Adicionar";
        atualizarTotal();
    } else {
        // Adiciona nova linha
        const numLinhas = tabela.rows.length;
        const linha = tabela.insertRow(numLinhas);

        const celulaId = linha.insertCell(0);
        const celulaProduto = linha.insertCell(1);
        const celulaQtde = linha.insertCell(2);
        const celulaValorUni = linha.insertCell(3);
        const celulaMedida = linha.insertCell(4);
        const celulaSubtotal = linha.insertCell(5);
        const celulaAcoes = linha.insertCell(6);

        celulaId.innerText = resultadoBusca.id;
        celulaProduto.innerText = nomeProduto;
        celulaQtde.innerText = qtde.value;
        celulaValorUni.innerText = valorUni;
        celulaMedida.innerText = medida;
        celulaSubtotal.innerText = subtotal;
        celulaAcoes.innerHTML = `
            <button type="button" class="btn-acao editar" onclick="prepararEdicao(this)">
                <span class="material-symbols-outlined">Edit</span>
            </button>
            <button type="button" class="btn-acao excluir" onclick="excluirLinha(this)">
                <span class="material-symbols-outlined">Delete</span>
            </button>
        `;
        atualizarTotal();
    }

    // Limpa os campos do formulário
    produto.value = "";
    qtde.value = "";
}


function prepararEdicao(botao) {
    // Acha a linha da tabela
    linhaEditando = botao.closest('tr');
    // Preenche os campos do formulário
    document.getElementById("produto").value = linhaEditando.cells[1].innerText;
    document.getElementById("qtde").value = linhaEditando.cells[2].innerText;
    // Altera o texto do botão
    document.getElementById("botao-add").innerText = "Salvar";
}

function excluirLinha(botao) {
    // O botão é o primeiro filho do <td>, então pegamos o parentNode duas vezes para acessar o <tr>
    const linha = botao.closest('tr');
    linha.remove();
    // Atualiza IDs das linhas
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    for (let i = 0; i < tabela.rows.length; i++) {
        tabela.rows[i].cells[0].innerText = i + 1;
    }
    atualizarTotal();
}

function atualizarDataHora() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = String(agora.getFullYear()).slice(2); // Pega só os dois últimos dígitos

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');

    const dataHoraFormatada = `Data: ${dia}/${mes}/${ano} - ${horas}:${minutos}`;

    document.querySelector('.data span').innerText = dataHoraFormatada;
}

function atualizarTotal() {
    const tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    let total = 0;
    for (let i = 0; i < tabela.rows.length; i++) {
        // Remove 'R$' e converte para número
        const valor = tabela.rows[i].cells[5].innerText.replace('R$', '').replace(',', '.');
        total += parseFloat(valor) || 0;
    }
    // Atualiza o valor total na tela
    document.querySelector('.valor-total').innerText = `R$${total.toFixed(2).replace('.', ',')}`;
}

// 🔥 Atualiza assim que carregar
atualizarDataHora();

// 🔁 Atualiza a cada 1 minuto pra manter certinho
setInterval(atualizarDataHora, 1000);