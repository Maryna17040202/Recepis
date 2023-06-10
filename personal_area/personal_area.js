let entrance = document.querySelector('#entrance');
let login = document.querySelector('#login'); // поиск инпута, в котором будет вводиться email, если пользователь зарегистрирован
let password = document.querySelector('#password'); // поиск инпута, в котором будет вводиться пароль, если пользователь зарегистрирован
let register = document.querySelector('#register');
let closeBtn = document.querySelector('#close');
let closeImg = document.querySelector('#closeJmg');
let imgPasswordOff = document.querySelector('.img-password-off');
let passwordModalOne = document.querySelector('#modal-password-one');
let passwordModalTwo = document.querySelector('#modal-password-two');
let imgOnModalOne = document.querySelector('#imgOnModalOne');
let imgOffModalOne = document.querySelector('#imgOffModalOne');
let imgOnModalTwo = document.querySelector('#imgOnModalTwo');
let imgOffModalTwo = document.querySelector('#imgOffModalTwo');
let modal = document.getElementById('id01');
let modalInputEmail = document.querySelector('#modal-input-email'); 
let submitModal = document.querySelector('#submit-modal');


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    // регулярное выражение для проверки email

const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;
    // регулярное выражение для проверки пароля

entrance.addEventListener('click', function() {
 
    if (PASSWORD_REGEXP.test(password.value) && EMAIL_REGEXP.test(login.value)) {
        alert ('Регистрация прошла успешно')
        password.value = '';
        login.value = '';
    }

    // если введенный пароль проходит проверку регулярного выражения пароля 
    // И введенный email проходит проверку регулярного выражения email
    // возращаем true и обнуляем input

    else alert('Вы ввели неверный логин или пароль');
});

register.addEventListener('click', function() {
    if (modal.className = 'modal') {
        modal.className = 'modal-on-singup';
    }
});

closeBtn.addEventListener('click', function() {
    if (modal.className = 'modal-on-singup') {
        modal.className = 'modal';
    }
});

closeImg.addEventListener('click', function() {
    if (modal.className = 'modal-on-singup') {
        modal.className = 'modal';
    }
});

imgPasswordOff.addEventListener('click', function() {
    
    let password = document.querySelector('#password');
    let imgOn = document.querySelector('#imgOn');
    let imgOff = document.querySelector('#imgOff');

        if (imgOn.className = 'img-password-off') {
            password.setAttribute('type', 'text')
            imgOn.className = 'off';
            imgOff.className = 'on';
        };

        if (imgOff.className == 'on') {
            document.querySelector('.on').addEventListener('click', function() {
                password.setAttribute('type', 'password')
                imgOn.className = 'img-password-off';
                imgOff.className = 'off';
            })
        };
});

imgOnModalOne.addEventListener('click', function() {

        if (imgOnModalOne.className == 'img-password-off' || imgOnModalTwo == 'img-password-off' ) {
            passwordModalOne.setAttribute('type', 'text');
            imgOnModalOne.className = 'off';
            imgOffModalOne.className = 'on';

            passwordModalTwo.setAttribute('type', 'text');
            imgOnModalTwo.className = 'off';
            imgOffModalTwo.className = 'on';
        };
});

imgOnModalTwo.addEventListener('click', function() {
    
        if (imgOnModalOne.className == 'img-password-off' || imgOnModalTwo == 'img-password-off' ) {
            passwordModalOne.setAttribute('type', 'text');
            imgOnModalOne.className = 'off';
            imgOffModalOne.className = 'on';

            passwordModalTwo.setAttribute('type', 'text');
            imgOnModalTwo.className = 'off';
            imgOffModalTwo.className = 'on';
        };
});

imgOffModalOne.addEventListener('click', function() {

        if (imgOffModalOne.className == 'on' || imgOffModalTwo == 'on' ) {
            passwordModalOne.setAttribute('type', 'password');
            imgOnModalOne.className = 'img-password-off';
            imgOffModalOne.className = 'off';

            passwordModalTwo.setAttribute('type', 'password');
            imgOnModalTwo.className = 'img-password-off';
            imgOffModalTwo.className = 'off';
        };
});

imgOffModalTwo.addEventListener('click', function() {

        if (imgOffModalOne.className == 'on' || imgOffModalTwo == 'on' ) {
            passwordModalOne.setAttribute('type', 'password');
            imgOnModalOne.className = 'img-password-off';
            imgOffModalOne.className = 'off';

            passwordModalTwo.setAttribute('type', 'password');
            imgOnModalTwo.className = 'img-password-off';
            imgOffModalTwo.className = 'off';
        };
});

submitModal.addEventListener('submit', function(e) {

    let modalInputEmailValue = modalInputEmail.value; // получение Email при  вводе в форме регистрации
    let passwordModalOneValue = passwordModalOne.value; // получение пароля в первом поле ввода в форме регистрации
    let passwordModalTwoValue = passwordModalTwo.value; // получение пароля при повторном вводе в форме регистрации
    let checkedModal = document.querySelector('#checkedModal').type;
   
    console.log(checkedModal);

    console.log(passwordModalOneValue, passwordModalTwoValue, modalInputEmailValue);

    function emailRegeXp(stingEmail) { // проверка валидности Email
        return EMAIL_REGEXP.test(stingEmail); 
    };

    function lengthLessThan(stringOne, limit) { // проверка пароля на длину 8 и более символов
        return stringOne.length < limit;
    };

    function lengthLessThan(stringTwo, limit) {
        return stringTwo.length < limit;
    };

    function lengthMoreThan(stringOne, limit) { // проверка пароля на длину 15 и менее символов
        return stringOne.length > limit;        
    };

    function lengthMoreThan(stringTwo, limit) { // проверка пароля на длину 15 и менее символов
        return stringTwo.length > limit;        
    };

    function hasLowercaseLetters(stringOne) { //Проверка пароля. Пароль должен содержать хотя бы одну строчную латинскую букву
        return /[a-z]/.test(stringOne);
    };

    function hasLowercaseLetters(stringTwo) { //Проверка пароля. Пароль должен содержать хотя бы одну строчную латинскую букву
        return /[a-z]/.test(stringTwo);
    };

    function hasDigits(stringOne) { //Проверка пароля. Пароль должен содержать хотя бы одну заглавную латинскую букву
        return /[0-9/]/.test(stringOne);
    };

    function hasDigits(stringTwo) { //Проверка пароля. Пароль должен содержать хотя бы одну заглавную латинскую букву
        return /[0-9]/.test(stringTwo);
    };

    function hasCapitalLetters(stringOne) { //Проверка пароля. Пароль должен содержать хотя бы одну цифру
        return /[A-Z]/.test(stringOne);
    };

    function hasCapitalLetters(stringTwo) { //Проверка пароля. Пароль должен содержать хотя бы одну цифру
        return /[A-Z]/.test(stringTwo);
    };

    function hasSymbol(stringOne) { //Проверка пароля. Пароль должен содержать хотя бы один символ ! @ # $ % ^ & *
        return /[!@#$%^&*]/.test(stringOne);
    };

    function hasSymbol(stringTwo) { //Проверка пароля. Пароль должен содержать хотя бы один символ ! @ # $ % ^ & *
        return /[!@#$%^&*]/.test(stringTwo);
    };

    function notContainSymbol(stringOne) { //Проверка пароля. Пароль не должен содержать символы . , ; : ' " | /
        return /[.,/;/:/'/"|//]/.test(stringOne);
    };

    function notContainSymbol(stringTwo) { //Проверка пароля. Пароль не должен содержать символы . , ; : ' " | /
        return /[.,/;/:/'/"|//]/.test(stringTwo)
    };

    function comparison(stringOne, stringTwo) {
        return stringOne == stringTwo; // Проверка пароля. Пароли должны совпадать.
    };

    function booleanValid(boolean) {
        console.log(boolean);
        return boolean == 'checkbox';
    }


    function isPasswordValid(stringOne, stringTwo, stingEmail, boolean) {
       

        if (!emailRegeXp(stingEmail)) {
            alert('Email введен не корректно');
            return e.preventDefault();
        }

        if (lengthLessThan(stringOne, 8)) {
            alert('Пароль должен содержать 8 и более символов');
            return e.preventDefault();
        }

        if (lengthLessThan(stringTwo, 8)) {
            alert('Пароль должен содержать 8 и более символов');
            return e.preventDefault();
        }

        if (lengthMoreThan(stringOne, 15)) {
            alert('Пароль должен быть короче 15 символов');
            return e.preventDefault();
        }

        if (lengthMoreThan(stringTwo, 15)) {
            alert('Пароль должен быть короче 15 символов');
            return e.preventDefault();
        }

        if (!hasLowercaseLetters(stringOne)) {
            alert('Пароль должен содержать строчную букву');
            return e.preventDefault();          
        }

        if (!hasLowercaseLetters(stringTwo)) {
            alert('Пароль должен содержать строчную букву');
            return e.preventDefault();          
        }

        if(!hasDigits(stringOne)) {
            alert('Пароль должен содержать цифры');
            return e.preventDefault();
        }

        if(!hasDigits(stringTwo)) {
            alert('Пароль должен содержать цифры');
            return e.preventDefault();
        }


        if (!hasCapitalLetters(stringOne)) {
            alert('Пароль должен содержать заглавную букву');
            return e.preventDefault();
        }

        if (!hasCapitalLetters(stringTwo)) {
            alert('Пароль должен содержать заглавную букву');
            return e.preventDefault();
        }

        if (!hasSymbol(stringOne)) {
            alert('Пароль должен содержать один из символов ! @ # $ % ^ & * ');
            return e.preventDefault();
        }

        if (!hasSymbol(stringTwo)) {
            alert('Пароль должен содержать один из символов ! @ # $ % ^ & * ');
            return e.preventDefault();
        }

        if (notContainSymbol(stringOne)) {
            alert('Пароль не должен содержать символы . , ; : \' \" |  ');
            return e.preventDefault();
        }

        if (notContainSymbol(stringTwo)) {
            alert('Пароль не должен содержать символы . , ; : \' \" |  ');
            return e.preventDefault();
        }

        if (!comparison(stringOne, stringTwo)) {
            alert('Пароль не совпадает');
            return e.preventDefault();
        }

        if (booleanValid(boolean)) {
            localStorage.setItem('email', stingEmail);
            localStorage.setItem('password', stringOne);
        }
    
    alert('Регистрация прошла успешно');
    
    return true;
    }

    isPasswordValid(passwordModalOneValue, passwordModalTwoValue, modalInputEmailValue, checkedModal);
});

let email = localStorage.getItem('email');
let passwords = localStorage.getItem('password');
console.log(email, passwords);

