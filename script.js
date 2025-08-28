// Funcionalidad del reproductor
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const volumeSlider = document.getElementById('volume-slider');
const player = document.getElementById("player");

  function togglePlay() {
    if (player.paused) {
      player.play();
      playBtn.textContent = "⏸"; // cambia ícono a pausa
    } else {
      player.pause();
      playBtn.textContent = "▶"; // cambia ícono a play
    }
  }

  function setVolume(value) {
    player.volume = value;
  }
// Reproducir o pausar
playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Control de volumen
volumeSlider.addEventListener('input', function() {
    audio.volume = volumeSlider.value;
});

// Iniciar con volumen predeterminado
audio.volume = 0.7;

// Crear confeti y corazones
function createDecorations() {
    const colors = ['#ff5e7d', '#6e8efb', '#ff9500', '#5e17eb', '#ff2e63'];
    
    // Crear confeti
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'decoration confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
    }
    
    // Crear corazones flotantes
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(heart);
    }
    
    // Crear corazones personalizados
    for (let i = 0; i < 8; i++) {
        const customHeart = document.createElement('div');
        customHeart.className = 'custom-heart';
        customHeart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        customHeart.style.width = (20 + Math.random() * 30) + 'px';
        customHeart.style.height = (20 + Math.random() * 30) + 'px';
        customHeart.style.left = Math.random() * 100 + 'vw';
        customHeart.style.top = Math.random() * 100 + 'vh';
        customHeart.style.transform = `rotate(${Math.random() * 360}deg)`;
        customHeart.style.animation = `float ${6 + Math.random() * 4}s ease-in-out infinite`;
        customHeart.style.animationDelay = Math.random() * 5 + 's';
        customHeart.style.zIndex = '1';
        document.body.appendChild(customHeart);
        
        // Aplicar estilos a los pseudo-elementos
        const style = document.createElement('style');
        style.textContent = `
            .custom-heart:nth-child(${i + 4})::before, 
            .custom-heart:nth-child(${i + 4})::after {
                background: ${colors[Math.floor(Math.random() * colors.length)]};
            }
        `;
        document.head.appendChild(style);
    }
}

function createParticles() {
            const bg = document.getElementById('animated-bg');
            const colors = ['#ff5e7d', '#6e8efb', '#ff9500', '#5e17eb', '#ff2e63', '#ffffff'];
            
            for (let i = 0; i < 40; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Tamaño aleatorio
                const size = Math.random() * 15 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Color aleatorio
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Posición aleatoria
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Animación con delay aleatorio
                particle.style.animationDelay = `${Math.random() * 5}s`;
                particle.style.animationDuration = `${15 + Math.random() * 10}s`;
                
                bg.appendChild(particle);
            }
        }
        
        // Crear decoraciones mínimas
        function createDecorations() {
            const colors = ['#ff5e7d', '#6e8efb', '#ff9500'];
            
            // Crear corazones
            for (let i = 0; i < 8; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '<i class="fas fa-heart"></i>';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.animationDelay = Math.random() * 5 + 's';
                document.body.appendChild(heart);
            }
        }
        
        createParticles();
createDecorations();