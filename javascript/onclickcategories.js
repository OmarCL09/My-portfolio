/*-----Elements-----*/
let udemy = document.getElementById('udemy');
let sena = document.getElementById('sena');
let general = document.getElementById('general');
let otros = document.getElementById('otros');

let msj = document.querySelector('.none-certs');
let contudemy = document.querySelector('.udemy-certs');
let contsena = document.querySelector('.sena-certs');
let contgeneral = document.querySelector('.general-certs');
let contotros = document.querySelector('.other-certs');
/*-----Functions-----*/
udemy.addEventListener('click', (e) => {
    e.preventDefault();
    msj.style.display = 'none';
    contsena.style.display = 'none';
    contgeneral.style.display = 'none';
    contotros.style.display = 'none';
    contudemy.style.display = 'flex';
});
sena.addEventListener('click', (e) => {
    e.preventDefault();
    msj.style.display = 'none';
    contsena.style.display = 'flex';
    contgeneral.style.display = 'none';
    contotros.style.display = 'none';
    contudemy.style.display = 'none';
});
general.addEventListener('click', (e) => {
    e.preventDefault();
    msj.style.display = 'none';
    contsena.style.display = 'none';
    contgeneral.style.display = 'flex';
    contotros.style.display = 'none';
    contudemy.style.display = 'none';
});
otros.addEventListener('click', (e) => {
    e.preventDefault();
    msj.style.display = 'none';
    contsena.style.display = 'none';
    contgeneral.style.display = 'none';
    contotros.style.display = 'flex';
    contudemy.style.display = 'none';
});
