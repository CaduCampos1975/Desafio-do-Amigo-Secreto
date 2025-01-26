// Lista para armazenar os amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim(); // Remove espaços em branco antes e depois

    // Validação: Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    // Validação: Verifica se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado à lista.");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista exibida na página
    atualizarLista();

    // Limpa o campo de input após adicionar
    amigoInput.value = "";

    // Coloca o cursor no campo de texto novamente para facilitar a digitação
    amigoInput.focus();
}

// Função para verificar o Enter e chamar a função adicionarAmigo()
function verificarEnter(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
}

// Adiciona o evento para pressionar Enter
document.getElementById('amigo').addEventListener('keydown', verificarEnter);

// Função para atualizar a lista exibida
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual antes de adicionar os novos itens

    // Adiciona cada amigo à lista
    amigos.forEach(amigo => {
        const listaAdicionando = document.createElement('li');
        listaAdicionando.textContent = amigo;
        listaAmigos.appendChild(listaAdicionando);
    });
}

// Função para realizar o sorteio de amigo secreto
function sortearAmigo() {
    // Validação: Verifica se existem amigos na lista
    if (amigos.length === 0) {
        alert("Não existem amigos adicionados. Adicione ao menos dois nomes na lista.");
        return;
    }

    // Validação: Verifica se há apenas um amigo na lista
    if (amigos.length === 1) {
        alert("Insira ao menos mais um nome na lista. Não posso realizar o sorteio com apenas um nome.");
        return;
    }

    // Sorteio aleatório de um amigo
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo sorteado é: ${sorteado}`;
}