// Carregar o menu a partir de um arquivo HTML
// e inserir no elemento com id "menu"

fetch('menu.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('menu').innerHTML = html;
    })
    .catch(err => console.warn('Erro ao carregar menu:', err));