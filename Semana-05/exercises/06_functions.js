console.log('--EXERCISE 6: FUNCTIONS');

// Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
// de dicha variable en la consola del navegador.

console.log('Exercise 6.a:');

function suma(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

var mySum = suma(3, 7);

console.log('Sum of two numbers:', mySum); // 10

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros 
// no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar 
// el valor NaN como resultado.

console.log('Exercise 6.b:');

function suma(firstNumber, secondNumber) {
	if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number'){
		alert('One (or both) of the parameters is not a number!');
		return NaN;
	}
	return firstNumber + secondNumber;
}

var mySum = suma(3, 8); 
var mySumWithString = suma("f", 7);

console.log('Sum:', mySum); // 11
console.log('Sum with a string:', mySumWithString); // Nan

// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('Exercise 6.c:');

function validateInteger(integer){
	return (integer === Math.floor(integer));
}

var myInteger = validateInteger(5);
var myFloat = validateInteger(6.32);

console.log('Integer passed:',myInteger); // true
console.log('Float passed:',myFloat); // false

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
// En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('Exercise 6.d:');

function suma(firstNumber, secondNumber) {
	if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number'){
		alert('One (or both) of the parameters is not a number!');
		return NaN;
	}
	if (!validateInteger(firstNumber)) {
		alert(`${firstNumber} is not an integer`);
		firstNumber = Math.floor(firstNumber);
	}
	if (!validateInteger(secondNumber)) {
		alert(`${secondNumber} is not an integer`);
		secondNumber = Math.floor(secondNumber);
	}

	return firstNumber + secondNumber;
}

var mySumWithInts = suma(3, 8); 
var mySumWithFloats = suma(3.0, 8);
var mySumWithTwoFloats = suma(4.7, 5.6);
var mySumWithStrings = suma('asdf', 2)

console.log('Sum right:', mySumWithInts); // 11
console.log('Sum with floats:', mySumWithFloats); // 11
console.log('Sum with two floats:', mySumWithTwoFloats); // 9
console.log('Sum with string:', mySumWithStrings); // NaN

// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función 
// suma probando que todo siga funcionando igual.

console.log('Exercise 6.e:');

function integerValidator(myNumber) {
	return validateInteger(myNumber) ? myNumber : Math.floor(myNumber);
}

function suma(firstNumber, secondNumber) {
	if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number'){
		alert('One (or both) of the parameters is not a number!');
		return NaN;
	}
	firstNumber = integerValidator(firstNumber);
	secondNumber = integerValidator(secondNumber);

	return firstNumber + secondNumber;
}

var mySumWithInts2 = suma(5, 8); 
var mySumWithFloats2 = suma(7.0, 8);
var mySumWithTwoFloats2 = suma(5.7, 5.6);
var mySumWithStrings2 = suma('asdf', 3)

console.log('Sum right:', mySumWithInts2); // 13
console.log('Sum with floats:', mySumWithFloats2); // 13
console.log('Sum with two floats:', mySumWithTwoFloats2); // 10
console.log('Sum with string:', mySumWithStrings2); //NaN