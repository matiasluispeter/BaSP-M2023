//e-mail
var emailInput = document.getElementById('e-mail');
var msjEmail = document.getElementById('falseA');

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function() {
  msjEmail.textContent = '';
  emailInput.classList.remove('border');
});

function validateEmail() {
    var emailValue = emailInput.value;
    var isValid = true
    if (!emailValue) {
        isValid = false
        emailInput.classList.add('border');
        msjEmail.textContent = 'you must get into an e-mail';
    return;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue)) {
        emailInput.classList.remove('border');
        msjEmail.textContent = '';
    } else {
        isValid = false
        emailInput.classList.add('border')
        msjEmail.textContent = 'you must get into a valid e-mail';
    }
}

//password
var passwordInput = document.getElementById('password');
var msjPassword = document.getElementById('falseB');

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function() {
  msjPassword.textContent = '';
  passwordInput.classList.remove('red', 'border');
});

function validatePassword() {
    var passwordValue = passwordInput.value;
    var isValid = true
    if (!passwordValue) {
        isValid = false
        passwordInput.classList.add('border');
        msjPassword.textContent = 'get into a password';
        return;
    }

    var passwordLength = passwordValue.length;
    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < passwordLength; i++) {
    var currentChar = passwordValue.charAt(i);
    if (isNaN(currentChar)) {
        hasLetter = true;
    } else {
        hasNumber = true;
    }
    }

    if (passwordLength >= 8 && hasLetter && hasNumber) {
        isValid = true
        passwordInput.classList.remove('border');
        msjPassword.textContent = '';
    } else {
        isValid = false
        passwordInput.classList.add('border');
        msjPassword.textContent = 'you must get into a valid password (min 8 alphanumeric characters)';
    }
}
//form

var form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', send);

function send(event) {
  
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  if (
    emailInput.classList.contains('border') ||
    passwordInput.classList.contains('border')
  ) {
    alert('Incorrect data');
  } else {
    alert(
      emailInput.value + ' ' +
      passwordInput.value
    );
  }
}