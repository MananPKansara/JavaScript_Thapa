// js date objects represent a single moment in the time in a platform-independent format.
// Date objects contain a number that represents milliseconds since 1 january 1970 UTC.
// there are 4 ways to create date objects :
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// new Date()
// Date objects are created with new Date() constructor
// console.log(new Date());
// console.log(new Date().toString());
// console.log(new Date().toLocaleString());

// Date.now()
// returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
// console.log(Date.now());

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// console.log(new Date(2022, 02, 26, 6, 34, 23, 111 ).toLocaleString());
// console.log(new Date(2022, 02, 26 ).toLocaleString());
// console.log(new Date(2022).toLocaleString()); // useless without month argument
// console.log(new Date(2022, 02).toLocaleString()); // minimum we should give two arguments

// new Date(date string) creates a new date objects from a date string
// console.log(new Date("October 13, 2021 11:13:00").toLocaleString());

// new Date(millisecind)
// console.log(new Date(32341222222314).toLocaleString());


// date methods

const curDate = new Date();

// get the individual date
// console.log(curDate.toString());
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0 to 11
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// how to set the individual date
// console.log(curDate.setFullYear(2020));
// console.log(new Date(curDate.setFullYear(2020)).toLocaleString());
// console.log(curDate.setMonth(3));
// console.log(curDate.setDate(3));
// console.log(curDate.setDay(5)); // we can not set day as it is derived from the date


// time methods
// console.log(curDate.getTime()); // returns number of millisecond
// console.log(curDate.getHours()); //0-23
// console.log(curDate.getMinutes());
// console.log(curDate.getSeconds());
// console.log(curDate.getMilliseconds());

// set time
// console.log(curDate.setHours(22)); 
// console.log(curDate.setMinutes(4));
// console.log(curDate.setSeconds(55));
// console.log(curDate.setMilliseconds(12));


console.log(curDate.toLocaleString());
console.log(curDate.toLocaleTimeString());
console.log(curDate.toLocaleDateString());
