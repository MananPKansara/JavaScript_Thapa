// 5 + 10
// here 5 and 10 are operands
// + is operation
// and "5 + 10" is operation.rxit

// Operators

// Assignment Operator(=)
// it assigns a value to its left operand
var x = 5; 
var y = 5;
console.log(x == y);
console.log(" Is x and y are same : " + x == y);
// in the above js takes " Is x and y are same : "+x as a concatation and compare its result with y
// to write this kind of statements we should use es6
console.log(`Is x and y are same : ${x == y}`);

// Arithmatic Operator(+.-,*,/,%)
// it takes numeric values as their operands and returns a single numeric vaues

// Increment and Decrement operator(++,--)
// we can use it as a prifix or postfix
var x = 10;
var res = x++; // increment operator as postfix
console.log(res);
// for x++ + 5 ans is 10 
console.log(x); // first value of x is assigned to res and then increment operation is done
var y = 20;
var res = ++y + 5; // increment operator as prefix
console.log(res);
// for ++y + 5 ans is 26
console.log(y); // first value of y is incremented and then it wil assigned to the y 

// Comparision(==,!=,>,>=,<,<=)
// return boolean value

// Logical Operator(&& ,||,!)
// it is typucally used with boolean values and return boolean value

// String operators(+(concatation))
// return another string

// Conditional(ternary)
// a : b ? c


// Challenge
console.log(3**2); // 3 to power 2 (exponentiation operator)
console.log(10 ** -1); // 1/10

// swapping of two numbers without using extra variable
var num1 = 10;
var num2 = 20;
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(num1, num2); 


// Diffrent between == and ===
var p = 5;
var q = "5";
console.log(p==q); // only check the values
console.log(p===q); // check values and data type