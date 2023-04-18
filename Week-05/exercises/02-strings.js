console.log('EXERCISE 2: STRINGS')

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase) */

console.log('Exercise 2.a:')

var sentence = "welcome to new york";
var newSentence = sentence.toUpperCase();
console.log(newSentence);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('Exercise 2.b:')

var recomendation = "you should study";
var recomendationFive = recomendation.substring(0, 5);
console.log(recomendationFive);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Exercise 2.c:')

var jungle = "welcome to the jungle";
var jungleLength = jungle.substring(jungle.length - 3);

console.log(jungleLength)

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('Exercise 2.d:')

var completeName = "mATIAS pETER";
var correctName = completeName.substring(0, 1).toUpperCase() + completeName.substring(1).toLowerCase();

console.log(correctName);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('Exercise 2.e:')

var myName = "Matías Luis Peter";
var myNamePosition = myName.indexOf(" ");

console.log(myNamePosition);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */

console.log('Exercise 2.f:')

var model = "memberships uncopyrightable";
var space = model.indexOf(" ");
var newModel = model.substring(0, 1).toUpperCase() + 
model.substring(1, space).toLowerCase() +
" " +
model.substring(space + 1, space + 2).toUpperCase() +
model.substring(space + 2).toLowerCase();

console.log(newModel);

