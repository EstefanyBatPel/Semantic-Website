document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('falling-elements-container');
    const elements = document.getElementsByClassName('falling-element');

    // Posicionar elementos aleatoriamente al inicio
    for (let element of elements) {
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${Math.random() * 5 + 3}s`;
    }

    // Escuchar cambios de orientación y movimiento del dispositivo
    window.addEventListener('deviceorientation', handleOrientation);
    window.addEventListener('orientationchange', resetPosition);
    
    // Función para manejar la orientación del dispositivo
    function handleOrientation(event) {
        const gamma = event.gamma; // Incline left-to-right in degrees, where right is positive
        for (let element of elements) {
            const currentLeft = parseFloat(element.style.left);
            const newLeft = currentLeft + gamma / 10;
            element.style.left = `${Math.min(100, Math.max(0, newLeft))}vw`;
        }
    }
    
    // Función para reiniciar la posición de los elementos
    function resetPosition() {
        for (let element of elements) {
            element.style.top = '-50px';
            element.style.animation = 'none';
            element.offsetHeight; // Forzar reflujo para reiniciar la animación
            element.style.animation = '';
        }
    }
});
