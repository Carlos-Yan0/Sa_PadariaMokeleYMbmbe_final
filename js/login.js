function verificarLogin() {


    const nomeFuncionario = document.getElementById("nome_funcionario").value;
    const senhaFuncionario = document.getElementById("senha_funcionario").value;
    

    if (senhaFuncionario == "" || nomeFuncionario == "") {
        mensagemErro.style.display = "block";
        return;
    }
    else{
        window.location.href = "home.html";
    }
}