const parrafo = document.getElementById('parrafo');
const subtitle = document.getElementById('subtitulo');
const udemyt = document.getElementById('udemy');
const senat = document.getElementById('sena');
const generalt = document.getElementById('general');
const otrost = document.getElementById('otros');
const title = document.getElementById('nonett');

const cargarTexto = (entradas, mirador) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visiblesubtt');
        } else{
            entrada.target.classList.remove('visiblesubtt');
        }
    });
}
const mirador = new IntersectionObserver(cargarTexto, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3
});
mirador.observe(parrafo);
mirador.observe(subtitle);
mirador.observe(senat);
mirador.observe(udemyt);
mirador.observe(generalt);
mirador.observe(otrost);
mirador.observe(nonett);