// location.reload() refreshs the pach, prompt("hello") displays hello and erquests a string
//Types::::
//BASIC STRING METHODS
const myVariable = "Mathemtaics"; //THis means it cant be changed
console.log(myVariable.length); //Gives length
myVariable.charAt("M"); // myVariable[3]  can do this instead of charAt
myVariable.indexOf("ati");
myVariable.indexOf("at");
myVariable.slice(1, 5); //gives [1,5)
myVariable.includes("at"); //returns boolean
myVariable.split("e"); // array split at e. If string is empty, it is an array of all the cahracters
let temp2 = `hello world my name is ${myVariable}`; //This is like fstrings NOTE: I use ` not '
console.log(temp2);
//Numbers
//both float and intengers are type of number datatype
Number("10"); //this converts the string into a Number type. If not given a number it would return NaN or not a number. except for booleans
Number.isInteger(10); //return true if it is an intenger or not
console.log(typeof Number.parseFloat("3.232abc").toFixed(2).toString()); //This is chaining. I first make a float, then remove all but 2 decimal, then return string
Number.isNaN("Dave"); //return true if type is both a number and value is NaN, so this case false since type not number
isNaN("Dave"); //this just checks if it is NaN, so it is true.

//Math Methods & Propertieis
Math.trunc(Math.PI); //removes dicimeal
//Math.round, math.ciel, math.floor does those operations on input number
Math.pow(2, 3); // 2**3
Math.min(1, 2, 3, 4, 5); //returns smallest. same for max
Math.random(); //returns random [0,1)

console.log("Dave".charAt(Math.floor(Math.random() * 4))); //return random letter from

//Terinary operator:
let soup = 1 === 1 ? "chicken" : "beef"; //basically if/else setting for a variable

let name = prompt("pleae give your name"); //Stanbdard input for JS. Either string or null

//
//
// FUNCTIONS & METHODS

function sum(a, b) {
  return a + b;
}

//Anonomous function, basically function without a name. Then you can make it equal a variable
const getUserNameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};
//Arrow functions, basically remove function term and put arrow
const getUserNameFromEmail2 = (email) => {
  return email.slice(0, email.indexOf("@"));
};

/*

Scope and Var, Let, Const
You can use let/const to declare same variable in DIFFERENT SCOPES.
You can reference global variables, but inner scopes won't impact global scopes
As a result., scopes can go inner, but they can't go outter. EXCEPT VAR
Example:
Var x = 10
{
    var x = 20 //now x is 20 outside. This isnt the case for const/let
}
*/
//Var -> Mostly just legacy code.
var x = 10;
var x = 20; //This doesnt give an error, but let would. This is one isuse w/ var.

/*
Arrays!!
Like python, you can put multile types in an array
*/
const myArray = [];
myArray[0] = 100;
myArray[1] = true; //This ADDS!!!!
myArray[1]; //this gets the index. So if you assign it assums it exists and adds it, else it checks
//What happens if you try to add not in order?
myArray[4] = 10; //This makes all vlaues you didn't add to be type & value undefined
myArray.push(10); // now it is acting like a stack. Can do .pop() too
myArray.unshift(1000); //this is appendleft. //O(N). .shift() is popleft O(N)
const newString = myArray.join(" "); //Makes a string of adding everything together.
const temp = [...myArray, ...myArray]; // SPREAD OPERATOR. It says don't include myArray but includ everything that is in there.

//OBJECTS
//They are made in key-valye pairs
const myObj = {
  objectName: "Dave",
  answer: true,
  hobbies: ["eatting", "cooking"],
  action: function () {
    return `Hello ${this.objectName}`;
  }, // Object's function
};
myObj.temp = 100; //This adds thta variable into the object

myObj.answer; // or myObj["answer"] calls the variable in the object.
const secondObj = Object.create(myObj); //This makes an exact copy
Object.keys(myObj); //Returns array of strings of all the variables. .values() returns array of all their values

//FOR IN LOOP:
//Basically for each
for (let number in myObj) {
  console.log(number); //Here it returns all the keys as string.
}
delete myObj.answer; //deletes it
myObj.hasOwnProperty("answer"); //checks if property exists
// Destructuring objects
const { hobbies: currentHobbies, objectName: myName } = myObj;
//This says take out the value of hobbies,objectName in myObj and put then into variables called currentJobbies/myName
//deconstructor constructor
//Classes:
class Pizza {
  constructor(type) {
    this.type = type;
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    console.log(" Baking!");
  }
  get pizzaCrust() {
    return this.crust;
  }
  set pizzaCrust(crust) {
    this.crust = crust;
  }
}

const myPizza = new Pizza("extra cheese");
// you can change type like myPizza.type but you shouldn't do that. You should use get/set methods
//When you do myPizza.pizzaCrust it calls get method for pizzaCrust type. If it doenst exist, it allows u to directly modify it
//You could always just make the method getPizzaCrust, setPizzaCrust for it to act as a method
//Inheritaance:
class specialPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize); //need to call super befor being able to use this keyword
    this.type = "The works";
  }
}
/*
UPDATE: Before you tell users it is prive by : this._size. But there is no enforcing. 
NOW: THIS IS 2021 update, so doesnt work in all browsers:
you can first call the variable w/ #, so you must first outside the constructor do #size; then this.#size = 10
But many browsers havent updated yet
*/

//JSON
// Here it will make a string that depicts dictonary of the key/value. It doesn't include the functions

const sendJSON = JSON.stringify(myObj);

const recieveJSON = JSON.parse(sendJSON); //This gives back the object. Remember it doesnt include the method. It is of type Object

//ERROR HANDELING
// Put "use strict"; at the top of JS file so it doesn't ignore many errors.
// Honeslty being very extra. Can do console.log, .warn, .error to handel what u want to send to the user oconsole log.
//try {} catch(err ){} finally{} is the catch/try/final structure

//DOM - Document Object Model.
// remember .view usually means class and #view means id
const view1 = document.getElementById("view1"); //this gives an element by the ID
const view2 = document.querySelector("#view2"); //This is another way of getting an ID.
view1.style.display = "flex"; //this changes the display css element of the id
const views = document.getElementsByClassName("view"); //this gives the elements w/ that class
const sameView = documnet.querySelectorAll(".view"); //same thing as last line, it gives the class

const divs = view1.querySelectorAll("div"); //here you get all the divs in the view1 ID
const sameDivs = view1.getElementsByTagName("div"); //same thing. Difference is that QUERYSELECTALL gives it in Node format while element gives the html elements themselves
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); // this gives the even divs, again an array of nods
// can then evenDivs[i] to access it, change the style w/ .style in front of that
//can do evenDivs[0].parentElement to get the view1 id html code back again
//or parentElement.children to gets the children divs
//From a child youc can always check its siblings too
const navText = document.querySelector("nav h1"); //this means inside the navbar give me what is inside the h1 tag
navText.textContent = "hello world";
const navBar = document.querySelector("nav");
navBar.innerHTML = `<h1> Hello! </h1> <p> This should be in the right`;
/*
REMEMBER: JS is camelcase, so for example, if you want to reference view1's flex direction:
in css it is : flex_direction
in js it is : view1.style.flexDirection, aka camelcase

*/

const createDivs = (parent, text) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = text;
  newDiv.style.background = "#000";
  newDiv.style.width = "100px";
  parent.append(newDiv);
};

//
//EVENT LISTENERS
//SYNTAX: addEventListener(event,function,useCapture) to add an event or removeEventListener(event,function,useCapture) to remove it
/*
useCapture is set to false by default. What that variable means is that if you set it to false it does event bubbling. 
This means if click event is triggered, it would also trigger the click event of all its parents and so on. 
if you set useCapture to true, all the clicks go to the children not the parent. 

If you want to avoid event bubbling all together, call the event.stopPropagation(); method
*/
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
const doSomething = () => {
  alert("doing something");
};
h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);
h2.addEventListener("click", (event) => {
  //Here event represents what just happened
  //NOTE: we could do h2.textContent. What is the difference?
  /*
  When i do event, it repersents the object that triggered the event. Most cases it would be h2 for this one, but not always
  Lets say h2 has a child called h3. H3 gets clicked and that gets propagted to h2 click event. 
  At this case, event represents H3, not H2!!!

  */
  // h2.classList.toggle("purle"); This adds this class if it doesnt exist, or deletes it if it exists
  // h2. classList.add("purle"); This adds that class. .remove("red") removes that tclass

  event.target.textContent = "clicked"; //target represents the element you just clicked aka h2. Then we changed its textContent
  // event.preventDefault() // this stops the click events default behavior by default JS. USeful for stuff like forms since forms default behavior is to refersh the page
});

document.addEventListener("readystatechange", (event) => {
  //here readystatechange is the event where the html has been rendered and is ready. Usually we do this and call init function
  if (event.target.readyState === "completed") {
    //put initapp() method here
  }
});

//WEB STORAGE API
/*
Not part of the DOM api. Refers to the Window API
Available to JS via the global variable window
*/
const myObject = {
  name: "Dave",
  logName: function () {
    console.log(this.name);
  },
};
//  sessionStorage is storage of the data while ur in the url/tab/browser. It gets erased when u exit the tab/browser
// localStorage stores data that will be pesistent throughout the tabs. So you can close the tabs and still have access to the data
//to find sessionStorage go to dev tools, sessionStorage tab
//NOTE: SESSION & LOCAL STORAGE STORE DATA IN STRINGS SO YOU SHOULD USE JSON
//Remember that json would only send the objects and not the functions inside the objects
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
const sessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
console.log(sessionData);
sessionStorage.removeItem("mySessionStorage"); //returns null if it doesnt exist
sessionStorage.clear(); //this removes everything

//
//
// JS Modules
import playGuitar from "./guitar.js"; //this is how you import a default fuinction
import { shredding as shred } from "./guitar.js"; //this is how you import a non-default function, also how you do alias
// can do import * as Guitar from "./guitar" but now you'd refernce the default method as Guitar.default
