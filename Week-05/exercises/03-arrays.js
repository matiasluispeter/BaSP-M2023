console.log('EXERCISE 3: ARRAYS')

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('Exercise 3.a:')

var month = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
]; 
console.log(month[4]);
console.log(month[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)*/

console.log('Exercise 3.b:')

var month = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];
month.sort();

console.log(month);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push) */

console.log('Exercise 3.c:')

var month = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];
month.unshift('Matias');
month.push('Peter');

console.log(month);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop) */

console.log('Exercise 3.d')

var month = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];
month.shift(); 
month.pop();

console.log(month);

/* e. Invertir el orden del array (utilizar reverse) */

console.log('Exercise 3.e')

var month = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];
month.reverse();

console.log(month);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join)
*/

console.log('Exercise 3.f:')

var month = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];
var monthUnit = month.join('-');

console.log(monthUnit);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice) */

console.log('Exercise 3.g:')

var meses = [
    'Enero',
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
];
var mesesCopy = meses.slice(4, 11);

console.log(mesesCopy);
