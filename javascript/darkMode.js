/*---Elements---*/
let imagentb = document.querySelector('#imgtb');
let modoOscuro = document.querySelector('#tb');
let body = document.querySelector('body');
let secciones = document.querySelectorAll('.Whiteseccion');
let textos = document.querySelectorAll('.Whitetext');
let images = document.querySelectorAll('.Whiteimg');
let headeron = document.querySelector('#main-header');
/*---Code---*/
if (localStorage.getItem("Theme") == null){
    localStorage.setItem("Theme", "claro");
    imagentb.src="../img/moon.png";
}else{
    if(localStorage.getItem("Theme") == "oscuro"){
        imagentb.src="../img/sun.png";
        html.src="../icons/htmlwhite.png";
        body.classList.replace('White', 'DarkModeBody');
        secciones.forEach(ss =>{
            ss.classList.replace('Whiteseccion','Darkseccion');
        })
        textos.forEach(txt =>{
            txt.classList.replace('Whitetext','Darktext');
        })
        images.forEach(pict =>{
            pict.classList.replace('Whiteimg','Darkimg');
        })
        headeron.classList.replace('Whiteheader','Darkheader');
    }
    
}
modoOscuro.addEventListener("click", (e)  =>{
    e.preventDefault();
    if(localStorage.getItem("Theme") == "claro"){
        localStorage.setItem("Theme", "oscuro");
        imagentb.src="../img/sun.png";
        body.classList.replace('White', 'DarkModeBody');
        secciones.forEach(ss =>{
            ss.classList.replace('Whiteseccion','Darkseccion');
        })
        textos.forEach(txt =>{
            txt.classList.replace('Whitetext','Darktext');
        })
        images.forEach(pict =>{
            pict.classList.replace('Whiteimg','Darkimg');
        })
        headeron.classList.replace('Whiteheader','Darkheader');
    }else{
        localStorage.setItem("Theme", "claro");
        imagentb.src="../img/moon.png";
        body.classList.replace('DarkModeBody','White');
        secciones.forEach(ss =>{
            ss.classList.replace('Darkseccion','Whiteseccion');
        })
        textos.forEach(txt =>{
            txt.classList.replace('Darktext','Whitetext');
        })
        images.forEach(pict =>{
            pict.classList.replace('Darkimg','Whiteimg');
        })
        headeron.classList.replace('Darkheader','Whiteheader');
    }
})