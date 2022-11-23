// Function
// it a block of code desinged to perform a particular task
// it is group of reusable code
// before we use a function we need to define the function. function defination consist of the function keyword followed by the name of the function. A ist of parameters to the function, enclodes in parentheses and separated by commas.
// js statements that define the function, enclosed in curly brackets.
// efining function in js does not execute it.
// a js function is executed when something invokes it (calls it).

function sum()// defining the function
{
    var a = 10;
    var b = 20;
    console.log(`Sum is ${a+b}`);
}

sum(); // calling a function

// Function PArameters vs Function Arguments
// Function parametes are the names listed in the function's defination
// Function arguments are the real values passes to the function

function add(x,y)
{
    console.log(x+y);
}

add(3,4);

// we can not use same name of two function like method overloading in java

// function expression
// it simply means create a function and put it into the variable
var addition = add(5,5); // it is not complete function expression coz it returns no value

function sub(a,b)
{
    return a-b;
}
var substitution=sub(5,3);
console.log("subtitution is : "+substitution);

// Anonymous function : fuction without name
var mul = function(a,b) // anonymus function expression
{
    return a*b;
}
console.log("the multiplication is : "+mul(5,15));