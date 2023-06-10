let cakeStrawberry = document.querySelector("#cakeStrawberry");
let cakeRaspberries = document.querySelector("#cakeRaspberries");
let cakeHappyBirthday = document.querySelector("#cakeHappyBirthday");
let cakeChocolate = document.querySelector("#cakeChocolate");
let cakeCream = document.querySelector("#cakeCream");
let cakeMastic = document.querySelector("#cakeMastic");
let cakeWedding = document.querySelector("#cakeWedding");
let cakeEaster = document.querySelector("#cakeEaster");
let cakeSpring = document.querySelector("#cakeSpring");
let cakeNewYear = document.querySelector("#cakeNewYear");

let ingredientsCakeStrawberry = document.querySelector("#ingredientsCakeStrawberry");
let ingredientsCakeRaspberries = document.querySelector("#ingredientsCakeRaspberries");
let ingredientsCakeHappyBirthday = document.querySelector("#ingredientsCakeHappyBirthday");
let ingredientsCakeChocolate = document.querySelector("#ingredientsCakeChocolate");
let ingredientsCakeCream = document.querySelector("#ingredientsCakeCream");
let ingredientsCakeMastic = document.querySelector("#ingredientsCakeMastic");
let ingredientsCakeWedding = document.querySelector("#ingredientsCakeWedding");
let ingredientsCakeEaster = document.querySelector("#ingredientsCakeEaster");
let ingredientsCakeSpring = document.querySelector("#ingredientsCakeSpring");
let ingredientsCakeNewYear = document.querySelector("#ingredientsCakeNewYear");

let body = document.body;
let mainBtns = document.querySelectorAll(".mainBtn");
let inputNumbers = document.querySelectorAll("#inputNumber");
let inputs = document.querySelectorAll("input");
let mainMins = document.querySelectorAll(".mainMin");
let mainMaxs = document.querySelectorAll(".mainMax");
let mainFronts = document.querySelectorAll(".mainFront");
let mainsBasket = document.querySelectorAll(".mainBasket");
let basket = document.querySelector(".basket");
let basketClose = document.querySelector("#basketClose");
let basketContainerProduct = document.querySelector("#basketContainerProduct");

class Cake {
    constructor(image, name, price) {
        this.image = image;
        this.name = name;
        this.price = price;
    }
    showStats(element) {
        element.insertAdjacentHTML("beforeend", `<img src="img/${this.image}" /><br />`);
        element.insertAdjacentHTML("beforeend", `<div class="name">${this.name}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div class="num" >${this.price}</div><br />`);
    }
};

let cupCakeStrawberry = new Cake("cupcakes-strawberry.jpg", "Кекс с клубникой", "2");
let cupCakeRaspberries = new Cake("cake-raspberries.jpg", "Кекс с малиной", "2");
let cupCakeHappyBirthday = new Cake("happy-birthday.jpg", "День рождение", "3");
let cupCakeChocolate = new Cake("cupcake-chocolate.jpg", "Шоколадный кекс", "2");
let cupCakeCream = new Cake("cupcakes-cream.jpg", "Кремовый кекс", "2");
let cupCakeMastic = new Cake("cupcake-mastic.jpg", "Кекс с фигурками из мастики", "2");
let cupCakeWedding = new Cake("cupcake-wedding.jpg", "Свадебный кекс", "3");
let cupCakeEaster = new Cake("cupcake-easter.jpg", "Пасхальный кекс", "3");
let cupCakeSpring = new Cake("cupcakes-spring.jpg", "Весеннее настроение", "2");
let cupCakeNewYear = new Cake("cupcakes-newyear.jpg", "Новогодний кекс", "2");

cupCakeStrawberry.showStats(cakeStrawberry);
cupCakeRaspberries.showStats(cakeRaspberries);
cupCakeHappyBirthday.showStats(cakeHappyBirthday);
cupCakeChocolate.showStats(cakeChocolate);
cupCakeCream.showStats(cakeCream);
cupCakeMastic.showStats(cakeMastic);
cupCakeWedding.showStats(cakeWedding);
cupCakeEaster.showStats(cakeEaster);
cupCakeSpring.showStats(cakeSpring);
cupCakeNewYear.showStats(cakeNewYear);

class Ingredients {
    constructor(ingredients, flour, milk, sugar, eggs, butter, calories) {
        this.ingredients = ingredients;
        this.flour = flour;
        this.milk = milk;
        this.sugar = sugar;
        this.eggs = eggs;
        this.butter = butter;
        this.calories = calories;
    };

    showStats(element) {
        element.insertAdjacentHTML("beforeend", `<div>${this.ingredients}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div>${this.flour}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div>${this.milk}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div>${this.sugar}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div>${this.eggs}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div>${this.butter}<br /></div>`);
        element.insertAdjacentHTML("beforeend", `<div>${this.calories}<br /></div>`);
    };
};

let ingredientsCupCakeStrawberry = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeRaspberries = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeHappyBirthday = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeChocolate = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeCream = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeMastic = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeWedding = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeEaster = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeSpring = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");
let ingredientsCupCakeNewYear = new Ingredients("Ингридиенты: ", "Мука: 300 гр", "Молоко: 75 мл", "Сахар: 100 гр", "Яйца: 1 шт", "Масло: 50 гр", "Калорийность: 330 кКал");


ingredientsCupCakeStrawberry.showStats(ingredientsCakeStrawberry);
ingredientsCupCakeRaspberries.showStats(ingredientsCakeRaspberries);
ingredientsCupCakeHappyBirthday.showStats(ingredientsCakeHappyBirthday);
ingredientsCupCakeChocolate.showStats(ingredientsCakeChocolate);
ingredientsCupCakeCream.showStats(ingredientsCakeCream);
ingredientsCupCakeMastic.showStats(ingredientsCakeMastic);
ingredientsCupCakeWedding.showStats(ingredientsCakeWedding);
ingredientsCupCakeEaster.showStats(ingredientsCakeEaster);
ingredientsCupCakeSpring.showStats(ingredientsCakeSpring);
ingredientsCupCakeNewYear.showStats(ingredientsCakeNewYear);


mainBtns.forEach(mainBtn => {
    mainBtn.addEventListener("click", clickMain)
});

function clickMain() {
    if (this.className == "mainBtn cakeStrawberry") {
        cakeStrawberry.classList.toggle("mainInline");
        ingredientsCakeStrawberry.classList.toggle("mainBack");
        ingredientsCakeStrawberry.classList.toggle("mainInline");
    };


    if (this.className == "mainBtn raspberries") {
        cakeRaspberries.classList.toggle("mainInline");
        ingredientsCakeRaspberries.classList.toggle("mainBack");
        ingredientsCakeRaspberries.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn happyBirthday") {
        cakeHappyBirthday.classList.toggle("mainInline");
        ingredientsCakeHappyBirthday.classList.toggle("mainBack");
        ingredientsCakeHappyBirthday.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn chocolate") {
        cakeChocolate.classList.toggle("mainInline");
        ingredientsCakeChocolate.classList.toggle("mainBack");
        ingredientsCakeChocolate.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn cream") {
        cakeCream.classList.toggle("mainInline");
        ingredientsCakeCream.classList.toggle("mainBack");
        ingredientsCakeCream.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn mastic") {
        cakeMastic.classList.toggle("mainInline");
        ingredientsCakeMastic.classList.toggle("mainBack");
        ingredientsCakeMastic.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn wedding") {
        cakeWedding.classList.toggle("mainInline");
        ingredientsCakeWedding.classList.toggle("mainBack");
        ingredientsCakeWedding.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn easter") {
        cakeEaster.classList.toggle("mainInline");
        ingredientsCakeEaster.classList.toggle("mainBack");
        ingredientsCakeEaster.classList.toggle("mainInline");
        };


    if (this.className == "mainBtn spring") {
        cakeSpring.classList.toggle("mainInline");
        ingredientsCakeSpring.classList.toggle("mainBack");
        ingredientsCakeSpring.classList.toggle("mainInline");
        };

    if (this.className == "mainBtn newYear") {
        cakeNewYear.classList.toggle("mainInline");
        ingredientsCakeNewYear.classList.toggle("mainBack");
        ingredientsCakeNewYear.classList.toggle("mainInline");
        };
};

inputs.forEach(input => {
    input.addEventListener("keydown", clickInput)
});

function clickInput(event) {
    if (this.value) {
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            
            // Ничего не делаем
            return;
        } else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
            // Запрещаем вводить, больше 3 цифр
            if (this.value.length > 2) {
                event.preventDefault();
            }

        }
    }    
};

mainMins.forEach(mainMin => {
    mainMin.addEventListener("click", clickMin)
});

function clickMin() {

    for (let i = 0; i < inputNumbers.length; i++) {
        const element = i;
        if (this.id == element && inputNumbers[element].value > 1)  {
            inputNumbers[element].value--
        };
    };
};

mainMaxs.forEach(mainMax => {
    mainMax.addEventListener("click", clickMax)
});

function clickMax() {

    for (let i = 0; i < inputNumbers.length; i++) {
        const element = i;
        if (this.id == element && inputNumbers[element].value < 999) {
            inputNumbers[element].value++
        };
    };
};

let mainFrontsDiv = document.querySelectorAll(".num");

let array = [];
let price = [];

mainFrontsDiv.forEach(str => {
    array.push(str.innerHTML);
    return array;
});

function toCurrency(arr) {
    for (let i = 0; i < arr.length; i++) {
        const format = new Intl.NumberFormat("be-BY", {
            style: "currency",
            currency: "BYN",
            minimumFractionDigits: 0,
          }).format(arr[i]);
        price.push(format);   
    };
};

toCurrency(array);

for (let i = 0; i < price.length; i++) {
    mainFrontsDiv[i].innerHTML = price[i];
};

cart.addEventListener("click", (e) => {
    e.preventDefault();
    basket.classList.add("basket--open");
    body.classList.add("lock");
});
  
basketClose.addEventListener("click", (e) => {
    e.preventDefault();
    basket.classList.remove("basket--open");
    body.classList.remove("lock");
});

mainsBasket.forEach(mainBasket => {
    mainBasket.addEventListener("click", clickBasket)
});

let id = 0;

let mainbasketCostValue = document.querySelector(".mainbasketCostValue");

function clickBasket(e) {

    for (let i = 0; i < mainsBasket.length; i++) {
        if (e.target.id == i && inputNumbers[i].value > 0) {
            let clone = mainFronts[i].cloneNode(true);
            clone.classList.remove("mainFront");
            clone.classList.add("basketProduct");
            basketContainerProduct.appendChild(clone);
            cartNum.innerHTML++;
        };
    };

    let basketProduct = document.querySelectorAll(".basketProduct");
    
    for (let k = 0; k < basketProduct.length; k++) {
      
        if (basketProduct[k].lastElementChild.className != "mainBasketProductDelete") {
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("mainBasketProductDelete");
            deleteButton.innerHTML = "✖";
            basketProduct[k].appendChild(deleteButton); 
        };     
    };

    basketProduct.forEach(basketProductDelete => {
        basketProductDelete.addEventListener('click', clickBasketProductDelete)
    });

    function clickBasketProductDelete(e) {
        for (let t = 0; t < basketProduct.length; t++) {
            if (e.target.tagName == "BUTTON" && this.classList) {
                this.classList.remove("basketProduct");
                this.classList.add("mainDelete");
            };   
        };    
    };
};

let basketOpen = document.querySelector("#basketOpen");

cart.addEventListener("click", function() {
    let basketProduct = document.querySelectorAll(".basketProduct");
    for (let i = 0; i < basketProduct.length; i++) {
        const element = basketProduct[i];
        let div = document.createElement('div');
        div = element.childNodes[3].cloneNode(true);
        let sum = div.textContent.split('');
        let numb = Number(sum[0])*inputNumbers[i].value;
        let o = Number(mainbasketCostValue.textContent) + numb;
        mainbasketCostValue.textContent = o;
    };
});