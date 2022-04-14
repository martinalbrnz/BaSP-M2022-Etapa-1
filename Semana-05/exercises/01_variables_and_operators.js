console.log('--EXERCISE 1: VARIABLES AND OPERATORS');
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
// números en una 3er variable.

console.log('Exercise 1.a:');

var numVar1 = 9;
var numVar2 = 4;

var resultExerciseA = numVar1 + numVar2;

console.log('Sum of', numVar1, 'and', numVar2,'is' , resultExerciseA);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Exercise 1.b:');

var stringVar1 = 'Hello';
var stringVar2 = 'world';

var resultExerciseB = stringVar1.concat(stringVar2);

console.log('Concat of', stringVar1, 'and', stringVar2,'is' , resultExerciseB);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
// guardando el resultado de la suma en una 3er variable (utilizar length).

console.log('Exercise 1.c:');

var stringVariable1 = 'Good';
var stringVariable2 = 'morning';

var resultExerciseC = stringVariable1.length + stringVariable2.length;

console.log('Length of', stringVariable1, 'plus length of', stringVariable2,'is' , resultExerciseC);