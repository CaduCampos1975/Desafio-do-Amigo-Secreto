let amigos = [];
const campoNome = document.getElementById("Amigo");
const botaoAdicionar = document.getElementById(".button-add");
const botaoSortear = document.getElementById("sortearAmigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultadoSorteio");

botaoAdicionar.addEventListener("click", () => { //aqui eu vou trabalhar o que acontece quando alguém clica no adicionar
    const nome = campoNome.value;

    if(nome) { //primeiro passo é verificar se o campo nome está vazio ou se a pessoa digitou algo
        if (amigos.includes(nome)) { //se ele digitou algo, eu quero saber se existe duplicidade de amigos. caso haja, ele informa.
            alert('Você já adicionou este amigo!'); // Mostra a mensagem de alerta
            campoNome.value = ""; // Limpa o campo
            return; // Interrompe a execução da função
          } //caso não haja duplicidade ele segue o processo e adiciona o nome a lista.
        amigos.push(nome);
        atualizarListaDeAmigos();
        campoNome.value = ""
    } else { //caso a pessoa adicione o botão sem digitar nada, ele exibe a mensagem.
        alert('Digite o nome do seu amigo, ou clique em sortear.');
    }

}

function atualizarListaDeAmigos()
