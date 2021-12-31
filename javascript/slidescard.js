const makefs = document.getElementById('macont');
const fisica = document.getElementById('ficont');

const cargarCarta = (entradas, carta) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visiblecard');
        } else{
            entrada.target.classList.remove('visiblecard');
        }
    });
}
const carta = new IntersectionObserver(cargarCarta, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});
carta.observe(makefs);
carta.observe(fisica);
