// Carregar o menu a partir de um arquivo HTML
// e inserir no elemento com id "menu"

fetch('menu.html')
    .then(res => res.text())
    .then(html => {
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.innerHTML = html;
        } else {
            console.warn('Elemento com id "menu" não encontrado.');
        }
    })
    .catch(err => console.warn('Erro ao carregar menu:', err));