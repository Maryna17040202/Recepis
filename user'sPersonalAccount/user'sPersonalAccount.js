let email = localStorage.getItem('email');
let passwords = localStorage.getItem('password');
console.log(email, passwords);

let emailUser = document.querySelector('#email-user');
let passwordUserOne = document.querySelector('#passwordUserOne');
let passwordUserTwo = document.querySelector('#passwordUserTwo');
passwordUserOne.value = passwords;
passwordUserTwo.value = passwords;
emailUser.value = email;
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');


let buttonSave = document.querySelector('#buttonSave');


buttonSave.addEventListener('click', function() {
    firstName = firstName.value;
    lastName = lastName.value;

    function isValidForm (name, surname) {
        function nameFirst(name) {
            return /[1-9]/.test(name)
        }

        function nameLast(surname) {
            return /[1-9]/.test(surname)
        }

        function boolean(boolean) {
            return boolean;
        }
        
        if (nameFirst(name)) {
            alert('Имя пользователя не должно содержать цифр');
            return boolean = false
        }

        if (nameLast(surname)) {
            alert('Фамилия не должна содержать цифр');
            return boolean = false
        }

    
    alert('Форма успешно заполнена');
    return boolean = true;
    }

    isValidForm(firstName, lastName);
})



