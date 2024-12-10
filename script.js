// Função limpar do botão LIMPAR
document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('form').reset();
});

// Função limpar e exibir mensagem de envio do botão ENVIAR
document.getElementById('enviar').addEventListener('click', function() {
    document.getElementById('form').reset();
    alert('Sua mensagem foi enviada. Você será respondido o mais breve possível!');
});
