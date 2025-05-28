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

