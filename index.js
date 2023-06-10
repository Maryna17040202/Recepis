let offset = 620; // смещене от левого края
const sliderLine  = document.querySelectorAll('.main-category-blok');
let cake = document.querySelector('#cake');
let tort = document.querySelector('#tort');
let iceCream = document.querySelector('#iceCream');
let pie = document.querySelector('#pie');
let marshmallow = document.querySelector('#marshmallow');
let cookie = document.querySelector('#cookie');
let buttonCabinet = document.querySelector('#button-cabinet');


document.querySelector('.button-richt').addEventListener('click', function() {
    offset += 450;
    if (offset > 610) {
        offset = 609;
    }
    for (let i = 0; i <= sliderLine.length; i++) {
        const slider = sliderLine[i];
        slider.style.left = offset + 'px';
    }
});

document.querySelector('.button-left').addEventListener('click', function() {
    offset -= 410;
    if (offset < -610) {
        offset = 620;
    }
    for (let i = 0; i <= sliderLine.length; i++) {
        const slider = sliderLine[i];
        slider.style.left = offset + 'px';
    }
});

document.querySelector('#cakeButton').addEventListener('click', function() {
    cake.className = "main-menu-good-active";
    tort.className = "main-menu-good-hidden";
    iceCream.className = "main-menu-good-hidden";
    pie.className = "main-menu-good-hidden";
    marshmallow.className = "main-menu-good-hidden";
    cookie.className = "main-menu-good-hidden";
});

document.querySelector('#tortButton').addEventListener('click', function() {
    cake.className = "main-menu-good-hidden";
    tort.className = "main-menu-good-active";
    iceCream.className = "main-menu-good-hidden";
    pie.className = "main-menu-good-hidden";
    marshmallow.className = "main-menu-good-hidden";
    cookie.className = "main-menu-good-hidden";
});

document.querySelector('#iceCreamButton').addEventListener('click', function() {
    cake.className = "main-menu-good-hidden";
    tort.className = "main-menu-good-hidden";
    iceCream.className = "main-menu-good-active";
    pie.className = "main-menu-good-hidden";
    marshmallow.className = "main-menu-good-hidden";
    cookie.className = "main-menu-good-hidden";
});

document.querySelector('#pieButton').addEventListener('click', function() {
    cake.className = "main-menu-good-active";
    tort.className = "main-menu-good-hidden";
    iceCream.className = "main-menu-good-hidden";
    pie.className = "main-menu-good-hidden";
    marshmallow.className = "main-menu-good-hidden";
    cookie.className = "main-menu-good-hidden";
});

document.querySelector('#marshmallowButton').addEventListener('click', function() {
    cake.className = "main-menu-good-hidden";
    tort.className = "main-menu-good-active";
    iceCream.className = "main-menu-good-hidden";
    pie.className = "main-menu-good-hidden";
    marshmallow.className = "main-menu-good-hidden";
    cookie.className = "main-menu-good-hidden";
});

document.querySelector('#cookieButton').addEventListener('click', function() {
    cake.className = "main-menu-good-hidden";
    tort.className = "main-menu-good-hidden";
    iceCream.className = "main-menu-good-active";
    pie.className = "main-menu-good-hidden";
    marshmallow.className = "main-menu-good-hidden";
    cookie.className = "main-menu-good-hidden";
});

let date = new Date(); // получение текущей даты
var tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000)); // получение завтра
let text = tomorrow.toLocaleDateString().split('.').reverse().join('-'); // получение даты год месяц день
let dateMin = document.querySelector('#dateBron'); // получение ид куда записать сегодняшюю дату
dateMin.min = text; // присвоение сегодняшней даты, вчерашнюю дату становится выбрать нельзя
dateMin.value = text; // отоброжение текущей даты на странице

let time = document.querySelector('#time');
time.value = '10:00';


document.querySelector('#submit').addEventListener('click', function() {
    let dats = form.date.value
    let ar = dats.split('-').reverse().join(' ')
    let time = form.time.value

    if (true) {
        return alert('Ждем Вас ' + ar + '  Приготовим самое вкусное к ' + time);
    }
})

let email = localStorage.getItem('email');
let passwords = localStorage.getItem('password');
console.log(email, passwords);

buttonCabinet.addEventListener('click', function() {
    if (email && passwords) {
        buttonCabinet.href = "user'sPersonalAccount/user'sPersonalAccount.html"
    }
})
