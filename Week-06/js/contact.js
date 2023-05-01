//letters validations
function validateLetters(str) {
    var file = str.toLowerCase();
    var letter = 'abcdefghijkmnopqrstvwxyz';
    var cont = 0;

for (var i = 0; i< file.length; i++) {
    for (var j = 0; j < letter.length; j++) {
        if (file.substring(i, i+1) === letter.substring(j, j+1)){
            cont++;
            break;
        }
    }
}
return cont == file.length;
}

//number validations
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

//alphanumeric validations
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
        return (contNumber + contLetter) == letter.length;
    } else {
        return false;
    }        
}

//name
var nameFirst = document.getElementById('fname');
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
    if ((isValid) || (nameValue == '')) {
      msj.textContent = '';
      nameFirst.classList.remove('border')
    } else {
        nameFirst.classList.add('border')
        msj.textContent = 'Must contain only letters and 3 or more characteres';
    }
  }

//surname
var surname = document.getElementById('lname');
var msjSurname = document.getElementById('false2');
surname.addEventListener('blur', validateSurname)
surname.addEventListener('focus', function() {
    msjSurname.textContent = ''
    surname.classList.remove('border')
})

function validateSurname(){
    var surnameValue = surname.value.trim();
    var isValid = true;
   
    if (!validateLetters(surnameValue) || surnameValue.length < 3) {
      isValid = false;
    }
    if ((isValid) || (surnameValue == '')) {
      msjSurname.textContent = '';
      surname.classList.remove('border')
    } else {
        surname.classList.add('border')
        msjSurname.textContent = 'Must contain only letters and 3 or more characteres';
    }
  }

//e-mail
var emailInput = document.getElementById('E-mail');
var msjEmail = document.getElementById('false3');

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

var messageInput = document.getElementById('textarea');
var msjReason = document.getElementById('textarea');

reasonInput.addEventListener('blur', validateEmail);
reasonInput.addEventListener('focus', function() {
  msjReason.textContent = '';
  reasonInput.classList.remove('border');
});

var button1 = document.getElementById('make-query');
var button2 = document.getElementById('claim');
var button3 = document.getElementById('memberships');

reason.addEventListener("click", function(event) {
event.preventDefault();

if (button1.checked) {
    return 'I want to make a query or suggestion';
}
if (button2.checked) {
    return 'I want to make a claim';
}
if (button3.checked) {
    return 'I want to know the memberships and costs';
}
return false;
});





//form
var form = document.getElementById('form')
form.addEventListener("submit", function(e) {
    e.preventDefault()
    if(
        nameFirst.classList.contains('border') 
        || surname.classList.contains('border')
        || emailInput.classList.contains('border')
        || reasonInput.return('false')
    )
        alert ('incorrect data');
    else {
        alert ( 'Name: '+nameFirst.value + ' ' + 
            '\n Surname: '+surname.value + ' ' + 
            '\n e-mail: '+emailInput.value + ' '+
            '\n Reason for contact' +reasonInput.value

        )
    }
})