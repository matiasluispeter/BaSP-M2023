console.log('EXERCISE 5: FOR')

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
mostrar una alerta utilizando cada una de las palabras. */

console.log('Exercise 5.a:')

var words = [
  'car', 
  'bike', 
  'train', 
  'ship', 
  'foot'
];
for (var i = 0; i < words.length; i++) {
  alert(words[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
palabra modificada */

console.log('Exercise 5.b:')

var words = [
  'car', 
  'bike', 
  'train', 
  'ship', 
  'foot'
];

var firstLetter = [];

for (var i = 0; i < words.length; i++) {
  var firstLetterCapitalized = words[i][0].toUpperCase() + words[i].substring(1);
  firstLetter.push(firstLetterCapitalized);
  alert(firstLetterCapitalized);
}

console.log(firstLetter);

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa */

console.log('Exercise 4.c:');

var words = [
  'car', 
  'bike', 
  'train', 
  'ship', 
  'foot'
];
var sentence = '';
for (var i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}
alert(sentence);

/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('Exercise 4.d:');

var main = [];
for (var i = 0; i < 10; i++) {
  main.push(i);
}
console.log(main);

