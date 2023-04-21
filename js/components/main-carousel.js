const btnRigth = document.querySelector('.button-arrow.-rigth');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.card-figurre');
let counter = 0;

btnRigth.addEventListener('click', function() {
    counter = counter+100;
    elements.style = `transform: translateX(${counter}px)`;
})

btnLeft.addEventListener('click', function() {
    counter = counter-100;
    elements.style = `transform: translateX(${counter}px)`;
})
