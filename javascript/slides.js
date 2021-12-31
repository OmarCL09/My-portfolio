const ico1 = document.getElementById('ico1');
const ico2 = document.getElementById('ico2');
const ico3 = document.getElementById('ico3');
const ico4 = document.getElementById('ico4');
const ico5 = document.getElementById('ico5');
const ico6 = document.getElementById('ico6');

const cargarImagen = (entradas, observador) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else{
            entrada.target.classList.remove('visible');
        }
    });
}
const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});
observador.observe(ico1);
observador.observe(ico2);
observador.observe(ico3);
observador.observe(ico4);
observador.observe(ico5);
observador.observe(ico6);