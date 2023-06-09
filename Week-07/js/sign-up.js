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
    return cont = str.length;
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
var nameFirst = document.getElementById('nameFirst');
var msj = document.getElementById('false1');
nameFirst.addEventListener('blur', validateName)
nameFirst.addEventListener('focus', function() {
    msj.textContent = ''
nameFirst.classList.remove('border')
})
var nameValue;

function validateName(){
nameValue = nameFirst.value.trim();
var isValid = true;
    if (!validateLetters(nameValue) || nameValue.length < 3) {
        isValid = false;
        nameFirst.classList.add('border')
        msj.textContent = 'Must contain only letters and 3 or more characteres';
    }
    else {
        msj.textContent = '';
        nameFirst.classList.remove('border')
    }
}

var surname = document.getElementById('surname');
var msjSurname = document.getElementById('false2');
surname.addEventListener('blur', validateSurname)
surname.addEventListener('focus', function() {
    msjSurname.textContent = ''
    surname.classList.remove('border')
})
var surnameValue;
function validateSurname(){
    surnameValue = surname.value.trim();
    var isValid = true;
    if (!validateLetters(surnameValue) || surnameValue.length < 3) {
        isValid = false;
        surname.classList.add('border')
        msjSurname.textContent = 'Must contain only letters and 3 or more characteres';
    }
    else {
        msjSurname.textContent = '';
        surname.classList.remove('border')
    } 
  }

var dni = document.getElementById('DNI')
var msjdni = document.getElementById('false3')
dni.addEventListener ('blur', validateDni)
dni.addEventListener ('focus', function() {
    msjdni.textContent = ''
    dni.classList.remove('border')
})
var dniValue;
function validateDni() {
    dniValue = dni.value;

    var isValid = true
    if (validateNumbers(dniValue) || dniValue.length !==8) {
        isValid = false;
        dni.classList.add ('border')
        msjdni.textContent = 'Only numbers and must have more than 7 numbers'
    }
    else {
        dni.classList.remove('border')
        msjdni.textContent = ''
    }
}

var bornDate = document.getElementById('bornDate');
var msjBornDate = document.getElementById('false4');
bornDate.addEventListener('blur', validateBornDate);
bornDate.addEventListener('focus', function() {
  msjBornDate.textContent = '';
  bornDate.classList.remove('false', 'border');
});
var bornDateValue;
var born;

function validateBornDate() {
  bornDateValue = bornDate.value;

  if (!bornDateValue) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a birth date';
    return;
  }
  if (bornDateValue.substring(0,4) < 1900 || bornDateValue.substring(0,4) > 2008) {
    bornDate.classList.add('border');
    msjBornDate.textContent = 'You must enter a valid year (1900-2008)';
    return;

  } else {
    bornDate.classList.remove('border');
    msjBornDate.textContent = ''; 
    born = format(bornDateValue)
  }
}

function format(tool) {
    var year = tool.substring(0,4);
    var month = tool.substring(5,7);
    var day = tool.substring(8,10);
    var aux = month + '/' + day + '/' + year;
    return aux
}

var telephone = document.getElementById('telephone');
var msjTelephone = document.getElementById('false5');
telephone.addEventListener('blur', validateTelephone);
telephone.addEventListener('focus', function() {
    msjTelephone.textContent = '';
    telephone.classList.remove('border');
});
var telephoneValue;

function validateTelephone() {
    telephoneValue = telephone.value;
    if (validateNumbers(telephoneValue) || telephoneValue.length !== 10) {
        isValid = false
        telephone.classList.add('border');
    msjTelephone.textContent = 'Only numbers and must have 10 numbers';
    } else {
        telephone.classList.remove('border');
        msjTelephone.textContent = '';
    }
}

var address = document.getElementById('address');
var msjAddress = document.getElementById('false6');
address.addEventListener('blur', validateAddress);
address.addEventListener('focus', function() {
    msjAddress.textContent = '';
    address.classList.remove('border');
});
var addressValue;

function validateAddress() {
    addressValue = address.value;
    var spaceIndex = addressValue.indexOf(' ');
    var isValid = true
    if(validateAlphanumeric(addressValue) || (addressValue.length < 5) || (spaceIndex < 3)) {
        isValid = false;
        address.classList.remove('border');
        msjAddress.textContent = '';   
    } else {
        address.classList.add ('border');
        msjAddress.textContent = 'Must have an alphanumeric code, space and more than 5 characters'
    }    
}   

var town = document.getElementById('town');
var msjTown = document.getElementById('false7');
town.addEventListener('blur', validateTown);
town.addEventListener('focus', function() {
    msjTown.textContent = '';
    town.classList.remove('border');
});
var townValue;

function validateTown() { 
    townValue = town.value;
    var isValid = true
    if (townValue.length < 3 || (townValue === '')) {
        isValid = false
        town.classList.add('border');
        msjTown.textContent = 'Must have an alphanumeric code'
        }      
    else {
        address.classList.remove('border');
        msjTown.textContent = '';   
    }
}

var postalCode = document.getElementById('postal Code');
var falsePostalCode = document.getElementById('false8');
postalCode.addEventListener('blur', validatePostalCode);
postalCode.addEventListener('focus', function() {
    falsePostalCode.textContent = '';
    postalCode.classList.remove('red');
});
var postalCodeValue;

function validatePostalCode() {
    postalCodeValue = postalCode.value;
    var isValid = true
    if (validateNumbers(postalCodeValue) || postalCodeValue.length < 4 || postalCodeValue.length > 5 || 
    postalCodeValue === '') {
        isValid = false
        postalCode.classList.add('border');
        falsePostalCode.textContent = 'Only numbers and must have between 4 and 5 numbers';
    } else {
        postalCode.classList.remove('border');
        falsePostalCode.textContent = '';
    }
}

var emailInput = document.getElementById('E-mail');
var msjEmail = document.getElementById('false9');
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
        isValid = false
        emailInput.classList.add('border');
        msjEmail.textContent = 'you must get into a valid e-mail';
    }
}

var passwordInput = document.getElementById('password');
var msjPassword = document.getElementById('false10');
passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function() {
    msjPassword.textContent = '';
    passwordInput.classList.remove('border');
});
var passwordValue;

function validatePassword() {
    passwordValue = passwordInput.value;
    var isValid = true
    if (passwordValue.length == 0) {
        isValid = false
        passwordInput.classList.add('border');
        msjPassword.textContent = 'get into a password';
        return;
    }
    if (passwordValue.length < 8 || !validateAlphanumeric(passwordValue)) {
        isValid = false
        passwordInput.classList.add('border');
        msjPassword.textContent = 'you must get into a valid password (min 8 alphanumeric characters)';
        return;
    }
    else {
        isValid = true
        passwordInput.classList.remove('border');
        msjPassword.textContent = '';
    }
}
    
var passwordInput = document.getElementById('password');
var repeatPasswordInput = document.getElementById('repeatPassword');
var msjRepeatPassword = document.getElementById('false11');
repeatPasswordInput.addEventListener('blur', validateRepeatPassword);
repeatPasswordInput.addEventListener('focus', function() {
  msjRepeatPassword.textContent = '';
  repeatPasswordInput.classList.remove('red', 'border');
});
var repeatPasswordValue;

function validateRepeatPassword() {
    passwordValue = passwordInput.value;
    repeatPasswordValue = repeatPasswordInput.value;
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

var form = document.getElementById('form')
form.addEventListener("submit", function(e) {
    e.preventDefault()
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
        born = format(bornDate.value)
        var url = 'https://api-rest-server.vercel.app/signup?email=' + emailInput.value + '&password=' + passwordInput.value + 
        '&name=' + nameFirst.value + '&lastName=' + surname.value + '&dni=' + dni.value + '&address=' + address.value +
        '&zip=' + postalCode.value + '&phone=' + telephone.value + '&city=' + town.value +
        '&dob=' + born; 

        fetch(url) 
            .then(function (response) {
                return response.json();
            })
            .then(function(data) { 
                console.log(data)
                var dataObj = data.data;
                var strFinal='';
                for (var key in dataObj) {
                    if (dataObj.hasOwnProperty(key)) {
                        strFinal += key + ': ' + dataObj [key]
                    }
                }
                alert(strFinal)
                loadInfo();
            })
            .catch(function() {
            console.log('error')
            });
    }
})
function loadInfo() {
    localStorage.setItem('name', nameFirst.value)
    localStorage.setItem('lastName', surname.value)
    localStorage.setItem('dni', dni.value)
    localStorage.setItem('address', address.value)
    localStorage.setItem('zip', postalCode.value)
    localStorage.setItem('phone', telephone.value)
    localStorage.setItem('city', town.value)
    localStorage.setItem('email', emailInput.value)
    localStorage.setItem('dob', born)
    localStorage.setItem('password', passwordInput.value)
}
window.onload = function() {
    nameFirst.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('lastName');
    dni.value = localStorage.getItem('dni');
    address.value = localStorage.getItem('address');
    postalCode.value = localStorage.getItem('zip');
    telephone.value = localStorage.getItem('phone');
    town.value = localStorage.getItem('city');
    emailInput.value = localStorage.getItem('email');
    bornDate.value = changeFormat(localStorage.getItem('dob'));
    passwordInput.value = localStorage.getItem('password');
}

function changeFormat(aux) {
    if (aux === null) {
        return '';
    }
    else { 
        var yyyy = aux.substring(6, 10);
        var mm = aux.substring(0, 2);
        var dd = aux.substring(3, 5);
        var newDate = yyyy + "-" + mm + "-" + dd;
        return newDate;
    }
}














  









