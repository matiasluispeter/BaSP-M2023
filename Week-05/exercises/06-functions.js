console.log('EXERCISE 6: FUNCTIONS')

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('Exesrcise 6.a:')

function add(num1, num2) {
    return num1 + num2;
}
  var result = add(3, 5);
  console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no
es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar
el valor NaN como resultado */

console.log('Exercise 6.b:')

function add(num1, num2) {
  if (typeof(num1) == 'number' || typeof(num2) == 'number') {
    alert('this is not a number');
    return NaN;
  } 
  else {
    return num1 + num2;
  }
}
var result1 = add(3, 5);
console.log(result1);
var result2 = add(3, 'hola');
console.log(result2);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
 entero.*/

console.log('Exercise 6.c:');

function validateInteger(num) {
  if (num % 1 == 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(validateInteger(5));
console.log(validateInteger(2.5));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y
que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el
número convertido a entero (redondeado).*/

console.log('Exercise 6.d:')

function sumInt(num1, num2) {
  if (!typeof(num1) == 'number' || !typeof(num2) == 'number') {
    alert('One of the parameters has an error');
    return NaN;
  }
  if (!validateInteger(num1)) {
    alert('the first number is not an int');
    return Math.round(num1);
  }
  if (!validateInteger(num2)) {
    alert('the second number is not an int');
    return Math.round(num2);
  }
  return (num1 + num2);
}

console.log(sumInt(2, 3));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
que todo siga funcionando igual que en el apartado anterior.*/

console.log('Excercice 6e:')

function validate(num1, num2) {
  if (!typeof(num1) == 'number' || !typeof(num2) == 'number') {
    return 'this is not a number';
  }
  if (!validateInteger(num1)) {;
    return 'num1 is a real';
  }
  if (!validateInteger(num2)) {
    return 'num2 is a real';
  }
  return 'num1 and num2 are int';
}

function sumInt2 (num1, num2) {
  var option = validate(num1, num2)
  if (option == 'this is not a number') {
    alert('one of the parameters has an error');
    return NaN;
  }
  if (option == 'num1 is a real') {
    alert('the first number is not an int');
    return Math.round(num1);
  }
  if (option == 'num2 is a real') {
    alert('the second number is not an int');
    return Math.round(num2);
  }
  return (num1 + num2);
}

console.log(sumInt2(2.5, 3));
















