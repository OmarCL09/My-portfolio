const header = document.getElementById('main-header');
var lastScrollY = 0;

window.addEventListener('scroll', function(){
    var currentScrollY = window.scrollY;
    if(currentScrollY > 1){
    if(currentScrollY > lastScrollY){
        header.classList.add('down');
        header.classList.remove('up');
    }else{
        header.classList.remove('down');
        header.classList.add('up');
    }
    lastScrollY = currentScrollY;
}else{
    header.classList.remove('up');
}
})