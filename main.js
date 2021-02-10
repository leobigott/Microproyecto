const slideCarrusel = document.querySelector('.slide-carrusel');
const imagenCarrusel = document.querySelectorAll('.slide-carrusel img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = imagenCarrusel[0].clientWidth;

slideCarrusel.style.transform = 'translateX('+(-size*counter)+'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= imagenCarrusel.length -1) return;
    slideCarrusel.style.transition = "transform 0.7s ease-in-out";
    counter++;
    slideCarrusel.style.transform = 'translateX('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    slideCarrusel.style.transition = "transform 0.7s ease-in-out";
    counter--;
    slideCarrusel.style.transform = 'translateX('+(-size*counter)+'px)';
});

slideCarrusel.addEventListener('transitionend',()=>{
    if(imagenCarrusel[counter].id == 'lastClone'){
        slideCarrusel.style.transition = "none";
        counter = imagenCarrusel.length - 2;
        slideCarrusel.style.transform = 'translateX('+(-size*counter)+'px)';
    }
    if(imagenCarrusel[counter].id == 'firstClone'){
        slideCarrusel.style.transition = "none";
        counter = imagenCarrusel.length - counter;
        slideCarrusel.style.transform = 'translateX('+(-size*counter)+'px)';
    }
})

