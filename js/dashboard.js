const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
if (usuarioLogado) {
    document.getElementById('nomeUsuarioFooter').textContent = usuarioLogado.nome;
}

// Gráfico de Vendas por Período
const ctxVendasPorPeriodo = document.getElementById('vendasPorPeriodo').getContext('2d');
new Chart(ctxVendasPorPeriodo, {
    type: 'line',
    data: {
        labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5'],
        datasets: [{
            label: 'Vendas (R$)',
            data: [200, 300, 250, 400, 350],
            borderColor: '#4a9a2e',
            fill: false
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Evolução das Vendas por Período'
            }
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Dias'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Valor em R$'
                },
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Produtos Mais Vendidos
const ctxProdutosMaisVendidos = document.getElementById('produtosMaisVendidos').getContext('2d');
new Chart(ctxProdutosMaisVendidos, {
    type: 'bar',
    data: {
        labels: ['Pão Francês', 'Bolo de Chocolate', 'Croissant', 'Torta de Limão', 'Pão de Queijo'],
        datasets: [{
            label: 'Quantidade Vendida',
            data: [120, 80, 60, 50, 40],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Top 10 Produtos Mais Vendidos'
            }
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Produtos'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Quantidade'
                },
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Ticket Médio
const ctxTicketMedio = document.getElementById('ticketMedio').getContext('2d');
new Chart(ctxTicketMedio, {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Ticket Médio (R$)',
            data: [50, 55, 60, 65],
            borderColor: '#ff6384',
            fill: false
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Valor Médio Gasto por Cliente'
            }
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Semanas'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Valor em R$'
                },
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Comparativo de Vendas
const ctxComparativoVendas = document.getElementById('comparativoVendas').getContext('2d');
new Chart(ctxComparativoVendas, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro'],
        datasets: [{
            label: 'Vendas (R$)',
            data: [5000, 4500],
            backgroundColor: ['#36a2eb', '#ff6384']
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Comparativo de Vendas Mensais'
            }
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Valor em R$'
                },
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Margem de Lucro por Produto
const ctxMargemLucroPorProduto = document.getElementById('margemLucroPorProduto').getContext('2d');
new Chart(ctxMargemLucroPorProduto, {
    type: 'pie',
    data: {
        labels: ['Pão Francês', 'Bolo de Chocolate', 'Croissant', 'Torta de Limão', 'Pão de Queijo'],
        datasets: [{
            label: 'Margem de Lucro (%)',
            data: [30, 25, 20, 15, 10],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Margem de Lucro por Produto'
            }
        },
        responsive: true
    }
});
// 1. Vendas do Dia (por hora)
const vendasPorHora = [10, 15, 20, 25, 30, 40, 50, 60, 40, 20, 10, 0]; // 12h de operação
const totalVendasHoje = vendasPorHora.reduce((a, b) => a + b, 0);
document.getElementById('totalVendasHoje').textContent = `R$ ${totalVendasHoje.toFixed(2)}`;
const ctxVendasHora = document.getElementById('vendasPorHora').getContext('2d');
new Chart(ctxVendasHora, {
    type: 'bar',
    data: {
        labels: ['06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
        datasets: [{
            label: 'Itens vendidos',
            data: vendasPorHora,
            backgroundColor: '#f3a853'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vendas por Hora'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

// 2. Comandas Abertas/Encerradas
const comandasAbertas = 3;
const comandasEncerradas = 54;
document.getElementById('comandasAbertas').textContent = comandasAbertas;
document.getElementById('comandasEncerradas').textContent = comandasEncerradas;

// 3. Movimentação por Faixa de Horário (linha)
const ctxMovHorario = document.getElementById('movimentacaoHorario').getContext('2d');
new Chart(ctxMovHorario, {
    type: 'line',
    data: {
        labels: ['06h-08h', '08h-10h', '10h-12h', '12h-14h', '14h-16h', '16h-18h'],
        datasets: [{
            label: 'Vendas',
            data: [30, 60, 90, 110, 60, 20],
            borderColor: '#4a9a2e',
            backgroundColor: 'rgba(74,154,46,0.1)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Movimentação por Faixa de Horário'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

// 4. Status dos PDVs
const pdvs = [
    { nome: '0-00001', status: 'Ativo', ultima: '17:05' },
    { nome: '0-00002', status: 'Ativo', ultima: '17:03' },
    { nome: '0-00003', status: 'Inativo', ultima: '16:40' }
];
const statusPdvsUl = document.getElementById('statusPdvs');
pdvs.forEach(pdv => {
    const li = document.createElement('li');
    li.classList.add('item-status');
    li.innerHTML = `<span style="font-weight:bold;">${pdv.nome}:</span> 
        <span style="color:${pdv.status === 'Ativo' ? '#4a9a2e' : '#fc5050'}">${pdv.status}</span>
        <span style="font-size:0.9em; color:#888;">(Última atividade: ${pdv.ultima})</span>`;
    statusPdvsUl.appendChild(li);
});

// 5. Itens em Baixa (Alerta Simples em lista)
const itensBaixo = [
    { nome: 'Farinha' },
    { nome: 'Ovos' },
    { nome: 'Fermento' }
];
const alertaEstoque = document.getElementById('alertaEstoqueBaixo');
alertaEstoque.innerHTML = '';
if (itensBaixo.length > 0) {
    itensBaixo.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('item-status');
        li.textContent = `${item.nome} com estoque baixo`;
        alertaEstoque.appendChild(li);
    });
} else {
    const li = document.createElement('li');
    li.classList.add('item-status');
    li.textContent = 'Nenhum item com estoque baixo.';
    alertaEstoque.appendChild(li);
}
