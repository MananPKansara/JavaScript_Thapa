// js is found in 1997 but it was not standardized
// in 1997, it is then submitted to ECMA international for standarization, which results in ECMAScript
// ES6 is its version and repleased on 2015. in this version ther are so many features added which makes js bit easy. after 2015 every year new versio of js is releasing(es7,es8 etc).
// ES6 is also called as morden javascript
// features added in es6
// - let and const
// - destructuring
// - template strings
// - object properties
// - default arguments
// - arrow function
// - rest operators
// - spread operators


// 1.let vs const vs var

// var => function scope
// let and const => block scope



// var name1 = "Manan";
// console.log(name1); 
// name1 = "Harsh"; 
// console.log(name1); 

// let name2 = "Manan";
// console.log(name2); 
// name2 = "Harsh";
// console.log(name2);

// const name3 = "Manan";
// console.log(name3); 
// name3 = "Harsh"; // error : assignment to constant variable
// console.log(name3);



// function biodata1()
// {
//     var firstname = "Manan";
//     console.log(firstname);
//     if(true)
//     {
//         var lastname = "Kansara";
//         console.log("inner " + firstname);
//         console.log("inner " + lastname);
//     }
//     console.log("outer " + lastname);
// }
// // console.log(firstname); // error : variable not defined. so it is function scope
// biodata1();

// function biodata2()
// {
//     let firstname = "Manan";
//     console.log(firstname);
//     if(true)
//     {
//         let lastname = "Kansara";
//         console.log("inner " + firstname);
//         console.log("inner " + lastname);
//     }
//     // console.log("outer " + lastname); 
//     // here it shows the error coz scope of lastname variable is under the if statement. so let and const has block scope. here firstname's scope is whole function
// }
// // console.log(firstname); // error coz of scope
// biodata2();


// 2.Template Literals (Template Strings)
// for(let num=1; num<=10; num++)
// {
//     let tableOf = 12;
//     // console.log(tableOf + " * " + num + " = " + tableOf*num); // log way to write
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`); // we can only write template literals between ``
// }



// 3.Default Parameters
// default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
// function multi(a,b)
// {
//  return a*b;
// }
// console.log(multi(3)); //ans NaN coz we have given only one number is given

// function mult(a,b=5)// if we give value for b then it will multiply and if we do not give then it will take b as 5
// {
//     return a*b;
// }
// console.log(mult(3)); 
// console.log(mult(4,5));



// 4.Fat Arrow Function
console.log(sum1());
function sum1(){
    let a=5, b=10;
    let sum = a+b;
    return `The sum of the two number is ${sum}.`;
};
console.log(sum1());
// in the traditional function we can call the function before and after the declaration

// console.log(sum2());
// in the arrow function we can not call the function before the declaration

// const sum2 = () => { // it is not asynchronous expression
//     let a=5, b=10;
//     let sum = a+b;
//     return `The sum of the two number is ${sum}.`;
// };
// OR
const sum2 = () => `The sum of the two number is ${5+5}.`
// if the function has only the return value then we can omit return keyword and braces
console.log(sum2());