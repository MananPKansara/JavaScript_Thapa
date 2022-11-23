// a js string is zero or more character written inside quotes
// strings are used for storing and manipuating text
// we can use single or double quotes 
// string can be created as primitive(data type) from literals, or as object using String() constructor

// let myName = "Manan";
// let mySurname = new String("Kansara"); // we should not use this
// console.log(myName);
// console.log(mySurname);

// Length of the string
// String.prototype.length
// console.log(myName.length);

// Escape character
// let anySentence = "We are the so-called "Vikings" from the north."; // error 
// console.log(anySentence);
// anySentence = "We are the so-called \"Vikings\" from the north."; // error 
// if we do not want to mess, simply use alternate quotes
// let anySentence = "We are the so-called 'Vikings' from the north."; // error 
// console.log(anySentence);
// we should do leternate things also
// we write single and double quotes in ``(backticks)


// Finding a String in a String
const myBioData = "My name is Manan Kansara";

// String.prototype.indexOf(searchValue [, fromIndex])
// indexOf() returns the index of the first occurence of a specified txt in the given string
// returns -1 if not found  
// console.log(myBioData.indexOf("manan"));
// console.log(myBioData.indexOf("Manan"));
// console.log(myBioData.indexOf("na"));
// console.log(myBioData.indexOf("na",4)); // start searching from index no 4

// String.prototype.lastIndexOf(searchValue [, fromIndex])
// searches from last index
// console.log(myBioData.lastIndexOf("na"));

// Searching for a string in a string
// search() methode used
// same as search but can not give the index from where it starts searches and it onlu searching from the start
// console.log(myBioData.search("na"));

// Extracting string parts
// there are three methods for extracting a part of a string
// slice(start, end)
// substring(start, end)
// substr(start, length)

var str = "Apple, Banana, Kiwi"; 

// slice() method
// expect part of a string and returns the extracted part in a new string
// takes 2 parameters : start and end position(end not included)
// original array will not be changed
// console.log(str.slice(0,4)); // return string from index 0 to 3
// console.log(str.slice(4,1)); // if second number is less then first number in argument then it will return empty string 
// console.log(str.slice(0,-1)); // start from index 0 and end in last (index -1) index
// console.log(str.slice(3)); 

// substring() method
// similar to slice()
// diffrence is that substring() cannot accept negative indexes and if second number is less than first one then it will give op
// console.log(str.substring(0,4)); // return string from index 0 to 3
// console.log(str.substring(4,1));  


// substring() method
// similar to slice()
// the diffrent is that the second parameter specifies the length of the extracted string. cant give negative value
// console.log(str.substr(0,4)); // return string from index 0 to 3
// console.log(str.substr(4,1));  
// console.log(str.substr(-4)); // return last 4 character of the string   
  


// Replacing string content
// String.prototype.replace(searchFor, replaceWith)
// it replaces a specified value with another value in a string
// return a new string with modification
// case senitive
// let rep ="I am manan kansara manan";
// console.log(rep.replace('manan','Manan')); // replace first 'manan' from the string


// Extracting string character
// there are 3 methods for extracting string characters :
// 1. charAt(position)
// 2. charCodeAt(position)
// 3. property access [ ]

let str2 = "Hello World";

// charAt() method
// return character at a specified index in a string 
// console.log(str2.charAt(0));

// charCodeAt(position)
// return unicode(UTF-16) of the character at a spcified index in a string
// the unicode standar provides a unique number for every character, no matter the platform, device, application or language. 
// UTF-8 is a popular unicode encoding which has 88-bit code units 
// console.log(str2.charCodeAt(0));

// Property access
// ECMAScript 5 (2009) allows property access [ ] to string
// console.log(str[1]);



// Other useful method

// toUpperCase() and toLowerCase
// console.log("Manan Kansara".toLowerCase());
// console.log("Manan Kansara".toUpperCase());

// concat()
// let fName = "Manan";
// let lName ="Kansara";
// console.log(fName.concat(lName));
// console.log(fName + lName);
// console.log(fName.concat(" ",lName));
// console.log(fName + " " + lName);
// console.log(`${fName} ${lName}`);

// String.trim()
// it removes whitespace from the both sides of the string
// console.log("        manan    na  n    ".trim());

var text = "a,b,c,d,e";

// Converting string to an array
// slpit() method
// console.log(text.split(","));
// console.log(text.split("|")); // return array with only one element