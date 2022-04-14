console.log('--EXERCISE 2: STRINGS')
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Exercise 2.a:');

var longString = 'ThIs iS a saMpLe';

var longStringUpperCase = longString.toUpperCase();

console.log(longStringUpperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.b:');

var anotherLongString = 'Maybe this is a sample too';

var firstFiveChars = anotherLongString.substring(0,5);

console.log(firstFiveChars);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.c:');

var theThirdLongString = 'This is also a sample';

var lastThreeChars = theThirdLongString.substring(theThirdLongString.length-3, theThirdLongString.length);

console.log(lastThreeChars);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.d:');

var moreLongString = 'anOtHeR saMpLe teXT';

var formattedString = moreLongString.substring(0,1).toUpperCase() + moreLongString.substring(1).toLowerCase();

console.log(formattedString);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('Exercise 2.e:');

var longWithSpace = 'Example with space !';

var spaceIndex = longWithSpace.indexOf(' ');

console.log(spaceIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.f:');

var longWordsString = 'austraLopiTeCo generAcioNal';

var formattedSentence = longWordsString.substring(0, 1).toUpperCase() // A
 + longWordsString.substring(1, longWordsString.indexOf(' ')).toLowerCase() // ustralopiteco 
 + longWordsString.substring(longWordsString.indexOf(' '), longWordsString.indexOf(' ') + 2).toUpperCase() // G
 + longWordsString.substring(longWordsString.indexOf(' ') + 2, longWordsString.length).toLowerCase(); // eneracional

console.log(formattedSentence);