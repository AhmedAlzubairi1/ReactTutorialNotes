//
//High order functions
/*
either takes or returns a function.
Ex)
.foreach( (x) => {console.log(x)}) //this does side effect, cant change values of x. 
.filter 
.map
.reduce
*/

// FETCH API, CALLBACKS, PROMISES, THENABLES, AND ASYNC/AWAIT
// Call backs are basically you put a function in a function and call it after the rest of that function is over
// This can cause callback hell when u do numerous callbacks. Solution: Promises!
/*
Promises have 3 states: Pending, Fulfilled, Rejected
A promise object can either resolve or  reject
In this first example we use then to process the promise. 
The value of value will be what is inside resolve. Aka "Resolved Promise"
we then return value+1, thus newValue is "Resolved Promise1"

If at any point you catch an error or it was instead rejected, it will go to catch
*/
const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Resolved promise");
  } else {
    reject("Rejected promise");
  }
});
//console.log(myPromise); //this gives the objected and state but what if you want to get that string that is from resolve?
myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    //console.log(newValue);
  })
  .catch((err) => {
    //console.log(err);
  });
const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);
//THAT IS ASYNC CODE! now if I have another code right after mypromise, that code would be executed if mypromise is too slow
//fetch returns a promise
//For get, u just do the url. FOr post you do the url and other parameter if needed.
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    //here we are guaranteed this promise is done
    return response.json(); //this returns a promise
  })
  .then((data) => {
    //now we are guaranteed response.json(), aka the return promise, is done.
    console.log(data);
  });

//Async & Await

const myUsers = {
  userList: [],
};
//When you have an async function you need to put async term
const mycoolFunction = async () => {
  //Here we are saying wait at this line until this async is finished. You can only ever use await inside an async  funciton
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //Now we do it again because response is not a promise since we did await, but response.json is a promise so we have to wait again
  const jsonUserData = await response.json();
  return jsonUserData;
};
//NOTE: We are guaranteed temp will be filled with the json data, but not that it will be right away.
//If you plan to work w/ temp, put it in another async function. Like anotherFunc
const temp = mycoolFunction();
console.log(temp);
console.log("lol");
// REMEMBER: If you plan to do any chacnes form a promise, you would need to also make those changes in an
//async function and put more awaits
//If you want to work with data you are waitinf for, you need to work with that data in an async funciton
//AGAIN: You can only guaranteee ordering IN AN ASYNC FUNCTION!!!, not outside
const anotherFunc = async () => {
  const data = await mycoolFunction();
  myUsers.userList = data;
};

const returnTwo = async () => {
  const data = await mycoolFunction();
  return 2;
};
const temp3 = returnTwo(); // this would not RETURN 4! this is because returnTwo() is a promise
console.log(temp3);
console.log(typeof temp3); // This is type object, it is a promise
//AGAiN: temp3 is a promise, value is the value of that promise
temp3.then((value) => {
  console.log(value); // This works because then only exectues after promise is resolved.
});

//IN this example, we use fetch's second paramter so it can be anything, not just get
const getDadJoke = async () => {
  //Here, second paratmer is an object. REmember {} is object, not a dict
  //NOTE: THIS IS IMPORTANT TO SPCIFIY THE TYPE OF DATA. In this case
  /*
  The url we are requesting is a full website, so doing get would give us the website. 
  Since we want the json data instead, we specifiyt that
  */
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      //Nested object
      Accept: "application/json", //This means the type of data we expect to get/return. In this case we don't want the website, we want json
    },
  });
  // See for more: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const jsonDadJoke = await response.json();
  //NOTE: You can also request text data instead of json:
  const response2 = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });
  console.log(response.headers.get("Content-type")); //this will tell you that the type is Application/json
  const textDadJoke = await response2.text();
  console.log(response); // this one would reques json data
  console.log(jsonDadJoke.joke);
  console.log(response2); // this one requests text data
  console.log(textDadJoke);
};
getDadJoke();

//Examle of doing post, here in post we send data and expect a confirmation response
const jokeObject = {
  id: "Jmjbxk12BAd",
  joke: "Egyptians claimed to invent the guitar, but they were such lyres.",
};
const postJoke = async (jokeData) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      //Here we are sending, so we are not sending accept paramter, we specify what type we send, so use content-tier
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeData),
  });
  //WE now exepct to get a json response back
  const jsonResposne22 = await response.json();
  //Now this returns a json object, if you look in console, you can get ur joke back by doing .json().json, which is also another json, so do .joke
  console.log(jsonResposne22.json.joke);
};
postJoke(jokeObject);

//IN this example, we are going to do GET, but this time we will include data to our request
//Unlike a post, our data doesnt go to a body paramter, it goes in the url
const requestJoke = async (firstName, lastName) => {
  //Here ? identifies the first variable, then & chains for next variable in request. Variables can even be arrays as inddicated by limitTo
  const response = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
  );
  const jsonResposne = await response.json();
  //Here type tells u if it is a success or not, and value gives the data
  console.log("hello");
  console.log(jsonResposne.value);
};
requestJoke("Clint", "Eastwood");
//NOTE: If you were to call an async function, you also need await for it,
//this also means the place where it is called also ebcomes async too
