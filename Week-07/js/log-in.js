var backImage = document.querySelector('.back');
backImage.addEventListener('click', function() {
    window.location.href = 'index.html';
});

function validateLetters(str) {
    var file = str.toLowerCase();
    var letter = 'abcdefghijkmnopqrstvwxyz ';
    var isValid = true;
  
    for (var i = 0; i < file.length; i++) {
      var currentLetter = file.charAt(i);
      if (!letter.includes(currentLetter)) {
        isValid = false;
        break;
      }
    }
  
    return isValid;
  }
  
function validateNumbers(str) {
    var file = '0123456789';
    var cont = 0;

    for (var j = 0; j < file.length; j++) {
        if(str === file.substring(j, j+1)) {
            cont++;
            break;
        }
    }
    return cont == str.length;
}

function validateAlphanumeric(str) {
    var letter = str.toLowerCase();
    var contLetter = 0, contNumber = 0;

    for (var i = 0; i < letter.length; i++) {
        if (validateLetters(letter.substring(i, i+1))){
            contLetter++;
        } else if(validateNumbers(letter.substring(i, i+1))){
            contNumber++;
        }
    }
    if(contLetter > 0 && contNumber > 0) {
        return (contNumber + contLetter) === letter.length;
    } else {
        return false;
    }        
}

var emailInput = document.getElementById('e-mail');
var msjEmail = document.getElementById('falseA');
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function() {
  msjEmail.textContent = '';
  emailInput.classList.remove('border');
});
var emailValue;

function validateEmail() {
    emailValue = emailInput.value;
    var isValid = true
    if (!emailValue) {
        isValid = false
        emailInput.classList.add('border');
        msjEmail.textContent = 'you must get into an e-mail';
    return;
    }
    var emailRegex =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(emailValue)) {
        emailInput.classList.remove('border');
        msjEmail.textContent = '';
    } else {
        emailInput.classList.add('border')
        msjEmail.textContent = 'you must get into a valid e-mail';
    }
}

var passwordInput = document.getElementById('password');
var msjPassword = document.getElementById('falseB');
passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function() {
    msjPassword.textContent = '';
    passwordInput.classList.remove('border');
});

var passwordValue;

function validatePassword() {
    passwordValue = passwordInput.value;
    var isValid = true
    if (passwordValue.length === 0) {
        isValid = false
        passwordInput.classList.add('border');
        msjPassword.textContent = 'get into a password';
        return;
    }
    if (passwordValue.length < 8 || validateAlphanumeric(passwordValue)) {
        isValid = false
        passwordInput.classList.add('border');
        msjPassword.textContent = 'you must get into a valid password (min 8 alphanumeric characters)';
        return;
    }
    else {
        passwordInput.classList.remove('border');
        msjPassword.textContent = '';
    }
}

//form
var loginButton = document.querySelector('body > main > div.general-log-in > button')
loginButton.addEventListener("click", function(e) {
e.preventDefault() 
  if (
    emailInput.classList.contains('border') ||
    passwordInput.classList.contains('border')
  ) {
    alert('Incorrect data');
  } else {
        var url = 'https://api-rest-server.vercel.app/login?email=' + emailValue + '&password=' + passwordValue;

        fetch(url) 
            .then(function (response) {
            return response.json();
            })
            .then(function(data) {
            alert(data.msg);
            })
            .catch(function() {
            alert('error');
            });
  }
})
