/* ============================================
   EL CENTOLLO - Slider automático
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Cambiar slide al hacer clic en los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            currentSlide = index;
        });
    });
    
    // Auto-rotar cada 5 segundos
    setInterval(() => {
        dots[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % dots.length;
        dots[currentSlide].classList.add('active');
    }, 5000);
    
});