
const p1 = document.getElementById('plan1');
const p2 = document.getElementById('plan2');
const p3 = document.getElementById('plan3');
const plan1 = document.querySelector('.planes__1play');
const plan2 = document.querySelector('.planes__2play');
const plan3 = document.querySelector('.planes__3play');

p1.addEventListener('click', () => {
    p1.classList.add('activo');
    p2.classList.remove('activo');
    p3.classList.remove('activo');
    plan1.classList.remove('ocultar');
    plan2.classList.add('ocultar');
    plan3.classList.add('ocultar');
});

p2.addEventListener('click', () => {
    p1.classList.remove('activo');
    p2.classList.add('activo');
    p3.classList.remove('activo');
    plan1.classList.add('ocultar');
    plan2.classList.remove('ocultar');
    plan3.classList.add('ocultar');
});

p3.addEventListener('click', () => {
    p1.classList.remove('activo');
    p2.classList.remove('activo');
    p3.classList.add('activo');
    plan1.classList.add('ocultar');
    plan2.classList.add('ocultar');
    plan3.classList.remove('ocultar');
});



console.log("object");