// array is the collection of the elements
// in some languages elements must be of same type but js allow us to store elements of the diffrent data type
// in js we have an array class and arrays are the prototype of this class 

// var myFriends = new Array; // creating instance of the array class. But this line is not mandatory because js handles it when it see the square brackets.
myFriends = ["Manan",20,"male","Harsh",20,"male"];

// console.log(myFriends[0]);
// myFriends[4]=19;
// console.log(myFriends[4]);

// console.log(myFriends.length); // here length is a property not method
// console.log(myFriends[myFriends.length-1]); // displaying last elements

// all elements of array using for loop
// for(let i=0; i<myFriends.length; i++)
// {
//     console.log(myFriends[i]);
// }

// after ES6 we have for..in and for..of loop too
// for(let elements in myFriends)
// {
//     console.log(elements); // return index number
// }
// for(let elements of myFriends)
// {
//     console.log(elements); // return content
// }

// Array.prototype.forEach()
// calls a function for each element in the array
// myFriends.forEach(function(element, index, array) {
//     console.log(element + " index : " + index + " " + array);
// });
// we can get element index and array in for each
// we can not use break statement in forEach
// myFriends.forEach((element, index, array) => {
//     console.log(element + " index : " + index + " " + array);
// });
// fat arrow does not support this argument



// Searching and filter in an array

var arr = ["Manan","Harsh","Jenish","Manan","Abhi"];

// Array.prototype.indexOf()
// returns the first(least) index of an element within the array equal to an element, or -1 if none is found. It searches the element from the 0th index.
// console.log(arr.indexOf("Manan"));
// console.log(arr.indexOf("krunal")); // not found so will return -1


// Array.prototype.lastIndexOf()
// same as indexOf() but start searching from the last index
// console.log(arr.lastIndexOf("Manan"));


// Array.prototype.includes()
// return boolean value. if the element is found in array then it will return true otherwise true. It performs forwaard search.
// console.log(arr.includes("Manan"));
// console.log(arr.includes("manan")); 
// console.log(arr.includes("Man")); 

var prizes = [1000, 3000, 4000, 7000, 6000];

// Array.prototype.find()
// returns first element if it satisfies the function. Otherwise return undefined(if not found)
// return only one element
// function checkPrize(prize)
// {
//     return prize > 3000;
// }
// console.log(prizes.find(checkPrize));
// OR
// console.log(prizes.find((prize) => prize>3000));

// Array.prototype.findIndex()
// writtens found index if element satisfy the function otherwise return -1
// console.log(prizes.findIndex((prize) => prize>3000));
// console.log(prizes.findIndex((prize) => prize>9000));

// Array.prototype.filter()
// returns the new array containing all the elemnt of the calling array for which providing function is true
// console.log(prizes.filter((prize) => prize>5000));
// console.log(prizes.filter((prize) => prize>9000));



// Sorting in array

var months = ["jan", "feb", "mar","apr", "may"];  
var nums = [20, 50, 100, 4000 ];

// sorts the elemnt and returns sorted array 
// default sort order is accending 
// sorting is done by means of string
// console.log(months.sort());
// console.log(nums.sort()); // here sorting checks first char after that second third etc.



// Array Subsection : perfrom CRUD

const animals = ["cat", "goats", "sheep"];

// Array.prototype.push()
// it adds one or more elemnts to the end of an array and returns the new length of the array
// animals.push("chicken");
// animals.push("horse", "snake");
// console.log(animals.push("chicken")); // return length of updated the array
// console.log(animals);

// Array.prototype.unshift()
// it adds one or more elemnts to the begining of an array and returns the new length of the array
// console.log(animals.unshift("dog"));
// animals.unshift("dog");
// console.log(animals);

// Array.prototype.pop()
// it removes the last element from an array and returs thet element. This method changes the length of the array
// console.log(animals.pop());
// console.log(animals);

// Array.prototype.shift()
// it removes the first element from an array and returs thet element. This method changes the length of the array
// console.log(animals.shift());
// console.log(animals);

// Array.prototype.splice()
// adds and/or removes elements from an array
// const newMonth = months.splice(4,0,"Dec"); // 4 is index no. 0 represents we dont want to delete element. and "dec" is element we want to add at index no 4.
// console.log(months);
// console.log(newMonth); // it return elements that is deleted
// update "mar" to "Mar"
// const updateMonth = months.splice(2,1,"Mar"); // first delete "mar" which is at index 2 and then add "Mar" at 2
// console.log(months);
// console.log(updateMonth); // return "mar" which is deleted
// OR dynamically
// const indexOfMonth = months.indexOf("mar");
// if(indexOfMonth != -1)
// {
//     const updateMonth = months.splice(2,1,"Mar"); 
//     console.log(months);
// } 
// else
// {
//     console.log("No such data found");
// }
// console.log(months.splice(1,1));
// console.log(months);
// console.log(months.splice(1,Infinity)); // delete all elements form index no 1
// console.log(months.splice(1,2));



// Array Subsection : Map and Reduce Method

// Array.prototype.map()
// returs a new array containing the results of calling a function on evry element in this array
// returns new array with value which represnt element satisfy the function or not
// do not affect original array. it have ability to chain other methods like reduce, sort, filter. We can not do with forEach
// forEach method returns undefined
const array1 = [1,4,9,16,25];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 5;
// });
// console.log(array1);
// console.log(newArr);
// let newArr1 = array1.map((curElem,index,array) => {
//     return `Index np = ${index} and the value is ${curElem} belong to ${arr}`;
// });
// console.log(newArr1);

// Reduce method
// used to flattern an array means to convert the 3d or 2d array into a single dimension array
// reduce() method executes a reducer funcion on each element of the array, resulting in single output value.
// reducer function takes four arguments : 
// 1.Accumulator
// 2.Current value
// 3.Current index
// 4.Source array
// const array4 = [1,2,3,4,5];
// let sum = array4.reduce((accumulator, elem, index, array) => accumulator+=elem)
// console.log(sum);
// sum = array4.reduce((accumulator, elem, index, array) => {
//     return accumulator+=elem;
// },10); // initialize accumulator value to 10 
// console.log(sum);
// let twoD = [
//     [11,12],
//     [21,22],
//     [31,32]
// ];
// let flatArr = twoD.reduce((accum, curVal) => {
//     return accum.concat(curVal);
// })
// console.log(flatArr);


// challange

const array2 = [49,64,81];
// find the square root of this array elements
// let sqrt = array2.map((elem) =>  Math.sqrt(elem));
// console.log(sqrt);
// console.log(array2);

const array3 = [2,3,4,6,8];
// multiply each element of array with 2 and return elements greater than 10
// let ans = array3.map((elem) => elem*2).filter((elem) => elem>10);
// console.log(ans);