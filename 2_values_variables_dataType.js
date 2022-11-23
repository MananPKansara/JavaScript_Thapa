var myName = "Manan";
// here 'var' is variable(key) 
// myName is variable name
// "Manan" is value

console.log(myName);
// we can write this code in console and see the output
// we can write code in VS code and run in its terminal using NodeJS
// but we can not run .js file in browser if we want to run this code in browser then we have add this script in HTML file.

// Rules for naming variable
// 1. First character must be a letter or underscore or an dollar. You can't use a number as the first character.
// 2. The rest of the variable name can include any letter, any number, or the underscore. Can't use any other characters, including spaces.
// 3. Variable names are case sensitive.
// 4. No limit to the length of the variable
// 5. Can't use one of JavaScript's reserved words as a variable name.

// Data Types : 
// String
// Number
// Boolean
// undefined
// null
// BigInt
// Symbol
// Object

// String
var myName = "Manan";
console.log(myName);
console.log(typeof(myName));

// number 
var age = 20;
console.log(age);
console.log(typeof(age));

// boolean
var iAmManan = true;
console.log(iAmManan);
console.log(typeof(iAmManan));

// Challenges
console.log( 10 + "20"); // if any of number is string then + will do concatation operation
console.log( 9 - "4"); // bug as it give us result of substraction of the number and string
console.log( "Java " + "Script");
console.log( " " + " ");
console.log( " " + 0);
console.log( "Manan" - "Kansara"); 
console.log( true + true); // in js true represent 1 and false represent 0
console.log( true + false);
console.log( false + true);
console.log( false + false);
console.log( false - true);

// undefine : when we do not assign value to variable
var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));

// null 
var a = null;
console.log(a);
console.log(typeof(a)); // object. bug

// NaN : it is a property of the global object. In other words, it is a variale in global scope. The initial value of NaN is Not-A-Number.
// isNaN is used to check wether the value is number or not

console.log(NaN === NaN); // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(Number.NaN); // NaN
console.log(Number.isNaN(NaN)); // true