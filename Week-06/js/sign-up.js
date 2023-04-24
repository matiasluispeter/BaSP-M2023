var backImage = document.querySelector('.back');
backImage.addEventListener('click', function() {
  window.location.href = 'index.html';
});
//letters validations
function validateLetters(str) {
    var file = str.toLowerCase();
    var letter = "abcdefghijkmnopqrstvwxyz";
    var cont = 0;

for (var i = 0; i< file.length; i++) {
    for (var j = 0; j < letter.length; j++) {
        if (str === letter.substring(j, j+1)){
            cont++;
            break;
        }
    }
}
return cont == str.length;
}
//number validations
function validateNumbers(str) {
    var file = "0123456789";
    var cont = 0;

    for (var j = 0; j < file.length; j++) {
        if(str === file.substring(j, j+1)) {
            cont++;
            break;
        }
    }
    return cont == str.length;
}


//alphanumeric validations
function validateAlphanumeric(str) {
    var letter = str.toLowerCase();
    var letterGrammar = "abcdefghijkmnopqrstvwxyz";
    var contLetter = 0;
    var contNumber = 0

    for (var i = 0; i< letter.length; i++) {
        for (var j = 0; j < letterGrammar.length; j++) {
            if (letter.substring(i, i+1) === letterGrammar.substring(j, j+1)){
                contLetter++;
                break;
            }
            else if ( !isNaN(letter.substring(i, i+1))){
                contNumber++;
                break;
            }
        }
    }
    if (contLetter > 0 && contNumber > 0) {
        return (contLetter + contNumber ) == letter.length;
    } else { return (false) }

}
//name
var nameFirst = document.getElementById('nameFirst');
var msj = document.getElementById('false1');
console.log(nameFirst)

nameFirst.addEventListener('blur', validateName)
nameFirst.addEventListener('focus', function() {
    msj.textContent = ''
nameFirst.classList.remove('border')
})
  function validateName(){
    var nameValue = nameFirst.value.trim();
    var isValid = true;
   
    if (!validateLetters(nameValue) || nameValue.length < 3) {
      isValid = false;
    }
    if ((isValid) || (nameValue == "")) {
      msj.textContent = "";
      nameFirst.classList.remove('border')
    } else {
        nameFirst.classList.add('border')
      msj.textContent = "Must contain only letters and 3 or more characteres";
    }
  }

//surname
var surname = document.getElementById('surname');
var msjSurname = document.getElementById('false2');
console.log(surname)

surname.addEventListener('blur', validateSurname())
surname.addEventListener('focus', function() {
    msjSurname.textContent = ''
surname.classList.remove('border')
})
function validateSurname() {
    var surnameValue = surname.value.trim();
    var isValid = true;
    
    if (validateLetters(surnameValue) || surname.length < 3) {
        isValid = false;
    }
    if ((isValid) || (surnameValue == "")) {
        msjSurname.textContent = "";
        surname.classList.remove('border')
    } else {
        surname.classList.add('border')
        msjSurname.textContent = "Must contain only letters and 3 or more characteres";
    }
}

//dni
var dni = document.getElementById('DNI')
var msjdni = document.getElementById('false3')
console.log(dni)

dni.addEventListener ('blur', validateDni)
dni.addEventListener ('focus', function() {
    msjdni.textContent = ''
    dni.classList.remove('border')
})

function validateDni() {
    var dniValue = dni.value;

    var isValid = true
    if (isNaN(dniValue) || dniValue.length !==8) {
        isValid = false;
        dni.classList.add ('border')
        msjdni.textContent = 'Only numbers and must have more than 7 numbers'
    }
    if (dniValue == 8 || (dniValue = '')) {
        isValid = true
        dni.classList.remove('border')
        msjdni.textContent = ''
    }
}
//Born date
var bornDate = document.getElementById('bornDate');
var msjBornDate = document.getElementById('false4');

bornDate.addEventListener('blur', validateBornDate);
bornDate.addEventListener('focus', function() {
  msjBornDate.textContent = '';
  bornDate.classList.remove('false', 'border');
});

function validateBornDate() {
  var bornDateValue = bornDate.value;

  if (!bornDateValue) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a birth date';
    return;
  }

  var parts = bornDateValue.split('/');
  if (parts.length !== 3) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a birth date in the format dd/mm/yyyy';
    return;
  }

  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);

  if (validateNumbers(day) || validateNumbers(month) || validateNumbers(year)) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a valid birth date';
    return;
  }

  if (day < 1 || day > 31) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a valid day (1-31)';
    return;
  }

  if (month < 1 || month > 12) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a valid month (1-12)';
    return;
  }

  if (year < 1900 || year > 2100) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a valid year (1900-2100)';
    return;
  }

  bornDate.classList.remove('border');
  msjBornDate.textContent = '';
}

//telephone

var telephone = document.getElementById('telephone');
var msjTelephone = document.getElementById('false5');

telephone.addEventListener('blur', validateTelephone);
telephone.addEventListener('focus', function() {
  msjTelephone.textContent = '';
  telephone.classList.remove('border');
});

function validateTelephone() {
  var telephoneValue = telephone.value;
  if (validateNumbers(telephoneValue) || telephoneValue.length !== 10) {
    isValid = false
    telephone.classList.add('border');
    msjTelephone.textContent = 'Only numbers and must have 10 numbers';
  } else {
    isValid = true
    telephone.classList.remove('border');
    msjTelephone.textContent = '';
  }
}

//address
var address = document.getElementById('address');
var msjAddress = document.getElementById('false6');

address.addEventListener('blur', validateAddress);
address.addEventListener('focus', function() {
    msjAddress.textContent = '';
    address.classList.remove('border');
});

function validateAddress() {
    var addressValue = address.value;
    var spaceIndex = addressValue.indexOf(' ');
    console.log (spaceIndex)

    var isValid = true
    if(!validateAlphanumeric(addressValue) || (addressValue.length < 5) || (spaceIndex < 3)){
        isValid = false;
    } 
    if(isValid) {
        address.classList.remove('border');
        msjAddress.textContent = '';   
    } else {
        address.classList.add ('border');
        msjAddress.textContent = 'Must have an alphanumeric code'
    }
}   
        
//town
var town = document.getElementById('town');
var msjTown = document.getElementById('false7');

town.addEventListener('blur', validateTown);
town.addEventListener('focus', function() {
    msjTown.textContent = '';
    town.classList.remove('border');
});
    
    function validateTown() {
        var townValue = town.value;
        var spaceIndex = townValue.indexOf(' ');
        console.log (spaceIndex)
    
        if (!validateAlphanumeric(nameValue) || nameValue.length < 3) {
          }      
        } 
        if(isValid) {
            address.classList.remove('border');
            msjTown.textContent = '';   
        } else {
            var isValid = false
            address.classList.add ('border');
            msjTown.textContent = 'Must have an alphanumeric code'
        }

//Postal code
var postalCode = document.getElementById('postal Code');
var falsePostalCode = document.getElementById('false8');

postalCode.addEventListener('blur', validatePostalCode);
postalCode.addEventListener('focus', function() {
    falsePostalCode.textContent = '';
    postalCode.classList.remove('red');
});

function validatePostalCode() {
    var postalCodeValue = postalCode.value;
    var isValid = true
    if (validateNumbers(postalCodeValue) || postalCodeValue.length < 4 || postalCodeValue.length > 5) {
        isValid = false
        postalCode.classList.add('border');
        falsePostalCode.textContent = 'Only numbers and must have between 4 and 5 numbers';
    } else {
        postalCode.classList.remove('border');
        falsePostalCode.textContent = '';
    }
}

//e-mail
var emailInput = document.getElementById('E-mail');
var msjEmail = document.getElementById('false9');

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
        emailInput.classList.add('border');
        msjEmail.textContent = 'you must get into a valid e-mail';
    }
}

//password
var passwordInput = document.getElementById('password');
var msjPassword = document.getElementById('false10');

passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function() {
  msjPassword.textContent = '';
  passwordInput.classList.remove('border');
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

//repeat password
var passwordInput = document.getElementById('password');
var repeatPasswordInput = document.getElementById('repeatPassword');
var msjRepeatPassword = document.getElementById('false11');

repeatPasswordInput.addEventListener('blur', validateRepeatPassword);
repeatPasswordInput.addEventListener('focus', function() {
  msjRepeatPassword.textContent = '';
  repeatPasswordInput.classList.remove('red', 'border');
});

function validateRepeatPassword() {
    var passwordValue = passwordInput.value;
    var repeatPasswordValue = repeatPasswordInput.value;
    var isValid = true
    if (!repeatPasswordValue) {
        isValid = false
        repeatPasswordInput.classList.add('border');
        msjRepeatPassword.textContent = 'Enter the password again';
    return;
    }

    if (passwordValue !== repeatPasswordValue) {
        isValid = false
        repeatPasswordInput.classList.add('border');
        msjRepeatPassword.textContent = 'The passwords are not the same';
    return;
    }

    repeatPasswordInput.classList.remove('border');
    msjRepeatPassword.textContent = '';
}

//form

var form = document.getElementById('form')
console.log(form)
form.addEventListener('submit', send)
form.preventDefault()

function send (){
    if(
        nameFirst.classList.contains('border') 
        || surname.classList.contains('border')
        || dni.classList.contains('border')
        || address.classList.contains('border')
        || postalCode.classList.contains('border')
        || telephone.classList.contains('border')
        || town.classList.contains('border')
        || emailInput.classList.contains('border')
        || bornDate.classList.contains('border')
        || passwordInput.classList.contains('border')
        || repeatPasswordInput.classList.contains('border')
    )
        alert ('incorrect data');
    else {
        alert (
            nameFirst.value + ' ' + 
            surname.value + ' ' + 
            dni.value + ' ' + 
            address.value + ' ' + 
            postalCode.value + ' ' + 
            telephone.value + ' ' + 
            town.value + ' ' + 
            emailInput.value + ' ' + 
            bornDate.value + ' ' + 
            passwordInput.value + ' ' + 
            repeatPasswordInput.value
            )
    }
}













  









