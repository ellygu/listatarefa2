function adicionarTarefa() {
   let mensagemSucesso = "Tarefa adicionada com sucesso!";

   let inputTarefa = document.getElementById("inputTarefa");
   let tarefa = inputTarefa.value;
    document.getElementById("mensagem").textContent = mensagemSucesso;

    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    
    //msg de tarefa adicionada com sucesso
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
    
    //limpa o input do usuario
    inputTarefa.value = "";

    let mensagemErro = "Por favor, insira uma tarefa.";
}
