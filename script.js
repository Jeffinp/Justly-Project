window.onload = function() {
    setTimeout(function() {
        var imagem = document.getElementById('imagem-oculta');
        var audio = document.getElementById('audio');
        
        // Exibe a imagem gradualmente
        imagem.style.opacity = '1';

        // Toca o áudio
        audio.play();
    }, 3000); // 3000 milissegundos = 3 segundos
};
