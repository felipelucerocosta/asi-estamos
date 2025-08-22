document.addEventListener('DOMContentLoaded', function() {
    const carrusel = document.getElementById('carruselMiembros');
    const miembros = carrusel.querySelectorAll('.miembro');
    const indicadores = document.getElementById('indicadoresMiembros');
    let activo = 0;

    // Crear indicadores
    miembros.forEach((_, idx) => {
        const btn = document.createElement('button');
        btn.className = 'carrusel-indicador' + (idx === 0 ? ' activo' : '');
        btn.addEventListener('click', () => {
            carrusel.scrollTo({
                left: miembros[idx].offsetLeft - carrusel.offsetLeft,
                behavior: 'smooth'
            });
        });
        indicadores.appendChild(btn);
    });

    // Actualizar indicador activo al hacer scroll
    carrusel.addEventListener('scroll', () => {
        let minDiff = Infinity;
        let nuevoActivo = 0;
        miembros.forEach((miembro, idx) => {
            const diff = Math.abs(carrusel.scrollLeft - (miembro.offsetLeft - carrusel.offsetLeft));
            if (diff < minDiff) {
                minDiff = diff;
                nuevoActivo = idx;
            }
        });
        if (nuevoActivo !== activo) {
            indicadores.children[activo].classList.remove('activo');
            indicadores.children[nuevoActivo].classList.add('activo');
            activo = nuevoActivo;
        }
    });
});