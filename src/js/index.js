// Função para remover a classe "selecionado" de todos os elementos
function removerSelecionado() {
    // Seleciona todos os elementos que têm a classe "selecionado"
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    const nomeSelecionado = document.querySelector('.nome-personagem.selecionado');

    // Se algum desses elementos estiver selecionado, remove a classe "selecionado"
    if (botaoSelecionado) botaoSelecionado.classList.remove('selecionado');
    if (personagemSelecionado) personagemSelecionado.classList.remove('selecionado');
    if (nomeSelecionado) nomeSelecionado.classList.remove('selecionado');
}

// Função para adicionar a classe "selecionado" aos elementos clicados
function adicionarSelecionado(index) {
    // Seleciona os elementos correspondentes ao botão e personagem clicado
    const botoes = document.querySelectorAll('.botao');
    const personagens = document.querySelectorAll('.personagem');
    const nomesPersonagens = document.querySelectorAll('.nome-personagem');

    // Adiciona a classe "selecionado" ao botão, personagem e nome do personagem
    botoes[index].classList.add('selecionado');
    personagens[index].classList.add('selecionado');
    nomesPersonagens[index].classList.add('selecionado');

    // Adiciona a classe de cor ao nome do personagem
    const coresPersonagens = [
        'cybermundo',
        'cybernaruto',
        'cybersasuke',
        'cyberkakashi',
        'cybersakura',
        'cyberhinata'
    ];
    nomesPersonagens[index].classList.add(coresPersonagens[index]);
}

// Função principal que lida com os cliques nos botões
function configurarBotoes() {
    const botoes = document.querySelectorAll('.botao');

    // Para cada botão, adiciona um ouvinte de evento para o clique
    botoes.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            removerSelecionado(); // Remove a seleção anterior
            adicionarSelecionado(index); // Adiciona a seleção ao botão e personagem clicado
        });
    });
}

// Inicializa a configuração dos botões
configurarBotoes();
