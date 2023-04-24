function validateLetters(str) {
    var file = str.toLowerCase();
    var letter = "abcdefghijkmnopqrstvwxyz";
    var cont = 0;

for (var i = 0; i< file.length; i++) {
    for (var j = 0; j < letter.length; j++) {
        if (file.substring(i, i+1) === letter.substring(j, j+1) || NaN){
            cont++;
            break;
        }
    }
}
return cont == file.length;
}

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
    if (isNaN(dniValue) || dniValue.length !==8) {
        var isValid = false;
        dni.classList.add ('border')
        msjdni.textContent = 'Only numbers and must have more than 7 numbers'
    }
    if (dniValue == 8 || (dniValue = '')) {
        isValid = true;
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
        var isValid = false
        bornDate.classList.add('border');
        msjBornDate.textContent = 'You must get into a born date';
    return;
    }

    var parts = bornDateValue.split('/');
    if (parts.length !== 3) {
        isValid = false
        bornDate.classList.add('border');
        msjBornDate.textContent = 'you must get into a born date with dd/mm/aaaa format';
    return;
    }

    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        isValid = false
        bornDate.classList.add('border');
        msjBornDate.textContent = 'You must get into a valid born date';
    return;
    }
    isValid = true
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
  if (isNaN(telephoneValue) || telephoneValue.length !== 10) {
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
    
        var isValid = true
        if(!validateAlphanumeric(townValue) || (townValue.length < 3)){
            isValid = false;
        } 
        if(isValid) {
            address.classList.remove('border');
            msjTown.textContent = '';   
        } else {
            address.classList.add ('border');
            msjTown.textContent = 'Must have an alphanumeric code'
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
    var isValid = true
    if (isNaN(postalCodeValue) || postalCodeValue.length < 4 || postalCodeValue.length > 5) {
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
  emailInput.classList.remove('red', 'border');
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













  









