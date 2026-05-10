// Funções principais
const initApp = () => {
    console.log('Aplicação iniciada com sucesso!');
    
    // Exemplo de manipulação do DOM
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Botão clicado!');
        });
    }
    
    // Exemplo de requisição assíncrona
    fetchData();
};

// Função para buscar dados
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Dados recebidos:', data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);

// Exportar funções para uso em outros módulos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initApp, fetchData };
}