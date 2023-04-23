
//name
var nameFirst = document.getElementById('nameFirst');
var msj = document.getElementById('false1');
console.log(nameFirst)

nameFirst.addEventListener('blur', validateName)
nameFirst.addEventListener('focus', function() {
    msj.textContent = ''
nameFirst.classList.remove('red')
})
  function validateName(){
    var nameValue = nameFirst.value.trim();
    var isValid = true;
    for (let i = 0; i < nameValue.length; i++) {
      var charCode = nameValue.charCodeAt(i);
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        isValid = false;
        break;
      }
    }
    if (nameValue.length < 3) {
      isValid = false;
    }
    if ((isValid) || (nameValue == "")) {
      msj.textContent = "";
      nameFirst.classList.remove('red')
    } else {
        nameFirst.classList.add('border')
      msj.textContent = "Must contain only letters and 3 or more characteres";
    }
  }

//surname
var surname = document.getElementById('surname');
var msj = document.getElementById('false2');
console.log(surname)

surname.addEventListener('blur', validatesurname)
surname.addEventListener('focus', function() {
    msj.textContent = ''
surname.classList.remove('red')
})
function validatesurname() {
    var surnameValue = surname.value.trim();
    var isValid = true;
    for (let i = 0; i < surnameValue.length; i++) {
      var charCode = surnameValue.charCodeAt(i);
      if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        isValid = false;
        break;
      }
    }
    if (surname.length < 3) {
      isValid = false;
    }
    if ((isValid) || (surnameValue == "")) {
      msj.textContent = "";
      surname.classList.remove('red')
    } else {
        surname.classList.add('border')
      msj.textContent = "Must contain only letters and 3 or more characteres";
    }
}

//dni
var dni = document.getElementById('DNI')
var msjdni = document.getElementById('false3')
console.log(dni)

dni.addEventListener ('blur', validateDni)
dni.addEventListener ('focus', function() {
    msjdni.textContent = ''
    dni.classList.remove('red')
})

function validateDni() {
    var dniValue = dni.value;
if (isNaN(dniValue) || dniValue.length !==8) {
    dni.classList.add ('border')
    msjdni.textContent = 'Only numbers and must have more than 7 numbers'
}
if (dniValue == 8 || (dniValue = '')) {
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
  bornDate.classList.remove('red', 'border');
});

function validateBornDate() {
  var bornDateValue = bornDate.value;

  if (!bornDateValue) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must get into a born date';
    return;
  }

  var parts = bornDateValue.split('/');
  if (parts.length !== 3) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'you must get into a born date with dd/mm/aaaa format';
    return;
  }

  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must get into a valid born date';
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
  telephone.classList.remove('red');
});

function validateTelephone() {
  var telephoneValue = telephone.value;
  if (isNaN(telephoneValue) || telephoneValue.length !== 10) {
    telephone.classList.add('border');
    msjTelephone.textContent = 'Only numbers and must have 10 numbers';
  } else {
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
    address.classList.remove('red');
});

function validateAddress() {
    var addressValue = address.value.trim();
    var spaceIndex = addressValue.indexOf(' ');

    if (addressValue.length < 5 || spaceIndex < 1 || spaceIndex === addressValue.length - 1) {
        address.classList.add('border');
        msjAddress.textContent = 'The address must contain only letters, numbers and a space in the middle';
    } else {
        var validChars = true;
        for (var i = 0; i < addressValue.length; i++) {
            var charCode = addressValue.charCodeAt(i);
            if (!(charCode >= 48 && charCode <= 57) && 
                !(charCode >= 65 && charCode <= 90) && 
                !(charCode >= 97 && charCode <= 122) && 
                !(charCode === 32) 
            ) {
                validChars = false;
                break;
            }
        }
        if (validChars) {
            address.classList.remove('border');
        } else {
            address.classList.add('red');
            msjAddress.textContent = 'The address must contain only letters, numbers and a space in the middle';
        }
    }
}

//town
var town = document.getElementById('town');
var msjtown = document.getElementById('false7');

town.addEventListener('blur', validateTown);
town.addEventListener('focus', function() {
    msjtown.textContent = '';
    town.classList.remove('red');
});

function validateTown() {
    var townValue = town.value.trim();
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (!townValue || townValue.length < 4) {
        town.classList.add('border');
        msjtown.textContent = 'Text must be alphanumeric and have more than 3 letters';
    } else {
        var valid = true;
        for (var i = 0; i < townValue.length; i++) {
            if (letters.indexOf(townValue[i]) === -1 && !isNaN(townValue[i])) {
                valid = false;
                break;
            }
        }

        if (valid) {
            town.classList.remove('border');
            msjtown.textContent = '';
        } else {
            town.classList.add('border');
            msjtown.textContent = 'Text must be alphanumeric and have more than 3 letters';
        }
    }
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
    if (isNaN(postalCodeValue) || postalCodeValue.length < 4 || postalCodeValue.length > 5) {
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
  emailInput.classList.remove('red', 'border');
});

function validateEmail() {
  var emailValue = emailInput.value;

  if (!emailValue) {
    emailInput.classList.add('border');
    msjEmail.textContent = 'you must get into an e-mail';
    return;
  }

  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(emailValue)) {
    emailInput.classList.remove('border');
    msjEmail.textContent = '';
  } else {
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
  passwordInput.classList.remove('red', 'border');
});

function validatePassword() {
  var passwordValue = passwordInput.value;

  if (!passwordValue) {
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
    passwordInput.classList.remove('border');
    msjPassword.textContent = '';
  } else {
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

  if (!repeatPasswordValue) {
    repeatPasswordInput.classList.add('border');
    msjRepeatPassword.textContent = 'Enter the password again';
    return;
  }

  if (passwordValue !== repeatPasswordValue) {
    repeatPasswordInput.classList.add('border');
    msjRepeatPassword.textContent = 'The passwords are not the same';
    return;
  }

  repeatPasswordInput.classList.remove('border');
  msjRepeatPassword.textContent = '';
}






  









