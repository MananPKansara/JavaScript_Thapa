// Object literal is simply a key:value data structure in one container
// Storing variables and function together in one container, we can refr this as an objects

// Two ways to create an object
// 1st way 
// let bioData = {
//     firstname : "Manan",
//     surname : "Kansara",
//     getData : function(){
//         console.log(`My name is ${firstname} and my surname is ${surname}`);
//     }
// }
// console.log(bioData.firstname);
// console.log(bioData.surname);
// bioData.getData();
// // 2nd way no need to write functions as well after es6
// let bioData2 = {
//     firstname : "Manan",
//     surname : "Kansara",
//     getData(){
//         console.log(`My name is ${firstname} and my surname is ${surname}`);
//     }
// }

// nested object
// let newObj = {
//     myName : "Manan",
//     info : {
//         age : 20,
//     }
// }
// console.log(newObj.myName);
// console.log(newObj.info.age);

// "this" keyword
// Defination of "this" object is that it contain the current context
// this object can have diffrent values  depending on where it is placed.
// console.log(this); // it refers to the current context and that is window global object. Try to run this statement in browdser
// console.log(this.alert("Hello"));
// const names = "Manan";
// function myName()
// {
//     // console.log(this);
// }
// myName(); // this referes to the global object here also

// const obj = {
//     myAge : 20,
//     myName(){
//         console.log(this);
//     } 
// }
// console.log(obj.myName()); // this referse to the current object here
// when we use this keyword out of the object then its context is window object.
// when we use this keyword in some object then its context is that object

// const newObj = {
//     myAge : 20,
//     myName : () => {
//         console.log(this);
//     }
// }
// newObj.myName(); // it referse to the global object. Try it in the browser. So we should not use fat arrow function with tis keyword

// let newBioData = {
//     myName : {
//         firstname : "Manan",
//         lastname : "Kansara"
//     },
//     myAge : 20,
//     getData(){
//         console.log(`My name is ${this.myName.firstname} ${this.myName.lastname}`);
//     }
// }
// newBioData.getData();
