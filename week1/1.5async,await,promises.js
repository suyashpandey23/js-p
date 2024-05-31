// what does sysnchronous mean
//together one after the other,sequential only one thing is happening at a time

//what does asynchronous mean
//opposite of synchronous , happens in parts , Multiple things are context switching with each other

//js can context switch by using asynchronous functions

function findsum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

function findsumtill100() {
  console.log(findsum(100));
}

setTimeout(findsumtill100, 1000); //setTimeout is one of the aynshronous fn that js provide
console.log("hello world");

const fs = require("fs");


fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hi there");

// you can notice first ji there gets printed then the clog of the txt file gets printed
// bc this is also a asynchronous fn to get data from other file

//Promises
//promise is a object that is used to handle asynchronous operations
// promise is a sysntactical sugar that make a code slightly more readable
//until now we've only used other people asysnchronous fns , how can we create an asynchronous fns of our own?
//i,e we can do that with promises

/*
Promises in JavaScript are a way to handle asynchronous operations. They represent a value that may not be available yet, but will be resolved at some point in the future. A promise can be in one of three states: pending, fulfilled, or rejected.

Here's an example of how to use promises in JavaScript:

Example:

javascript
Copy code
let promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    if (true) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 1000);
});

promise.then((result) => {
  console.log(result); // Output: Success!
}).catch((error) => {
  console.log(error); // Output: Error!
});
In this example, a new promise is created using the Promise constructor. The constructor takes a function as an argument, which is called immediately. This function takes two arguments: resolve and reject. These functions are used to resolve or reject the promise, respectively.

In the example, the promise simulates an asynchronous operation using the setTimeout function. After a delay of 1000 milliseconds, the promise is resolved with the string "Success!" if the condition is true, or rejected with the string "Error!" if the condition is false.

The promise is then handled using the then() method, which is called when the promise is fulfilled. The then() method takes a function as an argument, which is called with the resolved value of the promise.

If the promise is rejected, the catch() method is called instead. The catch() method takes a function as an argument, which is called with the rejected value of the promise.

Overall, promises are a powerful tool in JavaScript for handling asynchronous operations. They allow you to write code that is easier to read and understand, and they can help you avoid callback hell.
*/

//code witout promises->
var fs = require("fs");

function suyashreadfile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}
// callback fnc to call
function ondone(data) {
  console.log(data);
}
suyashreadfile(ondone);

//same code with promises-
var fs = require("fs");
const { resolve } = require("path");

function suyashreadfile() {
  console.log("inside suyash's readfile");
  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before resolve");
      resolve(data);
    });
  });
}
function ondone(data) {
  console.log(data);
}
suyashreadfile().then(ondone);

//what even is a promise
//its just a class that makes callbacks ans async functions slightly more readable

var d = new Promise(function (resolve) {
  resolve("fooo");
});

function callback() {
  console.log(d);
}

d.then(callback);
//whenever you create a promise you need to pass in a function as the first argument which has resolve as the First argument

//async await syntax
// (again, just syntactic sugar, still uses callback and promises under the hood)

//callback syntax
function kiratsAsyncFunction(callback) {
    // do some async logic here
    callback("hi there!")
}

async function main() {
  kiratsAsyncFunction(function(value) {
    console.log(value);
  });
}

main();


// normal promise syntax
function suyashAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

function main() {
  suyashAsyncFunction().then(function (value) {
    console.log(value);
  });
}

main();


//async cawait syntax
function suyashAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

async function main() {
  const value = await suyashAsyncFunction();
  console.log(value);
}
main();


