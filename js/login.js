function verificarLogin() {

    // Obtém os valores dos campos de entrada
    // e verifica se estão vazios

    const nomeFuncionario = document.getElementById("nome_funcionario").value;
    const senhaFuncionario = document.getElementById("senha_funcionario").value;
    
    // Verifica se os campos estão vazios

    if (senhaFuncionario == "") {
        alert("Preencha todos os campos.");
        document.getElementById("senha_funcionario").focus();
        return;
    }
    // Verifica se o nome do funcionário está vazio
    else if (nomeFuncionario  == "") {
        alert("Preencha todos os campos.");
        document.getElementById("nome_funcionario").focus();
        return;
    }
    // Redireciona para a página 'home.html' se os campos não estiverem vazios
    else{
        // Redireciona para a página 'home.html'
        window.location.href = "home.html";
    }
}