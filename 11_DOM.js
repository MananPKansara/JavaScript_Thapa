// window is the main container or we can say the global object and any operations related to entire browser window can be a part of window object. whereas the Document Object Model(DOM) is the child of window object
// all the members like object,methods or properties. if they are the part of window object then we do not refer the window object. where in DOm we need to refer the document, if we want to use the document object, methods or propertirs
// window.location.href = location.href
// document.write != write
// window has methods, properties and objects. setTimeout() and setInterval() are the methods and document is the object of the window and it aslo has a screen object with properties descripbing the physical display.
// document deals with document, the HTML elements themselvs.

// The DOM is the document object model, which deals with the document, the HTML ellements themselves.
// ex : document.body.style.background = "red"

// the BOM is the Browser Object Model which deals with browser components aside from the document, like history,location, navigator and screen
// functions alert/confirm/prompt are also a part of BOM

alert(location.herf); // run it in console in browser
if(confirm("Want to visit instagram ? "))
{
    location.href = "https://www.instagram.com";
}

// history object
window.history.back(); // to go to previous link in the tab

// <HTML>..</HTML> is a root element of the DOM