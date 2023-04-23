//form
var form = document.getElementById('form')
console.log(form)
form.addEventListener('submit', send)

function send (event){
    alert(event)
    //event.preventDefault()
}

var nameFirst = document.getElementById('nameFirst');
var msj = document.getElementById('false1');
console.log(nameFirst)

nameFirst.addEventListener('blur', validateName)
nameFirst.addEventListener('focus', function(){
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
        nameFirst.classList.add('new')
      msj.textContent = "Must contain only letters and 3 or more characteres";
    }
  }

  
//focus
//nameInput.onfocus = function () {
  //  console.log('focus')
    //nameInput.classList.remove('greenborder')
//}

//name-input
/*
  var nameFirst = document.getElementsByName("nameFirst").value;
  var surname = document.getElementsByName("surname").value;
  var DNI = document.getElementsByName("DNI").value;
  var bornDate = document.getElementsByName("bornDate").value;
  var place = document.getElementsByName("place").value;
  var postalCode = document.getElementsByName("postalCode").value;
  var user = document.getElementsByName("user").value;
  var password = document.getElementsByName("password").value;
  var repeatPassword = document.getElementsByName("repeatPassword").value;
//se tiene que levantar un aler con los valores de los inputs
// submit , blur, focus son todos events

/*


function validateFormulator (event) {
    event.preventDefault();
}
var Name = document.getElementsByName ('Name').value;
//BLUR
nameInput.onBlur = function() {
    console.log('Blur')
    nameInput.classList.add('greenborder')
}
//FOCUS
nameInput.onfocus = function () {
    console.log('focus')
    nameInput.classList.remove('greenborder')
}




/*
var form = document.getElementById ('form');
var inputs = document.querySelectorAll('#form');

var expressions = {
Name: /^[a-zA-Z]{4,}$/;
Surname: /^[a-zA-Z]{4,}$/;
DNI: /^\d{8,}$/;
born:  /^(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/(19|20)\d{2}$/
telephone; /^\d{10}$/;
adreess: /^[\w\d\s]{5,}$/;
place: /^[a-zA-Z\d]{4,}$/;
e-mail; /^[^\s@]+@[^\s@]+.[^\s@]+$/;
password: /^(?=.[a-zA-Z])(?=.\d)[a-zA-Z\d]{8,}$/;
repeat-password; /^(?=.[a-zA-Z])(?=.\d)[a-zA-Z\d]{8,}$/;
}
*/





