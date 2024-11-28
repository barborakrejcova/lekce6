console.log(validator.isEmail('krejcova.barbora96@gmail.com'));
console.log(validator.isCreditCard('4125010001000208'));

const email = prompt('Zadejte prosím váš e-mail', 'např. novak@seznam.cz');
const message = document.getElementById('msg');


if (validator.isEmail(email)){
    message.innerHTML = 'E-mail v pořádku';
    message.classList.add('msg--valid');
} else {
    message.innerHTML = 'Neplatný e-mail';
    message.classList.add('msg--invalid');
}

//validator.isEmail(email) ? message.innerHTML = 'E-mail v pořádku' : message.innerHTML = 'Neplatný e-mail';
