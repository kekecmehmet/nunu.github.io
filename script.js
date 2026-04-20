document.addEventListener('DOMContentLoaded', () => {
    // Reveal video section on scroll
    const videoNote = document.querySelector('.video-note');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    if (videoNote) observer.observe(videoNote);

    // Create subtle particles background effect
    createParticles();
});

function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#f97316', '#fb923c', '#fdba74', '#fed7aa']; // orange theme colors for hearts
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        
        // Random properties
        const size = Math.random() * 12 + 10; // 10px to 22px
        const left = Math.random() * 100; // 0% to 100%
        const delay = Math.random() * 15; // 0s to 15s
        const duration = Math.random() * 10 + 15; // 15s to 25s
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Content and styling
        particle.innerHTML = '❤';
        particle.style.position = 'absolute';
        particle.style.fontSize = `${size}px`;
        particle.style.color = color;
        particle.style.userSelect = 'none';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.left = `${left}%`;
        particle.style.bottom = '-30px';
        
        // Custom animation
        particle.style.animation = `floatParticle ${duration}s ${delay}s infinite linear`;
        
        container.appendChild(particle);
    }
    
    // Add keyframes dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                bottom: -20px;
            }
            50% {
                transform: translateY(-50vh) translateX(${Math.random() * 100 - 50}px) rotate(180deg);
            }
            100% {
                transform: translateY(-120vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                bottom: 100%;
            }
        }
    `;
    document.head.appendChild(styleSheet);
}
