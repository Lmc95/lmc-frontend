/* Carrusel con movimiento hacia derecha o izquierda dependiendo el boton presionado */
const carrusel = document.querySelector('.carrusel');
const btn_izq = document.getElementById('boton-izq');
const btn_der = document.getElementById('boton-der');


btn_der.addEventListener('click', ()=>{
    carrusel.scrollLeft += carrusel.offsetWidth;
});

btn_izq.addEventListener('click', ()=>{
    carrusel.scrollLeft -= carrusel.offsetWidth;
});
/***************************************************************/
